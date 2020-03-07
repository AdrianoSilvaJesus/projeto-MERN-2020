import React from 'react';

import Menu from './shared/Menu/Menu';
import './App.css';

const App = () => {
  return (
  	<React.Fragment>
			<Menu/>
	    <div className="container">
		    <main>
		    	<article>
		    			a
		    	</article>
		    </main>
	    	<aside>b</aside>
	    </div>
	</React.Fragment>
  );
}

export default App;
