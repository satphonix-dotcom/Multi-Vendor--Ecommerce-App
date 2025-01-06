import React, { useState } from "react";
import { colors } from "../../styles/styles";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import {
	Box,
	Typography,
	CardMedia,
	Container,
	Button,
	Divider,
	TextField,
	Select,
	MenuItem,
} from "@mui/material";
import Image from "../../assets/Images";

const Checkout = () => {
	const { user } = useSelector((state) => state.user);
	const { cart } = useSelector((state) => state.cart);
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");
	const [userInfo, setUserInfo] = useState(false);
	const [address1, setAddress1] = useState("");
	const [address2, setAddress2] = useState("");
	const [zipCode, setZipCode] = useState(null);
	const [couponCode, setCouponCode] = useState("");
	const [couponCodeData, setCouponCodeData] = useState(null);
	const [discountPrice, setDiscountPrice] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const paymentSubmit = () => {
		if (
			address1 === "" ||
			address2 === "" ||
			zipCode === null ||
			country === "" ||
			city === ""
		) {
			toast.error("Please choose your delivery address!");
		} else {
			const shippingAddress = {
				address1,
				address2,
				zipCode,
				country,
				city,
			};

			const orderData = {
				cart,
				totalPrice,
				subTotalPrice,
				shipping,
				discountPrice,
				shippingAddress,
				user,
			};

			// update local storage with the updated orders array
			localStorage.setItem("latestOrder", JSON.stringify(orderData));
			navigate("/payment");
		}
	};

	const subTotalPrice = cart.reduce((acc, item) => acc + item.qty * item.discountPrice, 0);

	// this is shipping cost variable
	const shipping = subTotalPrice * 0.1;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = couponCode;

		await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
			const shopId = res.data.couponCode?.shopId;
			const couponCodeValue = res.data.couponCode?.value;
			if (res.data.couponCode !== null) {
				const isCouponValid = cart && cart.filter((item) => item.shopId === shopId);

				if (isCouponValid.length === 0) {
					toast.error("Coupon code is not valid for this shop");
					setCouponCode("");
				} else {
					const eligiblePrice = isCouponValid.reduce(
						(acc, item) => acc + item.qty * item.discountPrice,
						0
					);
					const discountPrice = (eligiblePrice * couponCodeValue) / 100;
					setDiscountPrice(discountPrice);
					setCouponCodeData(res.data.couponCode);
					setCouponCode("");
				}
			}
			if (res.data.couponCode === null) {
				toast.error("Coupon code doesn't exists!");
				setCouponCode("");
			}
		});
	};

	const discountPercentenge = couponCodeData ? discountPrice : "";

	const totalPrice = couponCodeData
		? (subTotalPrice + shipping - discountPercentenge).toFixed(2)
		: (subTotalPrice + shipping).toFixed(2);

	console.log(discountPercentenge);

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
						<ShippingInfo
							user={user}
							country={country}
							setCountry={setCountry}
							city={city}
							setCity={setCity}
							userInfo={userInfo}
							setUserInfo={setUserInfo}
							address1={address1}
							setAddress1={setAddress1}
							address2={address2}
							setAddress2={setAddress2}
							zipCode={zipCode}
							setZipCode={setZipCode}
						/>
						<Button
							sx={{
								width: "100%",
								backgroundColor: [colors.black],
								color: [colors.white],
								fontSize: 18,
								mt: 2,
							}}
							onClick={paymentSubmit}
						>
							Continue
						</Button>
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
						<CartData
							handleSubmit={handleSubmit}
							totalPrice={totalPrice}
							shipping={shipping}
							subTotalPrice={subTotalPrice}
							couponCode={couponCode}
							setCouponCode={setCouponCode}
							discountPercentenge={discountPercentenge}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

