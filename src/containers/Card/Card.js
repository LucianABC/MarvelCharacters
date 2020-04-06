import React from 'react';
import './Card.scss';
import useBool from '../../hooks/useBool';

const Card = ({name, description, img, comics})=> {
    const [display, setDisplay]=useBool(false);
    return(
        <div className ="card"  style={img && {backgroundImage:`url(${img.path}.${img.extension})`}} onClick={setDisplay}>
            <h2 className="card-character-name">{name}</h2>
            {
                display?  <div className="info-container">
                                <p className="character-description">{description}</p>
                                <div className="comics-container">
                                    <h3>Appears in...</h3>
                                    {comics && comics.map((comic, i)=>{
                                        if (i<5){
                                            return <p key={i} className="comic">{comic.name}</p>
                                        }
                                    })}
                                </div>   
                           </div> : null
            }
        </div>

    );
}

export default Card;