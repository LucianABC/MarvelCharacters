import React from 'react';
import './Main.scss';

const MainNav = ({data, getData})=> {
    const nextPage =()=>{        
        if (data.offset+20<=1493){
            let nextPage = data.offset+20;
            getData(`offset=${nextPage}&`);
            console.log(nextPage)
        }
    }
    const prevPage =()=>{
        if (data.offset-20>=0){
            let prevPage = data.offset -20;
            getData(`offset=${prevPage}&`)
        }
    }
    return(
        <div className="main-nav">
            <button type="button" onClick={e=>{prevPage()}}>Prev</button>
            <button type="button" onClick={e=>{nextPage()}}>Next</button>
        </div>
    );
}

export default MainNav;