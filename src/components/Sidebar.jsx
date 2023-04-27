import logo from '../logo-chef.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Sidebar() {
    return(
        <nav className='navbar'>
            <div className='image'>
                <p>Burger</p>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            
            <ul className='liste'>
                <li>
                <Link to="/Accueil" >
                    Accueil
                </Link>
                </li>
                <li>
                <Link to="/Recette" >
                    Recette
                </Link>
                </li>
                <li>
                <Link to="/Contact" >
                    Contact
                </Link>
                </li>
            </ul>
        </nav>
    )    
}

export default Sidebar;