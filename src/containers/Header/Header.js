import React from 'react';
import './Header.scss';
import MarvelLogo from '../../imgs/MarvelLogo.png';


const Header = ({getData}) =>{
    const searchCharacter = (character)=>{
        if (character===""){
            getData();
        } else {
            getData(`name=${character}&`)
        }
    };
    return(
        <div className="header">
            <div className="header-logo">
                <img src={MarvelLogo}/>
            </div>
            <input type='text' placeholder="Search" className="searchBar" onChange={e=> {searchCharacter(e.target.value)}}/>
        </div>
    );
};


export default Header;