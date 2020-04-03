import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters} from './actions/index';
import Axios from 'axios';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

function App() { 
 
   return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>  
  );
}


export default App;
