import React from 'react';
import {connect} from 'react-redux';
import './Main.scss';
import MainNav from './MainNav';
import Card from '../Card/Card';

const Main = ({characters}) =>{
    return(
        <section className="main-section">
            <MainNav></MainNav>
            <div className="main">
                {
                    characters && characters.map((character,i) => {
                        return <Card
                                    key={`${i}-${character.name}`} 
                                    name={character.name}
                                    description={character.description}
                                    img={character.thumbnail}
                                    comics={character.comics && character.comics.items}>
                                </Card>
                    })
                }
            </div>
            <MainNav ></MainNav>
        </section>
    );
}
const mapStateToProps = (state)=>{
    return {
        characters: state.results
    }
}
export default connect(mapStateToProps)(Main);