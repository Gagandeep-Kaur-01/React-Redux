import {createStore, applyMiddleware} from 'redux';
import bookReducer from './book/bookReducer';

const store = createStore(bookReducer);

export default store;