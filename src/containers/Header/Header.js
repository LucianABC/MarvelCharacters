import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters, fetchCharacterFromAPI} from '../../actions/index';
import './Header.scss';
import MarvelLogo from '../../imgs/MarvelLogo.png';

const Header = ({search}) =>{
    const [name, setName] =useState("");   
    const searchCharacter =()=>{
        search(name)
    }

    return(
        <div className="header">
            <div className="header-logo">
                <img src={MarvelLogo}/>
            </div>
            <div className="search">
                <input type='text' placeholder="Search" className="searchBar" onChange={e=> {setName(e.target.value)}}/>
                <button type="button" onClick={searchCharacter}>OK</button>
            </div>
        </div>
    );
};

const mapDispatchToProps=(dispatch)=>{
    return {
        search: (name)=> dispatch(fetchCharacterFromAPI(name)),
        allCharacters: ()=> dispatch(fetchAllCharacters())
    }
}
export default connect(null, mapDispatchToProps)(Header);
