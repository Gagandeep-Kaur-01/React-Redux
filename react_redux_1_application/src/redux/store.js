import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import bookReducer from './book/bookReducer';

const store = createStore(bookReducer, applyMiddleware(logger));

export default store;

// imported middleware (applyMiddleware) 
// Also passed this to store with having logger as parameter