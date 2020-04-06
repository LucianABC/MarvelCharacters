export const fetchCharacterFromAPI = (name="") =>({
    type: "SEARCH_CHARACTER",
    param: `name=${name}&`
});

export const fetchAllCharacters = () =>({
    type: "GET_ALL_CHARACTERS",
    param: ""

});

export const navigateCharacters = (page)=>({
    type: "NAVIGATE",
    param: `offset=${page}&`
});

export const setCharacters =(data)=>({
    type: "SET_CHARACTERS",
    payload: data
});
export default { 
    fetchCharacterFromAPI,
    fetchAllCharacters,
    navigateCharacters,
    setCharacters
}