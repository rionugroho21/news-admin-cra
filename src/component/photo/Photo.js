import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadPhoto} from '../../redux/actions/photoActions';
import Loading from '../common/loading/LoadingDots';

class Photo extends React.Component{
    componentDidMount(){
        this.props.startLoadPhoto(1);
    }

    render(){
        const { photo, loading } = this.props.photo;

        if(loading === true){
            return <Loading />
        }else if(photo){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        {photo.map((data, index) => 
                            <div className="col-lg-2" key={index} index={index}>
                                <div className="photo">
                                    <div className="photo-img"><img src={data.thumbnailUrl} /></div>
                                    <div className="photo-title">{data.title}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row pagination-photo">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

Photo.propTypes = {
    startLoadPhoto: PropTypes.func.isRequired,
    photo: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    photo: state.photo
})
  
export default connect(mapStateToProps, { startLoadPhoto })(Photo);