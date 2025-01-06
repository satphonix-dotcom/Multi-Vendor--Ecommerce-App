import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const CheckoutDetails = () => {
	const navigate = useNavigate();

	const [orderData, setOrderData] = useState(null);

	useEffect(() => {
		const savedOrderData = JSON.parse(localStorage.getItem("latestOrder"));
		setOrderData(savedOrderData);
	}, []);

	if (!orderData) {
		return <div>Loading...</div>;
	}

	const { shippingAddress, user } = orderData;

	return (
		<Box>
			<Typography
				variant="h1"
				className="hina-mincho-regular"
				sx={{
					textTransform: "uppercase",
					fontWeight: 600,
					color: [colors.darkBrown],
					fontSize: {
						xs: 20,
						sm: 30,
					},
					letterSpacing: 1,
				}}
			>
				Shipping details
			</Typography>
			<Divider
				sx={{
					mt: 2,
					backgroundColor: [colors.darkBrown],
				}}
			/>
			<Typography
				variant="h1"
				sx={{
					fontSize: {
						xs: 20,
						sm: 24,
					},
					color: [colors.darkBrown],
					mt: 2,
					fontWeight: 400,
				}}
			>
				Ship to
			</Typography>
			<Box
				sx={{
					pt: 3,
				}}
			>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
					}}
				>
					{user.name}
				</Typography>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
					}}
				>
					{shippingAddress.zipCode} {shippingAddress.address1}
				</Typography>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
					}}
				>
					{shippingAddress.city} {shippingAddress.address2}
				</Typography>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
					}}
				>
					{shippingAddress.country}
				</Typography>
				<Button
					sx={{
						border: `1px solid ${colors.darkBrown}`,
						textTransform: "capitalize",
						width: "25%",
						color: [colors.darkBrown],
						mt: 2,
					}}
					onClick={() => navigate("/checkout")}
				>
					Change
				</Button>
			</Box>
		</Box>
	);
};

export default CheckoutDetails;
