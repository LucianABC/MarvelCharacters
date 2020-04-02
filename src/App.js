import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

const API_URL='http://gateway.marvel.com/v1';
const API_KEY = '0b1ddbf0b332c5f2c0fc9d37422bc3b9';
const HASH = '681192de301a00a8956a85f6b4036b06';

function App() { 
  const [data, setData] = useState([]);
 
  const getData = async (param="")=>{
      try{
        const res =  await Axios.get(`${API_URL}/public/characters?${param}ts=1235&apikey=${API_KEY}&hash=${HASH}`);
          setData(res.data.data);
          console.log(res.data.data);
        }catch(err){
        console.log(err);
      };
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <Provider store={store}>
      <div className="App">
        <Header getData={getData}></Header>
        <Main data={data} getData={getData}></Main>
      </div>
    </Provider>
    
  );
}

export default App;
