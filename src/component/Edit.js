import React, {Component} from 'react';

class Edit extends Component {
    render(){
        const {match, datas} = this.props;
        const id = Number(match.params.id);
        const post = datas.find((post) => post.id === id);
        //const index = this.props.datas.findIndex((post) => post.id === id);
        return <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <strong>Id :</strong> {post.id}
                </div>
                <div class="card-body card-block">
                    <form action="" method="post" class="">
                        <div class="form-group">
                            <label for="nf-image" class=" form-control-label">Image</label>
                            <input type="text" id="nf-image" name="nf-image" placeholder="" class="form-control" value={post.imageLink} />
                        </div>
                        <div class="form-group">
                            <label for="nf-title" class=" form-control-label">Title</label>
                            <input type="text" id="nf-title" name="nf-title" placeholder="" class="form-control" value={post.title} />
                        </div>
                        <div class="form-group">
                            <label for="nf-cat" class=" form-control-label">Category</label>
                            <input type="text" id="nf-cat" name="nf-cat" placeholder="" class="form-control" value={post.category} />
                        </div>
                        <div class="form-group">
                            <label for="nf-content" class=" form-control-label">Content</label>
                            <input type="text" id="nf-content" name="nf-content" placeholder="" class="form-control" value={post.content} />
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary btn-sm">
                        <i class="fa fa-dot-circle-o"></i> Simpan
                    </button>
                </div>
            </div>
        </div>
    }
}

export default Edit;