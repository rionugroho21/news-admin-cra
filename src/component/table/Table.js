import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadTable} from '../../redux/actions/tableActions';
import Loading from '../common/loading/LoadingDots';

function searchingFor(term) {
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || false;
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount(){
        this.props.startLoadTable();
    }

    searchHandler = (e) => {
        this.setState({term: e.target.value});
    }

    render(){
        const { table, loading } = this.props.table;
        const term = this.state.term;
        if(loading === true){
            return <Loading />
        }else if(table){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="container">
                            <div className="clearfix">
                                <div className="form-group search">
                                    <input type="text" id="searchData" name="" placeholder="Search by name..." className="form-control" onChange={this.searchHandler} value={term}/>
                                </div>
                                {/* <div className="form-group filter">
                                    <label htmlFor="nf-filter" className="">Sort by</label>
                                    <select className="form-control">
                                        <option value="">Name</option>
                                        <option value="all">Email</option>
                                        <option value="selected">Content</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className="table-responsive">
                                <table id="tableData" className="table table-striped table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th data-field="state" data-checkbox="true"></th>
                                            <th data-field="id" data-filter-control="input" data-sortable="true">Id</th>
                                            <th data-field="name" data-filter-control="select" data-sortable="true">Name</th>
                                            <th data-field="email" data-filter-control="select" data-sortable="true">Email</th>
                                            <th data-field="body" data-sortable="true">Content</th>
                                            <th data-field="" data-sortable="true"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table.filter(searchingFor(term)).map((data, index) =>
                                            <tr key={index}>
                                                <td className="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox" /></td>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.body}</td>
                                                <td className="table-button">
                                                    <button className="btn btn-success"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                    <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                </td>
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

Table.propTypes = {
    startLoadTable: PropTypes.func.isRequired,
    table: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    table: state.table
})
  
export default connect(mapStateToProps, { startLoadTable })(Table);