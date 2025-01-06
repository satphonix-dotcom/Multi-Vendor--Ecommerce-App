import { Box, Button, Divider, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Image from "../../assets/Images";
import { useSelector } from "react-redux";

const CheckoutDetailed = () => {
	const navigate = useNavigate();

	const [orderData, setOrderData] = useState(null);
	const [packagingOption, setPackagingOption] = useState(null);
	const [shippingOption, setShippingOption] = useState(null);
	const [payment, setpayment] = useState("Not Verified");

	useEffect(() => {
		const savedOrderData = JSON.parse(localStorage.getItem("latestOrder"));
		setOrderData(savedOrderData);
	}, []);

	useEffect(() => {
		const savedPackagingOption = localStorage.getItem("packagingOption");
		setPackagingOption(savedPackagingOption);
	}, []);

	useEffect(() => {
		const savedShippingOption = localStorage.getItem("shippingOption");
		setShippingOption(savedShippingOption);
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
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<Box
					sx={{
						width: {
							xs: "100%",
							md: "50%",
						},
					}}
				>
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
								width: "50%",
								color: [colors.darkBrown],
								mt: 2,
							}}
							onClick={() => navigate("/checkout")}
						>
							Change
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						width: {
							xs: "100%",
							md: "50%",
						},
					}}
				>
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
						Shipping Option
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
							{shippingOption || "No shipping option selected"}
						</Typography>
						<Typography
							component="p"
							sx={{
								textTransform: "capitalize",
								mt: 2,
							}}
						>
							{packagingOption || "No packaging option selected"} Packaging
						</Typography>
						<Button
							sx={{
								border: `1px solid ${colors.darkBrown}`,
								textTransform: "capitalize",
								width: "50%",
								color: [colors.darkBrown],
								mt: 2,
							}}
							onClick={() => navigate("/payment")}
						>
							Change
						</Button>
					</Box>
				</Box>
			</Box>

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
					mt: 5,
				}}
			>
				payment type
			</Typography>
			<Divider
				sx={{
					mt: 2,
					backgroundColor: [colors.darkBrown],
				}}
			/>
			<Box>
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
					Amount to Pay
				</Typography>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
						backgroundColor: [colors.gray],
						width: "fit-content",
						px: 3,
						ml: {
							xs: 0,
							md: 3,
						},
						mt: 2,
					}}
				>
					0.102 BTC
				</Typography>
				<Typography
					variant="h1"
					sx={{
						fontSize: {
							xs: 20,
							sm: 24,
						},
						color: [colors.darkBrown],
						mt: 3,
						fontWeight: 400,
					}}
				>
					Wallet Address
				</Typography>
				<Typography
					component="p"
					sx={{
						textTransform: "capitalize",
						backgroundColor: [colors.gray],
						width: "fit-content",
						px: {
							xs: 0,
							md: 3,
						},
						ml: {
							xs: 0,
							md: 3,
						},
						mt: 2,
						fontSize: {
							xs: 12,
							md: 16,
						},
					}}
				>
					bc1qxy2kgdygjrsdnkeeiwmsksiendieeienni0wlj
				</Typography>
				<CardMedia
					component="img"
					image={Image.qr}
					sx={{
						objectFit: "fill",
						width: 150,
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
						mt: 3,
						fontWeight: 400,
					}}
				>
					Payment Instruction
				</Typography>
				<Box sx={{ ml: 4 }}>
					<Typography
						component="p"
						sx={{
							textTransform: "capitalize",
							mt: 2,
						}}
					>
						1. Open your cryptocurency wallet
					</Typography>
					<Typography
						component="p"
						sx={{
							textTransform: "capitalize",
							mt: 2,
						}}
					>
						2. Send exactly <span style={{ fontWeight: 600 }}>0.102 BTC</span> to the
						wallet address above
					</Typography>
					<Typography
						component="p"
						sx={{
							textTransform: "capitalize",
							mt: 2,
						}}
					>
						3. Ensure you include any transaction fees require by your wallet or network
					</Typography>
					<Typography
						component="p"
						sx={{
							textTransform: "capitalize",
							mt: 2,
						}}
					>
						4. Payment must be completed with in{" "}
						<span style={{ fontWeight: 600 }}>15 Minutes</span>
					</Typography>
				</Box>
			</Box>
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
					mt: 5,
				}}
			>
				Status
			</Typography>
			<Divider
				sx={{
					mt: 2,
					backgroundColor: [colors.darkBrown],
				}}
			/>
			<Box sx={{ mb: 2 }}>
				{payment === "Verified" ? (
					<Box>
						<Typography
							variant="h1"
							sx={{
								textTransform: "capitalize",
								fontWeight: 600,
								color: [colors.darkBrown],
								fontSize: {
									xs: 18,
									sm: 26,
								},
								letterSpacing: 1,
								mt: 4,
							}}
						>
							Awaiting Payment
						</Typography>
						<Typography component="p" sx={{ mt: 3 }}>
							Once your payment is confirmed, your order will be processed and you
							will receive an email with your receipt and a tracking number once you
							order has shipped
						</Typography>
					</Box>
				) : (
					<Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								gap: "30px",
								alignItems: "center",
								mt: 4,
							}}
						>
							<Typography
								variant="h1"
								sx={{
									textTransform: "capitalize",
									fontWeight: 600,
									color: [colors.darkBrown],
									fontSize: {
										xs: 18,
										sm: 26,
									},
									letterSpacing: 1,
								}}
							>
								Payment Confirmed
							</Typography>
							<FaCheckCircle size={20} />
						</Box>
						<Typography component="p" sx={{ mt: 2 }}>
							Your payment has been successfully received and verified
						</Typography>
						<Typography component="p" sx={{ mt: 2 }}>
							Confirmation Time Stamp: 09:23PM PST
						</Typography>
						<Typography
							variant="h1"
							sx={{
								fontSize: 22,
								fontWeight: 400,
								mt: 2,
								letterSpacing: 1,
							}}
						>
							Next Steps
						</Typography>
						<Typography component="p" sx={{ mt: 2 }}>
							1. Congratulations, your order is now being prepared and a confirmation
							email has been sent to j.smith@gmail.com
						</Typography>

						<Typography component="p" sx={{ mt: 2 }}>
							2. You will receive a tracking number as soon as your order is shipped!
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default CheckoutDetailed;
