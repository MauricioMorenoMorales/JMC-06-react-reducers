import React, { useReducer } from 'react';
import {
	shoppingInitialState,
	shoppingReducer,
} from '../reducers/shoppingReducer';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
	const { products, cart } = state;

	const addToCart = id => {
		console.log(id);
	};
	const deleteFromCart = item => {};
	const clearCart = item => {};

	return (
		<div>
			<h2>carrito de compras</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{products.map(product => (
					<ProductItem key={product.id} data={product} addToCart={addToCart} />
				))}
			</article>
			<h3>Carrito</h3>
			<article className="box"></article>
		</div>
	);
};

export default ShoppingCart;
