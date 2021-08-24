import { TYPES } from '../actions/contador.actions';

export const contadorInitialState = { contador: 0 };

export const contadorInit = initialState => ({
	contador: initialState.contador + 100,
});

export const contadorReducer = function (state, action) {
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
			return contadorInitialState;
		default:
			return state;
	}
};
