const rootReducer = (state, action)=> {
    switch (action.type) {
        case 'SEARCH_CHARACTER':
        case 'NAVIGATE':
            break;
        case 'GET_ALL_CHARACTERS':
        case "SET_CHARACTERS":
            return {...action.payload};
            
        default:
            return state;
    }
}
export default  rootReducer;