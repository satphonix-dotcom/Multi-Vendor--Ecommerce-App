import React from "react";

import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { colors } from "../../../styles/styles";
import Image from "../../../assets/Images";

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
