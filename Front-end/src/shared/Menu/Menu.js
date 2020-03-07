import React from 'react';

import './Menu.css';

const Menu = () => {
	return(
		<header>
			<nav id="menu">
				<ul>
					<li><a href="/">Inicio</a></li>
					<li><a href="/configuracoes">Configurações</a></li>
				</ul>
			</nav>
		</header>	
	);
};

export default Menu;
