import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(Reducer, undefined, applyMiddleware(promiseMiddleware()));