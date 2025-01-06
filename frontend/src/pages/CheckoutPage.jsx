import React from "react";
import Header from "../components/Layout/Header";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Layout/Footer";

const CheckoutPage = () => {
	return (
		<div>
			<Header position="sticky" opacity="1" />
			<CheckoutSteps active={1} />
			<Checkout />
			<Footer />
		</div>
	);
};

export default CheckoutPage;
