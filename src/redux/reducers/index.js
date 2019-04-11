import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import categoryReducers from './categoryReducers';
import memberReducers from './memberReducers';
import photoReducers from './photoReducers';

export default combineReducers({
    datas: newsReducers,
    category: categoryReducers,
    member: memberReducers,
    photo: photoReducers
});