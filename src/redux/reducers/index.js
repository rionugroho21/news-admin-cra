import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import categoryReducers from './categoryReducers';
import memberReducers from './memberReducers';
import photoReducers from './photoReducers';
import commentReducers from './commentReducers';

export default combineReducers({
    news: newsReducers,
    category: categoryReducers,
    member: memberReducers,
    photo: photoReducers,
    comment: commentReducers
});