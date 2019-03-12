import React from 'react';

export class Add extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const title = event.target.elements.title.value;
        const category = event.target.elements.category.value;
        const content = event.target.elements.content.value;
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            title: title,
            category: category,
            content: content
        }
        if(title && imageLink){
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }
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
                            <label htmlFor="nf-cat" className="form-control-label">Category</label>
                            <input type="text" id="nf-cat" name="category" placeholder="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nf-content" className="form-control-label">Content</label>
                            <input type="text" id="nf-content" name="content" placeholder="" className="form-control" />
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