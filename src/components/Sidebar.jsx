import logo from '../logo-chef.jpg';
import React from 'react';

import '../App.css';

import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
    return(
        <div className="barnav">
            
            <div className='BurgerLogo'>
            <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
          
            <ul className="menu__box">
              <li><NavLink className="menu__item" to="/Recette">Recettes sucrées</NavLink></li>
              <li><NavLink className="menu__item" to="/Recette">Recettes salées </NavLink></li>
              <li><NavLink className="menu__item"  to="/Recette">Surprise</NavLink></li>
            </ul>
         
          </div>
          <img className='logo2' src={logo} alt="Logo"/>
          </div>
         

            
            <nav>
                <ul className="nav">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Recette">Recettes</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Sidebar;