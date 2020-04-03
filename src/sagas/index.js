import {all, put, call, takeEvery} from 'redux-saga/effects';
import {setCharacters} from '../actions/index';
import Axios from 'axios';


const API_URL='http://gateway.marvel.com/v1';
const API_KEY = '0b1ddbf0b332c5f2c0fc9d37422bc3b9';
const HASH = '681192de301a00a8956a85f6b4036b06';

export function* watchSearchCharacter() {
    yield takeEvery("SEARCH_CHARACTER",fetchCharactersFromAPI);
} 

export function* watchFetchAllCharacters() {
    yield takeEvery("GET_ALL_CHARACTERS", fetchCharactersFromAPI);
}

export function* fetchCharactersFromAPI(param="") {
    const res =  yield call(Axios.get, `${API_URL}/public/characters?${param}ts=1235&apikey=${API_KEY}&hash=${HASH}`);
    console.log(res.data.data);
    yield put(setCharacters(res.data.data))
};

export function* rootSaga() {
  yield all([
    watchSearchCharacter(),
    watchFetchAllCharacters(),
    fetchCharactersFromAPI()
  ])
}

export default { rootSaga};

