import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadingNews} from '../../redux/actions/newsActions';
import {startLoadingCat} from '../../redux/actions/categoryActions';
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
        this.props.startLoadingCat();
        this.props.startLoadPhoto(1);
    }

    render(){
        const datas = this.props.datas;
        const member = this.props.datas;
        const category = this.props.datas;
        const {photo, loading} = this.props.photo;

        if (this.state.loading === true && loading === true) {
            return <LoadingDash />
        }else if(datas && member && category && photo){
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
                                    <span className="count">{category.length}</span>
                                </h4>
                                <p className="text-light">Category</p>

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
    category: PropTypes.array.isRequired,
    photo: PropTypes.object.isRequired,
    startLoadingNews: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired,
    startLoadingCat: PropTypes.func.isRequired,
    startLoadPhoto: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    datas: state.datas,
    member: state.member.member,
    category: state.category,
    photo: state.photo
})

export default connect(mapStateToProps, {startLoadingNews, startLoadingMember, startLoadingCat, startLoadPhoto})(Dashboard);