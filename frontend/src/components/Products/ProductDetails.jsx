import React, { useState } from "react";
import { Box, Container, CardMedia, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { colors } from "../../styles/styles";
import Image from "../../assets/Images";
import { addTocart } from "../../redux/actions/cart";

const ProductDetails = ({ data }) => {
	const { cart } = useSelector((state) => state.cart);
	const [select, setSelect] = useState(0);
	const [selectColor, setSelectColor] = useState("Dark Brown");
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const colorArray = [
		{ name: "Dark Brown", value: colors.productDarkB },
		{ name: "Light Brown", value: colors.productLightB },
	];

	const addToCartHandler = (id) => {
		const isItemExists = cart && cart.find((i) => i._id === id);
		if (isItemExists) {
			toast.error("Item already in cart!");
		} else {
			if (data.stock < 1) {
				toast.error("Product stock limited!");
			} else {
				const cartData = { ...data, qty: count };
				dispatch(addTocart(cartData));
				toast.success("Item added to cart successfully!");
			}
		}
	};

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<Box>
			<Container>
				<Box
					sx={{
						display: {
							xs: "block",
							md: "flex",
						},
						flexDirection: "row",
						flexWrap: "wrap",
						gap: "3%",
						pt: 4,
					}}
				>
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "48.5%",
							},
						}}
					>
						<Box>
							<CardMedia
								component="img"
								image={`${data && data.images[select]?.url}`}
								sx={{
									width: "100%",
									height: {
										xs: 300,
										md: 550,
									},
									objectFit: "fill",
								}}
							/>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									overflowX: "scroll",
									alignItems: "center",
									"::-webkit-scrollbar": {
										display: "none",
									},
									pt: 3,
									gap: "13px",
								}}
							>
								{data &&
									data.images.map((i, index) => (
										<Box
											className={`${
												select === index ? "h-36" : "h-44"
											} cursor-pointer`}
										>
											<CardMedia
												image={`${i?.url}`}
												component="img"
												onClick={() => setSelect(index)}
												sx={{
													height: "100%",
													objectFit: "fill",
												}}
											/>
										</Box>
									))}
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "48.5%",
							},
						}}
					>
						<Typography
							variant="h1"
							className="hina-mincho-regular"
							sx={{
								textTransform: "uppercase",
								fontWeight: 600,
								fontSize: {
									xs: 17,
									md: 40,
								},
								color: [colors.darkBrown],
							}}
						>
							{data.name}
						</Typography>
						<Typography
							component="p"
							sx={{
								fontSize: {
									xs: 16,
									md: 18,
								},
								fontWeight: 300,
								mt: 1,
								color: [colors.darkBrown],
							}}
						>
							{data.description}
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								gap: "30px",
								mt: 1,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 600,
									color: [colors.darkBrown],
								}}
							>
								Price:
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 300,
									color: [colors.darkBrown],
								}}
							>
								{data.originalPrice ? "$" + data.originalPrice : null}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								gap: "30px",
								mt: 1,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 600,
									color: [colors.darkBrown],
								}}
							>
								Color:
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 300,
									color: [colors.darkBrown],
								}}
							>
								{selectColor}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								mt: 2,
								gap: 1,
							}}
						>
							{colorArray.map((color, index) => (
								<Box
									key={index}
									onClick={() => setSelectColor(color.name)}
									sx={{
										border:
											selectColor === color.name
												? `1px solid ${colors.darkBrown}`
												: "none",
										p: "2px",
										borderRadius: 50,
										width: 30,
										height: 30,
										cursor: "pointer",
									}}
								>
									<Box
										sx={{
											width: "100%",
											height: "100%",
											backgroundColor: color.value,
											borderRadius: 50,
										}}
									></Box>
								</Box>
							))}
						</Box>
						<Button
							onClick={() => addToCartHandler(data._id)}
							sx={{
								textTransform: "uppercase",
								color: [colors.white],
								backgroundColor: [colors.darkBrown],
								fontSize: 18,
								mt: 3,
								outline: "none",
								cursor: "pointer",
							}}
							fullWidth
						>
							add to cart
						</Button>
						<CardMedia
							component="img"
							image={Image.cryptoLogos}
							sx={{
								width: 250,
								objectFit: "fit",
								mt: 4,
							}}
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								gap: "30px",
								mt: 3,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 600,
									color: [colors.darkBrown],
								}}
							>
								Size & Fit:
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 300,
									color: [colors.darkBrown],
								}}
							>
								Item Measurements
								<Box
									sx={{
										mt: 3,
									}}
								>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Handle Drop: 18cm/7.1in
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Height: 38cm/15in
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-width: 57cm/22.4in
									</Typography>
								</Box>
							</Typography>
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								gap: "30px",
								mt: 3,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 600,
									color: [colors.darkBrown],
								}}
							>
								Details:
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 16,
										md: 18,
									},
									fontWeight: 300,
									color: [colors.darkBrown],
								}}
							>
								Product ID {data._id}
								<Box
									sx={{
										mt: 3,
									}}
								>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Chocolate suede (lamb)
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Shoulder Strap
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Internal zipped pocket
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Leather lining
									</Typography>{" "}
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Magnetic fastening at open top
									</Typography>{" "}
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Comes with dust bag
									</Typography>
									<Typography
										component="p"
										sx={{
											fontSize: {
												xs: 16,
												md: 18,
											},
											fontWeight: 300,
											color: [colors.darkBrown],
										}}
									>
										-Weighs approximately4.2lbs/1.9kg
									</Typography>
								</Box>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ProductDetails;
