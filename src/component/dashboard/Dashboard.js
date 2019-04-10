import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadingNews} from '../../redux/actions/newsActions';
import {startLoadingCat} from '../../redux/actions/categoryActions';
import {startLoadingMember} from '../../redux/actions/memberActions';

class Dashboard extends Component{
    componentDidMount(){
        this.props.startLoadingNews();
        this.props.startLoadingMember();
        this.props.startLoadingCat();
    }

    render(){
        console.log(this.props)
        return <div>
                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-flat-color-1">
                        <div className="card-body pb-0">
                            <h4 className="mb-0">
                                <span className="count">{this.props.datas.length}</span>
                            </h4>
                            <p className="text-light">News</p>
                        </div>

                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-flat-color-2">
                        <div className="card-body pb-0">
                            <h4 className="mb-0">
                                <span className="count">{this.props.member.length}</span>
                            </h4>
                            <p className="text-light">Members</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-flat-color-3">
                        <div className="card-body pb-0">
                            <h4 className="mb-0">
                                <span className="count">{this.props.category.length}</span>
                            </h4>
                            <p className="text-light">Category</p>

                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-flat-color-4">
                        <div className="card-body pb-0">
                            <h4 className="mb-0">
                                <span className="count">10468</span>
                            </h4>
                            <p className="text-light">Members online</p>
                        </div>
                    </div>
                </div>
            </div>
    }
}

Dashboard.propTypes = {
    datas: PropTypes.array.isRequired,
    member: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
    startLoadingNews: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired,
    startLoadingCat: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    datas: state.datas,
    member: state.member.member,
    category: state.category
})

export default connect(mapStateToProps, {startLoadingNews, startLoadingMember, startLoadingCat})(Dashboard);