import * as types from './types';

const _datas = [];

const ACTION_HANDLERS = {
    [types.LOAD_CATEGORY]: (state, action) => {
        return action.data
    }
}

export default (state = _datas, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}