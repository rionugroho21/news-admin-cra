import { combineReducers } from 'redux';
import newsReducers from './modules/news';
import categoryReducers from './modules/category';
import memberReducers from './modules/member';
import photoReducers from './modules/photo';
import commentReducers from './modules/comment';

export default combineReducers({
    news: newsReducers,
    category: categoryReducers,
    member: memberReducers,
    photo: photoReducers,
    comment: commentReducers
});