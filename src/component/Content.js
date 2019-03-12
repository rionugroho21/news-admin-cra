import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Content(props) {
    return <div className="animated fadeIn">
                <div className="row">
                    {props.datas
                    .map((post, index) => <Item key={index} post={post} {...props} index={index}/>)}
                </div>
            </div>
}

Content.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default Content;