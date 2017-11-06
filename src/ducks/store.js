import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(
    Reducer,
    applyMiddleware(reduxPromiseMiddleware())
  );