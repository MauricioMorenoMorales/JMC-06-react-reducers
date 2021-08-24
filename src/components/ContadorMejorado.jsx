import React, { useState, useReducer } from 'react';
import { TYPES } from '../actions/contador.actions';

import {
	contadorInit as init,
	contadorInitialState as initialState,
	contadorReducer as reducer,
} from '../reducers/contador.reducer';

const ContadorMejorado = () => {
	const [state, dispatch] = useReducer(reducer, initialState, init);

	const sumar = () => dispatch({ type: TYPES.increment });
	const sumar5 = () => dispatch({ type: TYPES.increment5, payload: 5 });
	const restar = () => dispatch({ type: TYPES.decrement });
	const restar5 = () => dispatch({ type: TYPES.decrement5, payload: 5 });
	const reset = () => dispatch({ type: TYPES.reset });
	return (
		<div style={{ textAlign: 'center' }}>
			<h2>Contador Mejorado</h2>
			<nav>
				<button onClick={sumar5}>+5</button>
				<button onClick={sumar}>+</button>
				<button onClick={reset}>0</button>
				<button onClick={restar}>-</button>
				<button onClick={restar5}>-5</button>
			</nav>
			<h3>{state.contador}</h3>
		</div>
	);
};

export default ContadorMejorado;
