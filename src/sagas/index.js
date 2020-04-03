import {call, takeEvery} from 'redux-saga/effects'
import Axios from 'axios';


const API_URL='http://gateway.marvel.com/v1';
const API_KEY = '0b1ddbf0b332c5f2c0fc9d37422bc3b9';
const HASH = '681192de301a00a8956a85f6b4036b06';

export function* watchFetchCharacters() {
    yield takeEvery("FETCH_CHARACTERS",fetchCharacters);
} 

export function* fetchCharacters(param="") {
    const res =  yield call(Axios.get, `${API_URL}/public/characters?${param}ts=1235&apikey=${API_KEY}&hash=${HASH}`);
    console.log(res.data.data);
} 

export default { watchFetchCharacters, fetchCharacters };

