import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters} from './actions/index';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

function App({allCharacters}) { 
  useEffect(()=>{
    allCharacters();
  },[])
   return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>  
  );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    allCharacters: ()=> dispatch(fetchAllCharacters())
  }
}

export default connect(null,mapDispatchToProps)(App);
