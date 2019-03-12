import React from 'react';

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
            category: post.category,
            content: post.content
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const post = {
            id: this.state.id,
            imageLink: this.state.imageLink,
            title: this.state.title,
            category: this.state.category,
            content: this.state.content
        }
        this.props.startEditingDatas(post);
        this.props.startLoadingPost();
        this.props.history.push('/');
    }

    handlechange({target}){
        this.setState({
            [target.name]: target.value
        });
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
                            <label htmlFor="nf-cat" className=" form-control-label">Category</label>
                            <input type="text" id="nf-cat" name="category" className="form-control" value={this.state.category} onChange={this.handlechange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nf-content" className=" form-control-label">Content</label>
                            <input type="text" id="nf-content" name="content" className="form-control" value={this.state.content} onChange={this.handlechange} />
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