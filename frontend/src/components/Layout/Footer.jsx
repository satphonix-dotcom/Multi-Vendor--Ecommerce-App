import React from "react";

import { Box, Container, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Image from "../../assets/Images";
import { colors } from "../../styles/styles";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: [colors.darkBrown],
				paddingY: {
					xs: 4,
				},
			}}
		>
			<Container>
				<Box
					sx={{
						display: {
							xs: "flex",
						},
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box component={Link} to="/">
						<CardMedia
							component="img"
							image={Image.footerLogo}
							sx={{
								width: {
									xs: 150,
									sm: 250,
									md: 300,
								},
								objectFit: "fill",
								margin: "0px auto",
							}}
						/>
					</Box>
					<Box>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							About us
						</Typography>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							Shipping policy
						</Typography>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							return policy
						</Typography>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							contact us
						</Typography>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							privacy policy
						</Typography>
						<Typography
							component={Link}
							to="#"
							sx={{
								color: [colors.white],
								textTransform: "capitalize",
								listStyle: "none",
								textAlign: {
									xs: "center",
									md: "right",
								},
								fontSize: {
									xs: 10,
									sm: 12,
									md: 14,
								},
								marginBottom: 0.5,
								display: "block",
							}}
						>
							Terms & condition
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
