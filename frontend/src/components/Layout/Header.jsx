import React, { useState } from "react";

import { Box, CardMedia, Container, IconButton, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { colors } from "../../styles/styles";
import Image from "../../assets/Images";

const Header = (props) => {
	const { position, opacity } = props;
	const { cart } = useSelector((state) => state.cart);
	const [searchBar, setSearchBar] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchData, setSearchData] = useState(null);
	const { allProducts } = useSelector((state) => state.products);
	const { isAuthenticated, user } = useSelector((state) => state.user);

	const handleSearchChange = (e) => {
		const term = e.target.value;
		setSearchTerm(term);

		const filteredProducts =
			allProducts &&
			allProducts.filter((product) =>
				product.name.toLowerCase().includes(term.toLowerCase())
			);
		setSearchData(filteredProducts);
	};

	return (
		<Box
			sx={{
				backgroundColor: `rgba(34,34,34,${opacity})`,
				paddingY: 2,
				position: position,
				zIndex: 99,
				width: "100%",
				top: 0,
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							width: "67%",
						}}
					>
						<Link to="/">
							<CardMedia
								component="img"
								image={Image.logo}
								sx={{
									width: {
										xs: 150,
										sm: 300,
										md: 350,
									},
									objectFit: "fill",
									marginLeft: "auto",
									cursor: "pointer",
								}}
							/>
						</Link>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center",
							gap: {
								xs: "10px",
								sm: "20px",
								md: "30px",
							},
						}}
					>
						<CardMedia
							onClick={() => setSearchBar(true)}
							component="img"
							image={Image.search}
							sx={{
								width: {
									xs: 18,
									md: 23,
								},
								objectFit: "fill",
								marginLeft: "auto",
								cursor: "pointer",
							}}
						/>
						{isAuthenticated ? (
							<Link to="/profile">
								<CardMedia
									component="img"
									image={`${user?.avatar?.url}`}
									sx={{
										width: {
											xs: 18,
											md: 23,
										},
										objectFit: "fill",
										marginLeft: "auto",
									}}
								/>
							</Link>
						) : (
							<Link to="/login">
								<CardMedia
									component="img"
									image={Image.profile}
									sx={{
										width: {
											xs: 18,
											md: 23,
										},
										objectFit: "fill",
										marginLeft: "auto",
									}}
								/>
							</Link>
						)}
						<Box
							sx={{
								position: "relative",
								width: {
									xs: 18,
									md: 23,
								},
							}}
						>
							<Link to="/cart">
								<CardMedia
									component="img"
									image={Image.cart}
									sx={{
										width: "100%",
										objectFit: "fill",
										marginLeft: "auto",
										transition: "0.3s",
										cursor: "pointer",
									}}
								/>
							</Link>
							<span className="absolute -right-0.5 top-0 rounded-full bg-[#977d6f] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
								{cart && cart.length}
							</span>
						</Box>
					</Box>
				</Box>

				{searchBar && (
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100vh",
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							display: "flex",
							justifyContent: "center",
							zIndex: 1000,
						}}
					>
						<Box
							sx={{
								width: "75%",
								height: 150,
								backgroundColor: colors.white,
								padding: 2,
								borderRadius: 6,
								position: "relative",
								boxShadow: 1,
								mt: 10,
							}}
						>
							<IconButton
								onClick={() => setSearchBar(false)}
								sx={{
									position: "absolute",
									top: 2,
									right: 4,
								}}
							>
								<IoClose size={30} />
							</IconButton>
							<TextField
								fullWidth
								variant="outlined"
								type="text"
								placeholder="Search Product..."
								value={searchTerm}
								onChange={handleSearchChange}
								sx={{
									marginBottom: 2,
									mt: 4,
								}}
							/>
							{searchData && searchData.length !== 0 ? (
								<div
									className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4"
									style={{
										width: "100%",
										left: 0,
										right: 0,
									}}
								>
									{searchData &&
										searchData.map((i, index) => {
											return (
												<Link to={`/product/${i._id}`}>
													<div className="w-full flex items-start-py-3">
														<img
															src={`${i.images[0]?.url}`}
															alt=""
															className="w-[40px] h-[40px] mr-[10px]"
														/>
														<h1>{i.name}</h1>
													</div>
												</Link>
											);
										})}
								</div>
							) : null}
						</Box>
					</Box>
				)}

				<Box
					sx={{
						textAlign: "center",
						mt: 2,
					}}
				>
					<Typography
						component="li"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							color: [colors.white],
							fontSize: {
								xs: 9,
								sm: 12,
								md: 13,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
						}}
					>
						NEW
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						stores
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						designer
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						clothing
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						shoes
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						bags
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						jewlery
					</Typography>
					<Typography
						component={Link}
						to="#"
						className="hina-mincho-regular"
						sx={{
							listStyle: "none",
							display: "inline-block",
							mr: { xs: 0.7, sm: 2, md: 4 },
							textTransform: "capitalize",
							color: [colors.white],
							fontSize: {
								xs: 11,
								sm: 13,
								md: 18,
							},
							letterSpacing: {
								sm: 2,
								md: 3,
							},
							borderBottom: "1px solid transparent",
							"&:hover": {
								borderBottom: "1px solid white",
							},
						}}
					>
						accessories
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
