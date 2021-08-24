import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';

function App() {
	return (
		<div>
			<h1>useReducers</h1>
			<hr />
			<ShoppingCart />
			<hr />
			<ContadorMejorado />
			<hr />
			<Contador />
		</div>
	);
}

export default App;
