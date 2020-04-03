

const rootReducer = (state, action)=> {
    switch (action.type) {
        case 'SEARCH_CHARACTER':
            return;
            break;
        case 'GET_ALL_CHARACTERS':
            return;
            break;
        case "SET_CHARACTERS":
            return {...action.payload};
            break;
        case 'NAVIGATE':
            return;
            break;
                
        default:
            return state;
    }
}

export default  rootReducer;