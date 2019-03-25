import React from 'react';
import Option from '../common/Option';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

export class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            category: '',
            checked: false,
            date: new Date(),
            present: new Date(),
            checkPresent: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const title = event.target.elements.title.value;
        let date = new Date();
        if(this.state.checkPresent){
            date = this.state.present;
        }else{
            date = this.state.date;
        }
        const category = event.target.elements.category.value;
        let akses = "";
        if(this.state.checked){
            akses = "Private"
        }else{
            akses = "Public"
        }
        const writer = event.target.elements.writer.value;
        const content = event.target.elements.content.value;
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            title: title,
            date: date,
            category: category,
            akses: akses,
            writer: writer,
            content: content
        }
        if(title && imageLink){
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }
    }

    handleChange({target}) {
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

    handleCheck(){
        this.setState({
            checkPresent: !this.state.checkPresent,
        });
        console.log(this.state.checkPresent);
    }

    render(){
        return <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <strong>Tambahkan </strong>Data
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nf-image" className="form-control-label">Image</label>
                                <input type="text" id="nf-image" name="link" placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-title" className="form-control-label">Title</label>
                                <input type="text" id="nf-title" name="title" placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-date" className="form-control-label">Date</label>
                                <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.date} onChange={this.handleDate} disabled={this.state.checkPresent} />
                                <label className="checkbox-inline mgl10"><input type="checkbox" id="nf-present" name="present" value={this.state.present} checked={this.state.checkPresent} onChange={this.handleCheck} /> Present</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-cat" className="form-control-label">Category</label>
                                <Option id="nf-cat" className="form-control option-category" name="category" value={this.state.category} onChange={this.handleChange} {...this.props} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-akses" className="form-control-label">Akses</label>
                                <label className="checkbox-inline"><input type="checkbox" id="nf-akses" name="akses" value="Private" defaultChecked={this.state.checked} onChange={this.handlechange} /> Private</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-writer" className="form-control-label">Writer</label>
                                <label className="radio-inline"><input type="radio" name="writer" value="Admin" /> Admin</label>
                                <label className="radio-inline"><input type="radio" name="writer" value="Guest" /> Guest</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-content" className="form-control-label">Content</label>
                                <textarea type="text" id="nf-content" name="content" placeholder="" className="form-control" rows="5" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                <i className="fa fa-dot-circle-o"></i> Tambah
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    }
}