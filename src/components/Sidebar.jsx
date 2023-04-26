import logo from '../logo-chef.jpg';
import React from 'react';
import '../App.css';

function Sidebar() {
    return(
        <nav className='navbar'>
            <div className='image'>
                <p>Burger</p>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            
            <ul className='liste'>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Recette</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )    
}

export default Sidebar;