import React from 'react';
import {Link} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Popup from './Popup';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
        };
    }

    submit = (index, id) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure you wish to delete this item?',
          buttons: [
            {
                label: 'Yes',
                onClick: () => this.props.startRemovingDatas(index, id)
            },
            {
                label: 'No',
                onClick: () => false
            }
          ]
        })
    }

    togglePopup = () => {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    render(){
        const post = this.props.post;
        var CDate = new Date(post.date);
        
        return <div className="col-lg-4" key={post.id}>
            <div className="card">
                <div className="card-header">
                    <strong>Id :</strong> {post.id}
                </div>
                <div className="card-body card-block">
                    <form>
                        <div className="row form-group">
                            <div className="col-md-6 offset-md-3" onClick={this.togglePopup}>
                                <img src={post.imageLink} />
                                {this.state.showPopup ? 
                                <Popup
                                    imgSrc={post.imageLink}
                                    closePopup={this.togglePopup}
                                />
                                : null
                                }
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
                            <div className="col col-md-3"><label className=" form-control-label">Date</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{CDate.toString()}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Category</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.category}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Akses</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.akses.toString()}</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label className=" form-control-label">Writer</label></div>
                            <div className="col-12 col-md-9">
                                <p className="form-control-static">{post.writer}</p>
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
                        this.submit(this.props.index, post.id);
                    }}
                    type="reset" className="btn btn-danger btn-sm">
                        <i className="fa fa-ban"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    }
}

export default Item;