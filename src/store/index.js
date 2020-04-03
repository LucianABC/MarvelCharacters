import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger"; 

import rootReducer from '../reducers/index';
import {characters} from '../static-data/index';
import { watchFetchCharacters } from "../sagas";

/* { //esto en realidad se saca de la API pero bueno ahora vamos a
    offset: 0,
    limit: 20,
    total: 1493,
    count: 20,
    results:[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
};*/
export const sagaMiddleware= createSagaMiddleware();
export const store = createStore(
rootReducer, 
characters,
applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(watchFetchCharacters)

export default store; 