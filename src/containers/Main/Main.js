import React from 'react';
import './Main.scss';
import MainNav from './MainNav';
import Card from '../Card/Card';

const Main = ({data, getData}) =>{

    return(
        <section className="main-section">
            <MainNav data={data} getData={getData}></MainNav>
            <div className="main">
                {
                    data.results && data.results.map((character,i) => {
                        return <Card
                                    key={`${i}-${character.name}`} 
                                    name={character.name}
                                    description={character.description}
                                    img={character.thumbnail}
                                    comics={character.comics.items}>
                                </Card>
                    })
                }
            </div>
            <MainNav data={data} getData={getData}></MainNav>
        </section>
    );
}

export default Main;