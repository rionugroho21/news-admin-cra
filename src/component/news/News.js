import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import {startLoadingNews} from '../../redux/actions/newsActions';
import Loading from '../common/loading/Loading';

class News extends Component{
    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingNews().then(() => {
            this.setState({loading: false});
        });
    }

    render(){
        const datas = this.props.datas;
        if (this.state.loading === true) {
            return <Loading />
        }else if(datas){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        {datas
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
    datas: PropTypes.array.isRequired,
    startLoadingNews: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    datas: state.datas
})

export default connect(mapStateToProps, {startLoadingNews})(News);