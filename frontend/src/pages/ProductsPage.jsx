// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import styles from "../styles/styles";

// const ProductsPage = () => {
//   const [searchParams] = useSearchParams();
//   const categoryData = searchParams.get("category");
//   const {allProducts,isLoading} = useSelector((state) => state.products);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (categoryData === null) {
//       const d = allProducts;
//       setData(d);
//     } else {
//       const d =
//       allProducts && allProducts.filter((i) => i.category === categoryData);
//       setData(d);
//     }
//     //    window.scrollTo(0,0);
//   }, [allProducts]);

//   return (
//   <>
//   {
//     isLoading ? (
//       <Loader />
//     ) : (
//       <div>
//       <Header activeHeading={3} />
//       <br />
//       <br />
//       <div className={`${styles.section}`}>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//           {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//         </div>
//         {data && data.length === 0 ? (
//           <h1 className="text-center w-full pb-[100px] text-[20px]">
//             No products Found!
//           </h1>
//         ) : null}
//       </div>
//       <Footer />
//     </div>
//     )
//   }
//   </>
//   );
// };

// export default ProductsPage;

import React, { Fragment, useEffect, useState } from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Loader from "../components/Layout/Loader";

import { Box, Button, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { colors } from "../styles/styles";

import { FaCaretDown } from "react-icons/fa";
import DropDown from "../components/Layout/DropDown";
import { categoriesData } from "../static/data";

const ProductsPage = () => {
	const [searchParams] = useSearchParams();
	const categoryData = searchParams.get("category");
	const { allProducts, isLoading } = useSelector((state) => state.products);
	const [data, setData] = useState([]);
	const [dropDown, setDropDown] = useState(false);

	useEffect(() => {
		if (categoryData === null) {
			const d = allProducts;
			setData(d);
		} else {
			const d = allProducts && allProducts.filter((i) => i.category === categoryData);
			setData(d);
		}
		//    window.scrollTo(0,0);
	}, [allProducts]);

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Header position="sticky" opacity="1" />
					<Box
						sx={{
							backgroundColor: [colors.gray],
						}}
					></Box>
					<Container>
						<Box
							sx={{
								width: {
									xs: "100%",
									md: "80%",
									lg: "60%",
								},
								mx: "auto",
								textAlign: "center",
							}}
						>
							<Typography
								variant="h1"
								className="hina-mincho-regular"
								sx={{
									fontWeight: 600,
									fontSize: {
										xs: 23,
										sm: 40,
										md: 47,
									},
									textTransform: "uppercase",
									mt: {
										xs: 2,
										md: 4,
									},
								}}
							>
								Women's Designer bags
							</Typography>
							<Typography
								component="p"
								sx={{
									fontWeight: 300,
									fontSize: {
										xs: 14,
										sm: 16,
										md: 18.5,
									},
									mt: {
										xs: 1,
										md: 2,
									},
								}}
							>
								Explore our collection of women's designer bags, featuring a variety
								of styles for every occasion. whether you need a sleek clutch for a
								night out, a spacious tote for daily essentials, or a chic shoulder
								bag for work, you'll find the perfect match Complete your look with
								our elegant wallets and pouches
							</Typography>
						</Box>
					</Container>
					<Box
						sx={{
							mt: 3,
							py: {
								xs: 2,
								md: 3,
							},
							borderTop: `1px solid ${colors.darkBrown}`,
							borderBottom: `1px solid ${colors.darkBrown}`,
						}}
					>
						<Container>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									overflowX: "scroll",
									"::-webkit-scrollbar": {
										display: "none",
									},
									gap: {
										xs: "10px",
										lg: 0,
									},
								}}
							>
								<Box>
									<Button
										onClick={() => setDropDown(!dropDown)}
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,
											letterSpacing: 2.5,
											position: "relative",
										}}
									>
										category <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
									{dropDown ? (
										<DropDown
											categoriesData={categoriesData}
											setDropDown={setDropDown}
										/>
									) : null}
								</Box>
								<Box>
									<Button
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,

											letterSpacing: 2.5,
										}}
									>
										designer <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
								</Box>
								<Box>
									<Button
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,

											letterSpacing: 2.5,
										}}
									>
										color <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
								</Box>
								<Box>
									<Button
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,

											letterSpacing: 2.5,
										}}
									>
										fabric <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
								</Box>
								<Box>
									<Button
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,

											letterSpacing: 2.5,
										}}
									>
										Price <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
								</Box>
								<Box>
									<Button
										className="hina-mincho-regular"
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											gap: {
												xs: 0,
												md: "10px",
											},
											textTransform: "uppercase",
											color: [colors.darkBrown],
											fontSize: {
												xs: 13,
												md: 15,
											},
											border: `1px solid ${colors.darkBrown}`,
											py: 0,
											px: {
												xs: 1,
												md: 2,
											},
											borderRadius: 2,

											letterSpacing: 2.5,
										}}
									>
										sort <FaCaretDown size={17} color={colors.darkBrown} />
									</Button>
								</Box>
							</Box>
						</Container>
					</Box>
					<Container>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								pt: 4,
								gap: "3%",
								flexWrap: "wrap",
							}}
						>
							{data &&
								data.map((i, index) => (
									<ProductCard
										data={i}
										key={index}
										width={{
											xs: "100%",
											sm: "48.5%",
											md: "31%",
										}}
									/>
								))}
						</Box>
						{data && data.length === 0 ? (
							<h1 className="text-center w-full pb-[100px] text-[20px]">
								No products Found!
							</h1>
						) : null}
						{data && data.length === 0 ? null : (
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									my: 3,
								}}
							>
								<Button
									sx={{
										textTransform: "uppercase",
										border: `1px solid ${colors.darkBrown}`,
										color: [colors.darkBrown],
										fontWeight: 300,
										fontSize: {
											xs: 12,
											sm: 14,
											md: 16,
										},
										py: 0,
										px: 1,
									}}
								>
									previous
								</Button>
								<Typography
									component="p"
									sx={{
										textTransform: "uppercase",
										color: [colors.darkBrown],
										fontSize: {
											xs: 12,
											sm: 14,
											md: 16,
										},
										fontWeight: 600,
									}}
								>
									page 1 of 33
								</Typography>
								<Button
									sx={{
										textTransform: "uppercase",
										border: `1px solid ${colors.darkBrown}`,
										color: [colors.darkBrown],
										fontWeight: 300,
										fontSize: {
											xs: 12,
											sm: 14,
											md: 16,
										},
										py: 0,
										px: 1,
									}}
								>
									next
								</Button>
							</Box>
						)}
					</Container>
					<Footer />
				</>
			)}
		</Fragment>
	);
};

export default ProductsPage;
