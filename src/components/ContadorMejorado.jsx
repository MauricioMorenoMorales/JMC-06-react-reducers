import React, { useState, useReducer } from 'react';

const initialState = { contador: 0 };

const init = initialState => ({ contador: initialState.contador + 100 });

const TYPES = {
	increment: 'INCREMENT',
	decrement: 'DECREMENT',
	increment5: 'INCREMENT_5',
	decrement5: 'DECREMENT_5',
	reset: 'RESET',
};

function reducer(state, action) {
	switch (action.type) {
		case TYPES.increment:
			return { contador: state.contador + 1 };
		case TYPES.increment5:
			return { contador: state.contador + action.payload };
		case TYPES.decrement:
			return { contador: state.contador - 1 };
		case TYPES.decrement5:
			return { contador: state.contador - action.payload };
		case TYPES.reset:
			return initialState;
		default:
			return state;
	}
}

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
