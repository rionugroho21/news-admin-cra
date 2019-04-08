import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import categoryReducers from './categoryReducers';
import memberReducers from './memberReducers';

export default combineReducers({
    datas: newsReducers,
    category: categoryReducers,
    member: memberReducers
});