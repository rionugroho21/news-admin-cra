import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadingNews} from '../../redux/actions/newsActions';
import {startLoadComment} from '../../redux/actions/commentActions';
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
        this.props.startLoadComment();
        this.props.startLoadPhoto(1);
    }

    render(){
        const news = this.props.news;
        const member = this.props.member;
        const comment = this.props.comment;
        const {photo, loading} = this.props.photo;

        if (this.state.loading === true && loading === true) {
            return <LoadingDash />
        }else if(news && member && comment && photo){
            return <div className="news">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-flat-color-1">
                            <div className="card-body">
                                <h4 className="mb-1">
                                    <span className="count">{news.length}</span>
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
    news: PropTypes.array.isRequired,
    member: PropTypes.array.isRequired,
    comment: PropTypes.array.isRequired,
    photo: PropTypes.object.isRequired,
    startLoadingNews: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired,
    startLoadComment: PropTypes.func.isRequired,
    startLoadPhoto: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    news: state.news,
    member: state.member,
    comment: state.comment.comment,
    photo: state.photo
})

export default connect(mapStateToProps, {startLoadingNews, startLoadingMember, startLoadComment, startLoadPhoto})(Dashboard);