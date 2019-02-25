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
        return <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <strong>Tambahkan </strong>Data
                </div>
                <div class="card-body card-block">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="nf-image" class=" form-control-label">Image</label>
                            <input type="text" id="nf-image" name="link" placeholder="" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="nf-title" class=" form-control-label">Title</label>
                            <input type="text" id="nf-title" name="title" placeholder="" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="nf-cat" class=" form-control-label">Category</label>
                            <input type="text" id="nf-cat" name="category" placeholder="" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="nf-content" class=" form-control-label">Content</label>
                            <input type="text" id="nf-content" name="content" placeholder="" class="form-control" />
                        </div>
                        {/* <div class="card-footer"> */}
                            <button type="submit" class="btn btn-primary btn-sm">
                                <i class="fa fa-dot-circle-o"></i> Tambah
                            </button>
                        {/* </div> */}
                    </form>
                </div>
                {/* <div class="card-footer">
                    <button type="submit" class="btn btn-primary btn-sm" onSubmit={this.handleSubmit}>
                        <i class="fa fa-dot-circle-o"></i> Tambah
                    </button>
                </div> */}
            </div>
        </div>
    }
}