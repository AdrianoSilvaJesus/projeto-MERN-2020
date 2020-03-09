import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
	return(
		<header>
			<nav id="menu">
				<ul>
					<li><NavLink to="/">Inicio</NavLink></li>
					<li><NavLink to="/config">Configurações</NavLink></li>
				</ul>
			</nav>
		</header>	
	);
};

export default Menu;
