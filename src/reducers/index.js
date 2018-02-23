/*
    to combine the reducers!!!
*/
import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
// import HandleReducer from './HandleReducer';

export default combineReducers({
    news: NewsReducer,
});
