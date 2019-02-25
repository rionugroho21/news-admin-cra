import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Coba from './Coba';

function Content(props) {
    return <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">
                    {props.datas
                    .map((post, index) => <Coba key={index} post={post} {...props} index={index}/>)}
                    <Item />
                </div>
            </div>
        </div>
}

Content.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default Content;