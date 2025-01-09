import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import { colors } from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					pt: 4,
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
						<Button
							className="hina-mincho-regular"
							sx={{
								minWidth: 50,
								height: 50,
								border: `1px solid ${colors.darkBrown}`,
								fontSize: 26,
								p: 0,
								borderRadius: 50,
								color: [colors.darkBrown],
							}}
						>
							1
						</Button>
						<Box
							sx={{
								width: {
									xs: 30,
									md: 70,
								},
								height: 2,
								backgroundColor: active > 1 ? [colors.darkBrown] : [colors.gray],
							}}
						></Box>
					</Box>
					<Typography
						className="hina-mincho-regular"
						variant="h1"
						sx={{
							fontSize: {
								xs: 16,
								md: 20,
							},
							letterSpacing: 1,
							width: 50,
							color: [colors.darkBrown],
						}}
					>
						Shipping
					</Typography>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
						<Button
							className="hina-mincho-regular"
							sx={{
								minWidth: 50,
								height: 50,
								border:
									active > 1
										? `1px solid ${colors.darkBrown}`
										: `1px solid ${colors.gray}`,
								fontSize: 26,
								p: 0,
								borderRadius: 50,
								color: active > 1 ? [colors.darkBrown] : [colors.gray],
							}}
						>
							2
						</Button>
						<Box
							sx={{
								width: {
									xs: 30,
									md: 70,
								},
								height: 2,
								backgroundColor: active > 1 ? [colors.darkBrown] : [colors.gray],
							}}
						></Box>
					</Box>
					<Typography
						className="hina-mincho-regular"
						variant="h1"
						sx={{
							fontSize: {
								xs: 16,
								md: 20,
							},
							letterSpacing: 1,
							color: active > 1 ? [colors.darkBrown] : [colors.gray],
							width: 50,
							alignItems: "center",
						}}
					>
						Payment Details
					</Typography>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
						<Button
							className="hina-mincho-regular"
							sx={{
								minWidth: 50,
								height: 50,
								border:
									active > 2
										? `1px solid ${colors.darkBrown}`
										: `1px solid ${colors.gray}`,
								fontSize: 26,
								p: 0,
								borderRadius: 50,
								color: active > 2 ? [colors.darkBrown] : [colors.gray],
							}}
						>
							3
						</Button>
					</Box>
					<Typography
						className="hina-mincho-regular"
						variant="h1"
						sx={{
							fontSize: {
								xs: 16,
								md: 20,
							},
							letterSpacing: 1,
							color: active > 2 ? [colors.darkBrown] : [colors.gray],
							width: 50,
							textAlign: "center",
						}}
					>
						Wallet Generation
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};

export default CheckoutSteps;
