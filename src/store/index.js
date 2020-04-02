import {createStore} from 'redux';
import rootReducer from '../reducers/index';

let initialState = {
    characters: []
};

const store = createStore(rootReducer, initialState);


export default store; 