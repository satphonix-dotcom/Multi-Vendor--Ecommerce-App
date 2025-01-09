import React from "react";

import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import Image from "../../../assets/Images";
import styles, { colors } from "../../../styles/styles";

const Hero = () => {
	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Pagination, Autoplay]}
			className="mySwiper"
		>
			<SwiperSlide>
				<CardMedia
					component="img"
					image={Image.cover}
					sx={{
						width: "100%",
						height: {
							xs: 400,
							sm: 500,
							md: 565,
							lg: 651,
						},
						objectFit: "fill",
						backgroundColor: "black",
					}}
				/>
				<Box className={`${styles.section}`} sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							bottom: 60,
							textAlign: "center",
							width: "100%",
						}}
					>
						<Typography
							className="hina-mincho-regular"
							variant="h1"
							sx={{
								textTransform: "uppercase",
								fontWeight: 600,
								color: [colors.white],
								fontSize: {
									xs: 17,
									sm: 32,
									md: 45,
									lg: 65,
								},
							}}
						>
							unlock designer with crypto.
						</Typography>
						<Box
							sx={{
								display: {
									xs: "block",
									md: "flex",
								},
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "end",
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
										sm: 25,
										md: 38,
									},
									margin: {
										xs: "8px 0px",
									},
								}}
							>
								btc, usdt, ltc, eth, xrp
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
								}}
							>
								learn more
							</Button>
						</Box>
					</Box>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					component="img"
					image={Image.cover}
					sx={{
						width: "100%",
						height: {
							xs: 400,
							sm: 500,
							md: 565,
							lg: 651,
						},
						objectFit: "fill",
						backgroundColor: "black",
					}}
				/>
				<Box className={`${styles.section}`} sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							bottom: 60,
							textAlign: "center",
							width: "100%",
						}}
					>
						<Typography
							className="hina-mincho-regular"
							variant="h1"
							sx={{
								textTransform: "uppercase",
								fontWeight: 600,
								color: [colors.white],
								fontSize: {
									xs: 17,
									sm: 32,
									md: 45,
									lg: 65,
								},
							}}
						>
							unlock designer with crypto.
						</Typography>
						<Box
							sx={{
								display: {
									xs: "block",
									md: "flex",
								},
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "end",
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
										sm: 25,
										md: 38,
									},
									margin: {
										xs: "8px 0px",
									},
								}}
							>
								btc, usdt, ltc, eth, xrp
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
								}}
							>
								learn more
							</Button>
						</Box>
					</Box>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					component="img"
					image={Image.cover}
					sx={{
						width: "100%",
						height: {
							xs: 400,
							sm: 500,
							md: 565,
							lg: 651,
						},
						objectFit: "fill",
						backgroundColor: "black",
					}}
				/>
				<Box className={`${styles.section}`} sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							bottom: 60,
							textAlign: "center",
							width: "100%",
						}}
					>
						<Typography
							className="hina-mincho-regular"
							variant="h1"
							sx={{
								textTransform: "uppercase",
								fontWeight: 600,
								color: [colors.white],
								fontSize: {
									xs: 17,
									sm: 32,
									md: 45,
									lg: 65,
								},
							}}
						>
							unlock designer with crypto.
						</Typography>
						<Box
							sx={{
								display: {
									xs: "block",
									md: "flex",
								},
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "end",
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
										sm: 25,
										md: 38,
									},
									margin: {
										xs: "8px 0px",
									},
								}}
							>
								btc, usdt, ltc, eth, xrp
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
								}}
							>
								learn more
							</Button>
						</Box>
					</Box>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					component="img"
					image={Image.cover}
					sx={{
						width: "100%",
						height: {
							xs: 400,
							sm: 500,
							md: 565,
							lg: 651,
						},
						objectFit: "fill",
						backgroundColor: "black",
					}}
				/>
				<Box className={`${styles.section}`} sx={{ position: "relative" }}>
					<Box
						sx={{
							position: "absolute",
							bottom: 60,
							textAlign: "center",
							width: "100%",
						}}
					>
						<Typography
							className="hina-mincho-regular"
							variant="h1"
							sx={{
								textTransform: "uppercase",
								fontWeight: 600,
								color: [colors.white],
								fontSize: {
									xs: 17,
									sm: 32,
									md: 45,
									lg: 65,
								},
							}}
						>
							unlock designer with crypto.
						</Typography>
						<Box
							sx={{
								display: {
									xs: "block",
									md: "flex",
								},
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "end",
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
										sm: 25,
										md: 38,
									},
									margin: {
										xs: "8px 0px",
									},
								}}
							>
								btc, usdt, ltc, eth, xrp
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
								}}
							>
								learn more
							</Button>
						</Box>
					</Box>
				</Box>
			</SwiperSlide>
		</Swiper>
	);
};

export default Hero;
