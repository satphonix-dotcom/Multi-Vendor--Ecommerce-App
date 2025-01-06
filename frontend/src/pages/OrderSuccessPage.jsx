import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import WalletGenerate from "../components/WalletGenerate/WalletGenerate";

const OrderSuccessPage = () => {
	return (
		<div>
			<Header position="sticky" opacity="1" />
			<CheckoutSteps active={3} />
			<WalletGenerate />
			<Footer />
		</div>
	);
};

export default OrderSuccessPage;
