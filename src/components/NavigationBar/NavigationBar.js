import React from 'react'
import './NavigationBar.css';
import { NavLink } from 'react-router-dom';

const NavigationBar = () =>{
    return(
        <nav className='navigation'>
            <NavLink to={'/nosotros'} activeClassName='active'>Nosotros</NavLink>
            <NavLink to={'/productos'} activeClassName='active'>Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName='active'>Contacto</NavLink>
        </nav>
    )
}

export default NavigationBar;