const ShippingInfo = ({
	user,
	country,
	setCountry,
	city,
	setCity,
	userInfo,
	setUserInfo,
	address1,
	setAddress1,
	address2,
	setAddress2,
	zipCode,
	setZipCode,
}) => {
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
					alignItems: "center",
					mt: 2,
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
						mr: 3,
					}}
				>
					Shipping to
				</Typography>
				<Box
					sx={{
						border: `1px solid ${colors.darkBrown}`,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						px: {
							xs: 1,
							sm: 2,
						},
						py: {
							xs: 0.2,
							sm: 0.5,
						},
						borderRadius: 4,
						alignItems: "center",
					}}
				>
					<CardMedia
						component="img"
						image={Image.usFlag}
						sx={{
							width: {
								xs: 25,
								sm: 35,
							},
							height: {
								xs: 15,
								sm: 25,
							},
							objectFit: "fill",
							mr: {
								xs: 1,
								sm: 2,
							},
						}}
					/>
					<Select
						variant="standard"
						value={country}
						sx={{
							minWidth: 100,
						}}
						onChange={(e) => setCountry(e.target.value)}
					>
						<MenuItem className="block pb-2" value="">
							Choose your country
						</MenuItem>
						{Country &&
							Country.getAllCountries().map((item) => (
								<MenuItem key={item.isoCode} value={item.isoCode}>
									{item.name}
								</MenuItem>
							))}
					</Select>
				</Box>
			</Box>
			<form>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						flexWrap: "wrap",
						justifyContent: "space-between",
						mt: 4,
					}}
				>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "19%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">Title</Typography>
						<TextField type="text" value={user && user.title} required fullWidth />
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "39%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">First Name</Typography>
						<TextField type="text" value={user && user.name} required fullWidth />
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "39%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">Last Name</Typography>
						<TextField type="text" value={user && user.lastName} required fullWidth />
					</Box>

					<Box
						sx={{
							width: "100%",
							mb: 2,
						}}
					>
						<Typography component="p">Type Your Address or Postal Zipcode</Typography>
						<TextField
							type="text"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
							required
							fullWidth
						/>
					</Box>
					<Box
						sx={{
							width: "100%",
							mb: 2,
						}}
					>
						<Typography component="p">Address Line One</Typography>
						<TextField
							type="address"
							required
							value={address1}
							onChange={(e) => setAddress1(e.target.value)}
							fullWidth
						/>
					</Box>
					<Box
						sx={{
							width: "100%",
							mb: 2,
						}}
					>
						<Typography component="p">Address Line Two</Typography>
						<TextField
							type="address"
							required
							value={address2}
							onChange={(e) => setAddress2(e.target.value)}
							fullWidth
						/>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "60%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">City</Typography>
						<Select value={city} onChange={(e) => setCity(e.target.value)} fullWidth>
							<MenuItem className="block pb-2" value="">
								Choose your City
							</MenuItem>
							{State &&
								State.getStatesOfCountry(country).map((item) => (
									<MenuItem key={item.isoCode} value={item.isoCode}>
										{item.name}
									</MenuItem>
								))}
						</Select>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "49%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">State</Typography>
						<Select value={city} onChange={(e) => setCity(e.target.value)} fullWidth>
							<MenuItem className="block pb-2" value="">
								Choose your State
							</MenuItem>
							{State &&
								State.getStatesOfCountry(country).map((item) => (
									<MenuItem key={item.isoCode} value={item.isoCode}>
										{item.name}
									</MenuItem>
								))}
						</Select>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "49%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">Zipcode</Typography>
						<TextField
							type="number"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
							required
							fullWidth
						/>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "60%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">Phone Number</Typography>
						<TextField
							type="number"
							required
							value={user && user.phoneNumber}
							fullWidth
						/>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "60%",
							},
							mb: 2,
						}}
					>
						<Typography component="p">Email Address</Typography>
						<TextField type="email" value={user && user.email} required fullWidth />
					</Box>
				</Box>
			</form>
		</Box>
	);
};

const CartData = ({
	handleSubmit,
	totalPrice,
	shipping,
	subTotalPrice,
	couponCode,
	setCouponCode,
	discountPercentenge,
}) => {
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
					{"$" + subTotalPrice}
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
					${shipping.toFixed(2)}
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
					{"$" + totalPrice}
				</Typography>
			</Box>
		</Box>
	);
};

export default Checkout;
