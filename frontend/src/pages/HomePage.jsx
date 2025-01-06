import React, { Fragment, useEffect, useState } from "react";

import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
	const [headerOpacity, setHeaderOpacity] = useState(0.6);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setHeaderOpacity(1); // Fully visible when scrolling
			} else {
				setHeaderOpacity(0.6); // Semi-transparent when at the top
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Fragment>
			<Header activeHeading={1} position="fixed" opacity={headerOpacity} />
			<Hero />
			<Categories />
			<Footer />
		</Fragment>
	);
};

export default HomePage;
