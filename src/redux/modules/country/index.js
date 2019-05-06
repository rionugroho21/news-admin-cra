import {LOAD_RATES} from './types';

const _datas = [];

const ACTION_HANDLERS = {
    [types.LOAD_RATES]: state => {
        return action.data
    }
}

export default (state = _datas, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}