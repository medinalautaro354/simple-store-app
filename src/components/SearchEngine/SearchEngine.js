import React, { Component } from 'react'
import './SearchEngine.css';

class SearchEngine extends Component{

    sendValueInput = (e) =>{
        const term = e.target.value;

        this.props.searchProduct(term);
    }
    render(){
        return(
            <form className='search-engine'>
                <input type='text' placeholder='Búsqueda' onChange={this.sendValueInput}/>
            </form>
        )
    }
}

export default SearchEngine;