import { Box, CardMedia, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../styles/styles";
import CheckoutDetailed from "../Checkout/CheckoutDetailed";

const WalletGenerate = () => {
	const [orderData, setOrderData] = useState([]);
	useEffect(() => {
		const orderData = JSON.parse(localStorage.getItem("latestOrder"));
		setOrderData(orderData);
	}, []);
	return (
		<Box sx={{ pt: 4, pb: 4 }}>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: {
							xs: "column-reverse",
							md: "row",
						},
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "60%",
							},
						}}
					>
						<CheckoutDetailed />
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "35%",
							},
							mb: {
								xs: 5,
								md: 0,
							},
						}}
					>
						<CartData orderData={orderData} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

const CartData = ({ orderData }) => {
	const shipping = orderData?.shipping?.toFixed(2);
	const { cart } = useSelector((state) => state.cart);
	return (
		<Box>
			<Typography
				variant="h1"
				className="hina-mincho-regular"
				sx={{
					fontSize: {
						xs: 22,
						sm: 26,
					},
					textTransform: "uppercase",
					fontWeight: 600,
					letterSpacing: 1,
					mb: 2,
				}}
			>
				your order ({cart && cart.length})
			</Typography>

			{cart &&
				cart.map((i, index) => (
					<Box
						key={index}
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							flexWrap: "wrap",
							pt: 3,
						}}
					>
						<CardMedia
							component="img"
							image={`${i?.images[0]?.url}`}
							sx={{
								width: "25%",
								objectFit: "fill",
							}}
						/>
						<Box
							sx={{
								width: "70%",
							}}
						>
							<Typography
								variant="h1"
								className="hina-mincho-regular"
								sx={{
									fontSize: 20,
									textTransform: "uppercase",
									fontWeight: 600,
								}}
							>
								{i.name}
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: 16,
									mt: 0.5,
								}}
							>
								{i.description}
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: 16,
									mt: 0.5,
									textTransform: "uppercase",
								}}
							>
								qty: {i.qty}
							</Typography>
						</Box>
					</Box>
				))}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					flexWrap: "wrap",
					mt: 3,
				}}
			>
				<Typography
					variant="p"
					sx={{
						fontSize: 18,
						textTransform: "capitalize",
					}}
				>
					Item subtotal
				</Typography>
				<Typography
					variant="p"
					sx={{
						fontSize: 18,
						textTransform: "capitalize",
					}}
				>
					{"$" + orderData?.subTotalPrice}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					flexWrap: "wrap",
					mt: 3,
				}}
			>
				<Typography
					variant="p"
					sx={{
						fontSize: 18,
						textTransform: "capitalize",
					}}
				>
					shipping
				</Typography>
				<Typography
					variant="p"
					sx={{
						fontSize: 18,
						textTransform: "uppercase",
					}}
				>
					{"$" + shipping}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					flexWrap: "wrap",
					mt: 3,
				}}
			>
				<Typography
					variant="p"
					sx={{
						fontSize: 22,
						textTransform: "uppercase",
						fontWeight: 600,
					}}
				>
					total
				</Typography>
				<Typography
					variant="p"
					sx={{
						fontSize: 22,
						textTransform: "capitalize",
						fontWeight: 600,
					}}
				>
					{"$" + orderData?.totalPrice}
				</Typography>
			</Box>
		</Box>
	);
};

export default WalletGenerate;
