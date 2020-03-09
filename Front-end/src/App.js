import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Menu from './shared/Menu/Menu';
import './App.css';

const App = () => {
  return (
  	<Router>
		<Menu/>
		<Switch>
			<Route component={Inicio} path="/" exact/>
			<Route component={Config} path="/config" exact/>
		</Switch>
	</Router>
  );
}

const Inicio = () => {
	return(
	<div className="container">
		<main>
		   	<article>
		    			a
		    </article>
		</main>
	  	<aside>b</aside>
	</div>
	)
};

const Config = () => {
	return(
		<div className="container">
			<h1>Página de configurações</h1>
		</div>
	)
};

export default App;
