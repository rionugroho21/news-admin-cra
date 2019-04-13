import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import {startLoadingNews} from '../../redux/actions/newsActions';
import LoadingItem from '../common/loading/LoadingItem';

class News extends Component{
    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingNews().then(() => {
            this.setState({loading: false});
        });
    }

    render(){
        const news = this.props.news;
        if (this.state.loading === true) {
            return <LoadingItem />
        }else if(news){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        {news
                        .map((post, index) => <NewsItem key={index} post={post} index={index}/>)}
                    </div>
                </div>
            )
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired,
    startLoadingNews: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    news: state.news
})

export default connect(mapStateToProps, {startLoadingNews})(News);