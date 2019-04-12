import React from 'react';

class Popup extends React.Component{
    render(){
        return  <div className='popup'>
                    <div className='popup_inner'>
                        <div className='popup_box'>
                            <img src={this.props.imgSrc} alt=""/>
                            <button className='close' onClick={this.props.closePopup}><i className="fa fa-close"></i></button>
                        </div>
                    </div>
                </div>
    }
}

export default Popup;