import React from 'react';
import { connect } from 'react-redux';
import {navigateCharacters} from '../../actions/index';
import './Main.scss';

const MainNav = ({offset, limit, total, navigate})=> {
    const navigation = (direction) =>{
        let page = offset;
        if (direction==="next" && (page+limit<=total)){
            page += limit;
        } else if (direction==="prev" && (page-limit>=0)){
            page -=limit
        }
        navigate(page);
    }

    return(
        <div className="main-nav">
            <button type="button" onClick={e=>{navigate("prev")}}>Prev</button>
            <button type="button" onClick={e=>{navigate("next")}}>Next</button>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        offset: state.offset,
        limit: state.limit,
        total: state.total
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        navigate: (page)=>dispatch(navigateCharacters(page))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(MainNav);