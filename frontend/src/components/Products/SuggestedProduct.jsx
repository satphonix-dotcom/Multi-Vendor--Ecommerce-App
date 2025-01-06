// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { productData } from "../../static/data";
// import styles from "../../styles/styles";
// import ProductCard from "../Route/ProductCard/ProductCard";

// const SuggestedProduct = ({ data }) => {
//   const {allProducts} = useSelector((state) => state.products);
//   const [productData,setProductData] = useState();

//   useEffect(() => {
//     const d =
//     allProducts && allProducts.filter((i) => i.category === data.category);
//     setProductData(d);
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <div className={`p-4 ${styles.section}`}>
//           <h2
//             className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
//           >
//             Related Product
//           </h2>
//           <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//              {
//                 productData && productData.map((i,index) => (
//                     <ProductCard data={i} key={index} />
//                 ))
//              }
//       </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default SuggestedProduct;

// import React, { useEffect, useState } from "react";
// import { Box, Container } from "@mui/material";
// import { useSelector } from "react-redux";
// import ProductCard from "../Route/ProductCard/ProductCard";

// const SuggestedProduct = ({ data }) => {
// 	const { allProducts } = useSelector((state) => state.products);
// 	const [productData, setProductData] = useState();

// 	useEffect(() => {
// 		const d = allProducts && allProducts.filter((i) => i.category === data.category);
// 		setProductData(d);
// 	}, []);
// 	return (
// 		<Box>
// 			<Container>
// 				{data ? (
// 					<Box
// 						sx={{
// 							display: "flex",
// 							flexDirection: "row",
// 							gap: "40px",
// 							overflowX: "scroll",
// 							"::-webkit-scrollbar": {
// 								display: "none",
// 							},
// 						}}
// 					>
// 						{productData &&
// 							productData.map((i, index) => (
// 								<ProductCard data={i} key={index} width="250px" />
// 							))}
// 					</Box>
// 				) : null}
// 			</Container>
// 		</Box>
// 	);
// };

// export default SuggestedProduct;

import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../Route/ProductCard/ProductCard";
import { colors } from "../../styles/styles";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const SuggestedProduct = ({ data }) => {
	const { allProducts } = useSelector((state) => state.products);
	const [productData, setProductData] = useState();
	const scrollRef = useRef(null);
	// States to control button color
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	useEffect(() => {
		const d = allProducts && allProducts.filter((i) => i.category === data.category);
		setProductData(d);
	}, [allProducts, data.category]);

	const handleScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setIsAtStart(scrollLeft === 0);
			setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
		}
	};

	// Scroll function
	const scroll = (direction) => {
		if (scrollRef.current) {
			const { current } = scrollRef;
			current.scrollBy({
				left: direction === "left" ? -300 : 300,
				behavior: "smooth",
			});
		}
	};

	return (
		<Box>
			<Container>
				{data ? (
					<Box
						sx={{
							borderTop: `1px solid ${colors.darkBrown}`,
							mt: 4,
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								flexWrap: "wrap",
								mt: 4,
							}}
						>
							<Typography
								variant="h1"
								className="hina-mincho-regular"
								sx={{
									textTransform: "uppercase",
									fontSize: {
										xs: 17,
										md: 36,
									},
									color: [colors.darkBrown],
								}}
							>
								you may also like
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<FaCaretLeft
									size={30}
									onClick={() => scroll("left")}
									style={{
										color: isAtStart ? colors.gray : colors.darkBrown,
										cursor: isAtStart ? "not-allowed" : "pointer",
									}}
								/>
								<FaCaretRight
									size={30}
									onClick={() => scroll("right")}
									style={{
										color: isAtEnd ? colors.gray : colors.darkBrown,
										cursor: isAtEnd ? "not-allowed" : "pointer",
									}}
								/>
							</Box>
						</Box>

						<Box
							ref={scrollRef}
							onScroll={handleScroll}
							sx={{
								display: "flex",
								overflowX: "auto",
								scrollBehavior: "smooth",
								"::-webkit-scrollbar": { display: "none" },
								mb: 4,
								mt: 4,
							}}
						>
							<Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
								{productData &&
									productData.map((i, index) => (
										<Grid
											item
											key={index}
											sx={{
												flex: "0 0 auto",
												width: {
													xs: 200,
													md: 250,
												},
											}}
										>
											<ProductCard data={i} />
										</Grid>
									))}
							</Grid>
						</Box>
					</Box>
				) : null}
			</Container>
		</Box>
	);
};

export default SuggestedProduct;
