import {characters} from '../static-data/index';

const rootReducer = (state = {characters}, action)=> {
    switch (action.type) {
        case 'SEARCH_CHARACTER':
            return;
        break;
        default:
            return characters
    }
}

export default  rootReducer;