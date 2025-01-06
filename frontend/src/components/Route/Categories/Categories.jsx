// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { brandingData, categoriesData } from "../../../static/data";
// import styles from "../../../styles/styles";

// const Categories = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className={`${styles.section} hidden sm:block`}>
//         <div
//           className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
//         >
//           {brandingData &&
//             brandingData.map((i, index) => (
//               <div className="flex items-start" key={index}>
//                 {i.icon}
//                 <div className="px-3">
//                   <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
//                   <p className="text-xs md:text-sm">{i.Description}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       <div
//         className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
//         id="categories"
//       >
//         <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
//           {categoriesData &&
//             categoriesData.map((i) => {
//               const handleSubmit = (i) => {
//                 navigate(`/products?category=${i.title}`);
//               };
//               return (
//                 <div
//                   className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
//                   key={i.id}
//                   onClick={() => handleSubmit(i)}
//                 >
//                   <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
//                   <img
//                     src={i.image_Url}
//                     className="w-[120px] object-cover"
//                     alt=""
//                   />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categories;

import React from "react";

import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import { colors } from "../../../styles/styles";
import Image from "../../../assets/Images";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<Box
			sx={{
				backgroundColor: [colors.gray],
			}}
		>
			<Container>
				<Box
					sx={{
						display: {
							xs: "block",
							sm: "flex",
						},
						flexDirection: "row",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
						paddingTop: {
							xs: 5,
							sm: 10,
						},
					}}
				>
					<CardMedia
						component="img"
						image={Image.securePayment}
						sx={{
							width: {
								xs: 150,
								md: 200,
							},
							margin: "0px auto",
							marginBottom: 3,
						}}
					/>
					<CardMedia
						component="img"
						image={Image.verifiedShipping}
						sx={{
							width: {
								xs: 150,
								md: 200,
							},
							margin: "0px auto",
							marginBottom: 3,
						}}
					/>
					<CardMedia
						component="img"
						image={Image.authenticProducts}
						sx={{
							width: {
								xs: 150,
								md: 200,
							},
							margin: "0px auto",
							marginBottom: 3,
						}}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						paddingTop: {
							xs: 5,
							sm: 10,
						},
					}}
				>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.watchPhoto}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									luxuary watches
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.rareBags}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									Rare Bags
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.exclusiveShoes}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									exclusive shoes
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.distinctClothing}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									distinct Clothing
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.timelessJewlery}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									timeless Jewlery
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						component={Link}
						to="/products"
						sx={{
							width: {
								xs: "100%",
								md: "49%",
							},
							position: "relative",
							height: {
								xs: 300,
								sm: 400,
								md: 400,
							},
							marginBottom: 3,
							transition: "0.3s",
							"&:hover": {
								transform: "scale(1.03)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={Image.accessories}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 10,
								right: 0,
								left: 0,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									component="p"
									className="hina-mincho-regular"
									sx={{
										textTransform: "uppercase",
										color: [colors.white],
										fontSize: {
											xs: 17,
											sm: 29,
											lg: 35,
										},
										margin: {
											xs: "8px 0px",
										},
									}}
								>
									Accessories
								</Typography>
								<Button
									className="hina-mincho-regular"
									sx={{
										border: `1px solid ${colors.white}`,
										outline: "none",
										fontSize: {
											xs: "12px",
											sm: "14px",
										},
										borderRadius: 2,
										padding: {
											xs: "0px 25px",
											sm: "0px 30px",
										},
										color: [colors.white],
										marginLeft: 3,
										textTransform: "capitalize",
									}}
								>
									View
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>

				<Typography
					variant="h1"
					className="hina-mincho-regular"
					sx={{
						fontWeight: 600,
						color: [colors.darkBrown],
						textTransform: "uppercase",
						fontSize: {
							xs: 20,
							sm: 29,
							md: 45,
							lg: 57,
						},
						paddingTop: {
							xs: 5,
							md: 10,
						},
						textAlign: "center",
					}}
				>
					indulge in elegance you deserve
				</Typography>
				<CardMedia
					component="img"
					image={Image.cryptoLogos}
					sx={{
						paddingTop: {
							xs: 5,
							md: 10,
						},
						width: {
							xs: 150,
							sm: 190,
						},
						objectFit: "fill",
						margin: "0px auto",
						paddingBottom: 2,
					}}
				/>
			</Container>
		</Box>
	);
};

export default Categories;
