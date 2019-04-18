import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadComment} from '../../redux/actions/commentActions';
import Loading from '../common/loading/LoadingDots';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            option: 'name'
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.onSort = this.onSort.bind(this)
        this.handleOption = this.handleOption.bind(this)
    }

    componentDidMount(){
        this.props.startLoadComment();
    }

    searchHandler = (e) => {
        this.setState({term: e.target.value});
    }

    searchingFor = (term, option) => {
        return (x) => {
            if(x[option] !== null && x[option] !== "" && x[option] !== undefined){
                return x[option].toLowerCase().includes(term.toLowerCase()) || false;
            }
        }
    }

    onSort(event, sortKey){
        event.preventDefault();
        const data = this.props.table.table;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
        this.setState({data});
    }

    handleOption({target}) {
        this.setState({
            [target.name]: target.value
        });
    }

    render(){
        const { comment, loading } = this.props.comment;
        const term = this.state.term;
        const option = this.state.option;

        if(loading === true){
            return <Loading />
        }else if(comment){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="container">
                            <div className="clearfix">
                                <div className="form-group search">
                                    <input type="text" id="searchData" name="" placeholder="Search..." className="form-control" onChange={this.searchHandler} value={term}/>
                                </div>
                                <div className="form-group filter">
                                    <label htmlFor="nf-filter" className="">Search by</label>
                                    <select className="form-control" name="option" value={this.state.option} onChange={this.handleOption}>
                                        <option value="name">Name</option>
                                        <option value="email">Email</option>
                                        <option value="body">Comment</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="tableData" className="table table-striped table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th></th>
                                            <th onClick={e => this.onSort(e, 'id')}>Id</th>
                                            <th onClick={e => this.onSort(e, 'name')}>Name</th>
                                            <th onClick={e => this.onSort(e, 'email')}>Email</th>
                                            <th onClick={e => this.onSort(e, 'body')}>Comment</th>
                                            {/* <th></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comment.filter(this.searchingFor(term, option)).map((data, index) =>
                                            <tr key={index}>
                                                <td className="bs-checkbox "><input name="btSelectItem" type="checkbox" /></td>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.body}</td>
                                                {/* <td className="table-wrap">
                                                    <div className="table-button">
                                                        <button className="btn btn-success"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                        <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                    </div>
                                                </td> */}
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

Comment.propTypes = {
    startLoadComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    comment: state.comment
})
  
export default connect(mapStateToProps, { startLoadComment })(Comment);