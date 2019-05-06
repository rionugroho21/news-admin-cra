import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {startRemovingMember, startLoadingMember} from '../../redux/actions';
import LoadingItem from '../common/loading/LoadingItem';

class Member extends React.Component{

    componentDidMount(){        
        this.props.startLoadingMember();
    }

    submit = (index, id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you wish to delete this item?',
            buttons: [
              {
                  label: 'Yes',
                  onClick: () => this.props.startRemovingMember(index, id)
              },
              {
                  label: 'No',
                  onClick: () => false
              }
            ]
        })
    }

    render(){
        const {member, loading} = this.props.member;

        if (loading === true) {
            return <LoadingItem />
        }else if(member){
            return (
            <div className="animated fadeIn">
                <div className="row">
                    {member
                    .map((member, index) => 
                        <div className="col-lg-4" key={index} index={index}>
                            <div className="card">
                                <div className="card-header">
                                    <strong>Id :</strong> {member.id}
                                </div>
                                <div className="card-body card-block">
                                    <form>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.name}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Date of Birth</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.dateob.toString()}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Email</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.email}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Phone</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Sex</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.sex}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Country</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.country}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Zip Code</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.zipCode}</p>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className="form-control-label">Address</label></div>
                                            <div className="col-12 col-md-9">
                                                <p className="form-control-static">{member.address}</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <Link type="submit" className="btn btn-primary btn-sm" to={`/editMember/${member.id}`}>
                                        <i className="fa fa-dot-circle-o"></i> Edit
                                    </Link>
                                    <button onClick = {() => {
                                        this.submit(index, member.id);
                                    }}
                                    type="reset" className="btn btn-danger btn-sm">
                                        <i className="fa fa-ban"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            )
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

Member.propTypes = {
    member: PropTypes.object.isRequired,
    startRemovingMember: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    member: state.member
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({startRemovingMember, startLoadingMember}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);