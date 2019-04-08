import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import {startLoadingNews} from '../../redux/actions/newsActions';

class News extends Component{
    componentDidMount(){
        this.props.startLoadingNews();
    }

    render(){
        const datas = this.props.datas;
        return (
            <div className="animated fadeIn">
                <div className="row">
                    {datas
                    .map((post, index) => <NewsItem key={index} post={post} index={index}/>)}
                </div>
            </div>
        )
    }
}

News.propTypes = {
    datas: PropTypes.array.isRequired,
    startLoadingNews: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    datas: state.datas
})

export default connect(mapStateToProps, {startLoadingNews})(News);