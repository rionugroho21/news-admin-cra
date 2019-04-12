import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadingNews} from '../../redux/actions/newsActions';
import {startLoadTable} from '../../redux/actions/tableActions';
import {startLoadingMember} from '../../redux/actions/memberActions';
import {startLoadPhoto} from '../../redux/actions/photoActions';
import LoadingDash from '../common/loading/LoadingDash';

class Dashboard extends Component{
    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingNews().then(() => {
            this.setState({loading: false});
        });
        this.props.startLoadingMember();
        this.props.startLoadTable();
        this.props.startLoadPhoto(1);
    }

    render(){
        const datas = this.props.datas;
        const member = this.props.member;
        const comment = this.props.comment;
        const {photo, loading} = this.props.photo;

        if (this.state.loading === true && loading === true) {
            return <LoadingDash />
        }else if(datas && member && comment && photo){
            return <div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-flat-color-1">
                            <div className="card-body">
                                <h4 className="mb-1">
                                    <span className="count">{datas.length}</span>
                                </h4>
                                <p className="text-light">News</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-flat-color-2">
                            <div className="card-body">
                                <h4 className="mb-1">
                                    <span className="count">{member.length}</span>
                                </h4>
                                <p className="text-light">Members</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-flat-color-3">
                            <div className="card-body">
                                <h4 className="mb-1">
                                    <span className="count">{comment.length}</span>
                                </h4>
                                <p className="text-light">Comment</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-flat-color-4">
                            <div className="card-body">
                                <h4 className="mb-1">
                                    <span className="count">{photo.length}</span>
                                </h4>
                                <p className="text-light">Photo</p>
                            </div>
                        </div>
                    </div>
                </div>
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

Dashboard.propTypes = {
    datas: PropTypes.array.isRequired,
    member: PropTypes.array.isRequired,
    comment: PropTypes.array.isRequired,
    photo: PropTypes.object.isRequired,
    startLoadingNews: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired,
    startLoadTable: PropTypes.func.isRequired,
    startLoadPhoto: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    datas: state.datas,
    member: state.member,
    comment: state.table.table,
    photo: state.photo
})

export default connect(mapStateToProps, {startLoadingNews, startLoadingMember, startLoadTable, startLoadPhoto})(Dashboard);