import React from 'react';
import Option from '../common/Option';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {startEditingNews, startLoadingNews} from '../../redux/actions/newsActions';
import {startLoadingCat} from '../../redux/actions/categoryActions';

class NewsEdit extends React.Component {
    constructor(props){
        super(props);
        const datas = this.props.datas;
        const id = Number(this.props.match.params.id);
        const post = datas.find((post) => post.id === id);
        this.state = {
            id: post.id,
            imageLink: post.imageLink,
            title: post.title,
            date: post.date,
            category: post.category,
            akses: post.akses,
            writer: post.writer,
            content: post.content,
            checked: true,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    componentDidMount(){
        this.props.startLoadingNews();
        this.props.startLoadingCat();
        this.checkAkses();
        this.checkDate();
    }

    handleSubmit(event) {
        event.preventDefault();
        let ck = ""
        if(this.state.akses){
            ck = "Private"
        }else{
            ck = "Public"
        }
        const post = {
            id: this.state.id,
            imageLink: this.state.imageLink,
            title: this.state.title,
            date: this.state.date,
            category: this.state.category,
            akses: ck,
            writer: this.state.writer,
            content: this.state.content
        }
        if(this.validateForm(post)){
            this.props.startEditingNews(post);
            this.props.history.push('/news');
        }
    }

    handlechange({target}){
        if(target.type === 'checkbox'){
            this.setState({
                checked: !this.state.checked,
            });
        }
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleDate(date) {
        this.setState({
          date: date
        });
    }

    checkAkses(){
        if(this.state.akses === "Private"){
            this.setState({
                checked: true
            });
        }else{
            this.setState({
                checked: false
            });
        }
    }

    checkDate(){
        if(this.state.date === "" || this.state.date === undefined || this.state.date === null){
            this.setState({
                date: new Date()
            });
        }else{
            this.setState({
                date: this.state.date
            });
        }
    }

    validateForm(post){
        let field = post;
        let formIsValid = true;
        let errors = {};

        if (field.title === "") {
            formIsValid = false;
            errors["title"] = "*Title is empty.";
        }

        if (field.imageLink === "") {
            formIsValid = false;
            errors["link"] = "*Image Link is empty.";
        }

        if (field.content === "") {
            formIsValid = false;
            errors["content"] = "*Content is empty.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render(){
        return <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <strong>Id :</strong> {this.state.id}
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={this.handleSubmit}>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <div className="form-group">
                                <label htmlFor="nf-image" className=" form-control-label">Image</label>
                                <input type="text" id="nf-image" name="imageLink" className="form-control" value={this.state.imageLink} onChange={this.handlechange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-title" className=" form-control-label">Title</label>
                                <input type="text" id="nf-title" name="title" className="form-control" value={this.state.title} onChange={this.handlechange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-date" className="form-control-label">Date</label>
                                <DatePicker 
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa" 
                                    showTimeInput
                                    selected={new Date(this.state.date)} 
                                    onChange={this.handleDate} 
                                    disabled={true}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-cat" className=" form-control-label">Category</label>
                                <Option id="nf-cat" className="form-control option-category" name="category" value={this.state.category} onChange={this.handlechange} {...this.props} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-akses" className="form-control-label">Akses</label>
                                <label className="checkbox-inline"><input type="checkbox" id="nf-akses" name="akses" value="Private" checked={this.state.checked} onChange={this.handlechange} /> Private</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-writer" className="form-control-label">Writer</label>
                                <label className="radio-inline"><input type="radio" name="writer" checked={this.state.writer === "Admin"} value="Admin" onChange={this.handlechange} /> Admin</label>
                                <label className="radio-inline"><input type="radio" name="writer" checked={this.state.writer === "Guest"} value="Guest" onChange={this.handlechange} /> Guest</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-content" className=" form-control-label">Content</label>
                                <textarea type="text" id="nf-content" name="content" placeholder="" className="form-control" rows="5" value={this.state.content} onChange={this.handlechange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                <i className="fa fa-dot-circle-o"></i> Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    }
}

NewsEdit.propTypes = {
    datas: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
    startEditingNews: PropTypes.func.isRequired,
    startLoadingNews: PropTypes.func.isRequired,
    startLoadingCat: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    datas: state.datas,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({startEditingNews, startLoadingNews, startLoadingCat}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsEdit);