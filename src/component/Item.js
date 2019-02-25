import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Item(props) {
    const post = props.post;
    return <div class="col-lg-4" key={post.id}>
            <div class="card">
                <div class="card-header">
                    <strong>Id :</strong> {post.id}
                </div>
                <div class="card-body card-block">
                    <form action="" method="post" class="">
                    <div class="row form-group">
                            <div class="col col-md-3"><label class=" form-control-label">Image</label></div>
                            <div class="col-12 col-md-9">
                                <p class="form-control-static">{post.imageLink}</p>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col col-md-3"><label class=" form-control-label">Title</label></div>
                            <div class="col-12 col-md-9">
                                <p class="form-control-static">{post.title}</p>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col col-md-3"><label class=" form-control-label">Category</label></div>
                            <div class="col-12 col-md-9">
                                <p class="form-control-static">{post.category}</p>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col col-md-3"><label class=" form-control-label">Content</label></div>
                            <div class="col-12 col-md-9">
                                <p class="form-control-static">{post.content}</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <Link type="submit" class="btn btn-primary btn-sm" to={`/Edit/${post.id}`}>
                        <i class="fa fa-dot-circle-o"></i> Edit
                    </Link>
                    <button onClick = {() => {
                        props.startRemovingDatas(props.index, post.id);
                        props.history.push('/');
                    }}type="reset" class="btn btn-danger btn-sm">
                        <i class="fa fa-ban"></i> Delete
                    </button>
                </div>
            </div>
        </div>
}

Item.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Item;