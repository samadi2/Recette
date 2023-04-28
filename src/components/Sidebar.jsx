import logo from '../logo-chef.jpg';
import React from 'react';

import '../App.css';

import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
    return(
        <div class="barnav">
            
            <div className='BurgerLogo'>
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
          
            <ul class="menu__box">
              <li><NavLink class="menu__item" to="/Recette">Recettes sucrées</NavLink></li>
              <li><NavLink class="menu__item" to="/Recette">Recettes salées </NavLink></li>
              <li><NavLink class="menu__item"  to="/Recette">Surprise</NavLink></li>
            </ul>
         
          </div>
          <img className='logo2' src={logo} alt="Logo"/>
          </div>
         

            
            <nav>
                <ul class="nav">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Recette">Recettes</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Sidebar;