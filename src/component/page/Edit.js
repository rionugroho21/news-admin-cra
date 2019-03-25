import React from 'react';
import Option from '../common/Option';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

class Edit extends React.Component {
    constructor(props){
        super(props);
        const {match, datas} = this.props;
        const id = Number(match.params.id);
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
            checked: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.handleDate = this.handleDate.bind(this);
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
        this.props.startEditingDatas(post);
        this.props.startLoadingPost();
        this.props.history.push('/');
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

    componentDidMount(){
        this.checkAkses();
        this.checkDate();
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
                                <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.date} onChange={this.handleDate} disabled="true"/>
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
                                <i className="fa fa-dot-circle-o"></i> Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    }
}

export default Edit;