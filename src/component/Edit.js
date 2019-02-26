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
        return <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <strong>Id :</strong> {this.state.id}
                </div>
                <div class="card-body card-block">
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <div class="form-group">
                            <label for="nf-image" class=" form-control-label">Image</label>
                            <input type="text" id="nf-image" name="imageLink" class="form-control" value={this.state.imageLink} onChange={this.handlechange} />
                        </div>
                        <div class="form-group">
                            <label for="nf-title" class=" form-control-label">Title</label>
                            <input type="text" id="nf-title" name="title" class="form-control" value={this.state.title} onChange={this.handlechange} />
                        </div>
                        <div class="form-group">
                            <label for="nf-cat" class=" form-control-label">Category</label>
                            <input type="text" id="nf-cat" name="category" class="form-control" value={this.state.category} onChange={this.handlechange} />
                        </div>
                        <div class="form-group">
                            <label for="nf-content" class=" form-control-label">Content</label>
                            <input type="text" id="nf-content" name="content" class="form-control" value={this.state.content} onChange={this.handlechange} />
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm">
                            <i class="fa fa-dot-circle-o"></i> Simpan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Edit;