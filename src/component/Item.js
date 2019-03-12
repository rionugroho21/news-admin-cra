import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Item(props) {
    const post = props.post;
    return <div className="col-lg-4" key={post.id}>
            <div className="card">
                <div className="card-header">
                    <strong>Id :</strong> {post.id}
                </div>
                <div className="card-body card-block">
                    <form>
                        <div className="row form-group">
                            <div className="col-md-6 offset-md-3">
                                <img src={post.imageLink} />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Image</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.imageLink}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Title</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.title}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Category</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.category}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Content</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.content}</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <Link type="submit" className="btn btn-primary btn-sm" to={`/Edit/${post.id}`}>
                        <i className="fa fa-dot-circle-o"></i> Edit
                    </Link>
                    <button onClick = {() => {
                        console.log(props.index, post.id);
                        if (window.confirm('Are you sure you wish to delete this item?'))
                        props.startRemovingDatas(props.index, post.id);
                        props.history.push('/');
                    }}
                    type="reset" className="btn btn-danger btn-sm">
                        <i className="fa fa-ban"></i> Delete
                    </button>
                </div>
            </div>
        </div>
}

Item.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Item;