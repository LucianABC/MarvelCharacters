import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger"; 
import rootReducer from '../reducers/index';
import {rootSaga} from "../sagas";

/* { //esto seria en realidad el state inicial en realidad se saca de la API 
    offset: 0,
    limit: 20,
    total: 1493,
    count: 20,
    results:[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
};*/
let initialState={ 
    offset: 0,
    limit: 20,
    total: 1493,
    count: 20,
    results:[{}]
}
export const sagaMiddleware= createSagaMiddleware();
export const store = createStore(
rootReducer, 
initialState,
applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga)

export default store; 