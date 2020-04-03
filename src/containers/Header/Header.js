import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters, fetchCharacterFromAPI} from '../../actions/index';
import './Header.scss';
import MarvelLogo from '../../imgs/MarvelLogo.png';


const Header = ({search, allCharacters}) =>{
    const [name, setName] =useState("");
    
    useEffect(()=>{
        if(name===""){
            allCharacters();
        }else{
            search(name);
        }
    },[name]);

    return(
        <div className="header">
            <div className="header-logo">
                <img src={MarvelLogo}/>
            </div>
            <input type='text' placeholder="Search" className="searchBar" onChange={e=> {setName(e.target.value)}}/>
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
