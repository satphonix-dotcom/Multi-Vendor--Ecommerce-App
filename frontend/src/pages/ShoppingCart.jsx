import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Cart from "../components/cart/Cart";

const ShoppingCart = () => {
	return (
		<Fragment>
			<Header position="sticky" opacity="1" />
			<Cart />
			<Footer />
		</Fragment>
	);
};

export default ShoppingCart;
