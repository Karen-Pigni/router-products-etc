import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Admin from './pages/Admin.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';

function App() {

	
	return (
		<div className='App'>
			<Router>
				<Route path='/' component={Header} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/admin' component={Admin} />
					<Route exact path='/products' component={Products} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
