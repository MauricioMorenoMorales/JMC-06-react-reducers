import { TYPES } from '../actions/shoppingActions';

export const shoppingInitialState = {
	products: [
		{ id: 1, name: 'Prducto 1', price: 200 },
		{ id: 2, name: 'Prducto 2', price: 300 },
		{ id: 3, name: 'Prducto 3', price: 400 },
		{ id: 4, name: 'Prducto 4', price: 500 },
		{ id: 5, name: 'Prducto 5', price: 600 },
		{ id: 6, name: 'Prducto 6', price: 700 },
		{ id: 7, name: 'Prducto 7', price: 800 },
	],
	cart: [],
};

export const shoppingReducer = function (state, action) {
	switch (action.type) {
		case TYPES.ADD_TO_CART: {
			const newItem = state.products.find(
				product => product.id === action.payload,
			);
			const itemInCart = state.cart.find(item => item.id === newItem.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map(item =>
							item.id === newItem.id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
					};
		}
		case TYPES.REMOVE_ONE_FROM_CART: {
			const itemToDelete = state.cart.find(item => item.id === action.payload);

			return itemToDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map(item =>
							item.id === action.payload
								? { ...item, quantity: item.quantity - 1 }
								: item,
						),
					}
				: {
						...state,
						cart: state.cart.filter(item => item.id !== action.payload),
					};
		}
		case TYPES.REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			};
		}
		case TYPES.CLEAR_CART:
			return shoppingInitialState;
		default:
			return state;
	}
};
