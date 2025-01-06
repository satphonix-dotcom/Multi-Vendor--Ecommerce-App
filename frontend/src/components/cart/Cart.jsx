// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
// import styles from "../../styles/styles";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart, removeFromCart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";

// const Cart = ({ setOpenCart }) => {
// 	const { cart } = useSelector((state) => state.cart);
// 	const dispatch = useDispatch();

// 	const removeFromCartHandler = (data) => {
// 		dispatch(removeFromCart(data));
// 	};

// 	const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.discountPrice, 0);

// 	const quantityChangeHandler = (data) => {
// 		dispatch(addTocart(data));
// 	};

// 	return (
// 		<div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
// 			<div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
// 				{cart && cart.length === 0 ? (
// 					<div className="w-full h-screen flex items-center justify-center">
// 						<div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
// 							<RxCross1
// 								size={25}
// 								className="cursor-pointer"
// 								onClick={() => setOpenCart(false)}
// 							/>
// 						</div>
// 						<h5>Cart Items is empty!</h5>
// 					</div>
// 				) : (
// 					<>
// 						<div>
// 							<div className="flex w-full justify-end pt-5 pr-5">
// 								<RxCross1
// 									size={25}
// 									className="cursor-pointer"
// 									onClick={() => setOpenCart(false)}
// 								/>
// 							</div>
// 							{/* Item length */}
// 							<div className={`${styles.noramlFlex} p-4`}>
// 								<IoBagHandleOutline size={25} />
// 								<h5 className="pl-2 text-[20px] font-[500]">
// 									{cart && cart.length} items
// 								</h5>
// 							</div>

// 							{/* cart Single Items */}
// 							<br />
// 							<div className="w-full border-t">
// 								{cart &&
// 									cart.map((i, index) => (
// 										<CartSingle
// 											key={index}
// 											data={i}
// 											quantityChangeHandler={quantityChangeHandler}
// 											removeFromCartHandler={removeFromCartHandler}
// 										/>
// 									))}
// 							</div>
// 						</div>

// 						<div className="px-5 mb-3">
// 							{/* checkout buttons */}
// 							<Link to="/checkout">
// 								<div
// 									className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
// 								>
// 									<h1 className="text-[#fff] text-[18px] font-[600]">
// 										Checkout Now (USD${totalPrice})
// 									</h1>
// 								</div>
// 							</Link>
// 						</div>
// 					</>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
// 	const [value, setValue] = useState(data.qty);
// 	const totalPrice = data.discountPrice * value;

// 	const increment = (data) => {
// 		if (data.stock < value) {
// 			toast.error("Product stock limited!");
// 		} else {
// 			setValue(value + 1);
// 			const updateCartData = { ...data, qty: value + 1 };
// 			quantityChangeHandler(updateCartData);
// 		}
// 	};

// 	const decrement = (data) => {
// 		setValue(value === 1 ? 1 : value - 1);
// 		const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
// 		quantityChangeHandler(updateCartData);
// 	};

// 	return (
// 		<div className="border-b p-4">
// 			<div className="w-full flex items-center">
// 				<div>
// 					<div
// 						className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
// 						onClick={() => increment(data)}
// 					>
// 						<HiPlus size={18} color="#fff" />
// 					</div>
// 					<span className="pl-[10px]">{data.qty}</span>
// 					<div
// 						className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
// 						onClick={() => decrement(data)}
// 					>
// 						<HiOutlineMinus size={16} color="#7d879c" />
// 					</div>
// 				</div>
// 				<img
// 					src={`${data?.images[0]?.url}`}
// 					alt=""
// 					className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
// 				/>
// 				<div className="pl-[5px]">
// 					<h1>{data.name}</h1>
// 					<h4 className="font-[400] text-[15px] text-[#00000082]">
// 						${data.discountPrice} * {value}
// 					</h4>
// 					<h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
// 						US${totalPrice}
// 					</h4>
// 				</div>
// 				<RxCross1 className="cursor-pointer" onClick={() => removeFromCartHandler(data)} />
// 			</div>
// 		</div>
// 	);
// };

// export default Cart;

import React, { useState } from "react";
import { Box, Container, Typography, CardMedia, Button } from "@mui/material";
import { colors } from "../../styles/styles";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import Image from "../../assets/Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { toast } from "react-toastify";

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const removeFromCartHandler = (data) => {
		dispatch(removeFromCart(data));
	};

	const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.discountPrice, 0);

	const quantityChangeHandler = (data) => {
		dispatch(addTocart(data));
	};

	return (
		<Box
			sx={{
				py: {
					xs: 3,
					md: 5,
				},
			}}
		>
			<Container>
				<Typography
					variant="h1"
					className="hina-mincho-regular"
					sx={{
						textTransform: "uppercase",
						fontWeight: 600,
						fontSize: {
							xs: 26,
							md: 40,
						},
					}}
				>
					shopping bag
				</Typography>
				<Box
					sx={{
						display: {
							xs: "block",
							md: "flex",
						},
						flexDirection: "row",
						flexWrap: "wrap",
						gap: "1%",
					}}
				>
					{cart.length === 0 ? (
						<Box
							sx={{
								width: {
									xs: "100%",
									md: "64.5%",
								},
							}}
						>
							<Typography
								variant="h1"
								className="hina-mincho-regular"
								sx={{
									fontWeight: 600,
									fontSize: 30,
									mt: 10,
									color: [colors.darkBrown],
								}}
							>
								Your Cart Is Empty
							</Typography>
						</Box>
					) : null}

					{cart &&
						cart.map((i, index) => (
							<CartSingle
								key={index}
								data={i}
								removeFromCartHandler={removeFromCartHandler}
								quantityChangeHandler={quantityChangeHandler}
							/>
						))}
					<Box
						sx={{
							width: {
								xs: "100%",
								md: "34.5%",
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
									xs: 20,
									md: 26,
								},
								mt: 4,
								letterSpacing: 2,
							}}
						>
							order Summargy
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-between",
								alignItems: "center",
								mt: 2,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 18,
									},
									mt: 1,
									textTransform: "capitalize",
									cursor: "pointer",
								}}
							>
								item subtotal
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 18,
									},
									mt: 1,
									textTransform: "uppercase",
									cursor: "pointer",
								}}
							>
								${totalPrice}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-between",
								alignItems: "center",
								mt: 2,
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 22,
									},
									mt: 1,
									textTransform: "uppercase",
									cursor: "pointer",
									fontWeight: 600,
								}}
							>
								total
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 22,
									},
									mt: 1,
									textTransform: "uppercase",
									cursor: "pointer",
									fontWeight: 600,
								}}
							>
								${totalPrice}
							</Typography>
						</Box>
						<Link to="/checkout">
							<Button
								fullWidth
								sx={{
									py: 0.7,
									backgroundColor: [colors.darkBrown],
									color: [colors.white],
									fontSize: {
										md: 15,
										lg: 18,
									},
									textTransform: "uppercase",
									fontWeight: 400,
									mt: 3,
									position: "relative",
								}}
							>
								<IoLockClosedOutline
									style={{
										position: "absolute",
										left: 6,
									}}
								/>
								continue to secure checkout
								<IoLockClosedOutline
									style={{
										position: "absolute",
										right: 6,
									}}
								/>
							</Button>
						</Link>
						<CardMedia
							component="img"
							image={Image.cryptoLogos}
							sx={{
								width: 200,
								objectFit: "fill",
								mt: 2,
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
	const [addProduct, setAddProduct] = useState(false);
	const [selectColor, setSelectColor] = useState("Dark Brown");
	const [value, setValue] = useState(data.qty);
	const colorArray = [
		{ name: "Dark Brown", value: colors.productDarkB },
		{ name: "Light Brown", value: colors.productLightB },
	];

	const increment = (data) => {
		if (data.stock < value) {
			toast.error("Product stock limited!");
		} else {
			setValue(value + 1);
			const updateCartData = { ...data, qty: value + 1 };
			quantityChangeHandler(updateCartData);
		}
	};

	const decrement = (data) => {
		setValue(value === 1 ? 1 : value - 1);
		const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
		quantityChangeHandler(updateCartData);
	};

	return (
		<Box
			sx={{
				width: {
					xs: "100%",
					md: "64.5%",
				},
			}}
		>
			<Box
				sx={{
					mt: 4,
					pt: 5,
					borderTop: `1px solid ${colors.darkBrown}`,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "4%",
				}}
			>
				<CardMedia
					component="img"
					image={`${data?.images[0]?.url}`}
					onClick={() => setAddProduct(data)}
					sx={{
						width: "26%",
						height: {
							xs: 150,
							sm: 200,
							md: 240,
						},
						objectFit: "fill",
						transition: "0.3s",
						cursor: "pointer",
						"&:hover": {
							transform: "scale(1.03)",
						},
					}}
				/>
				<Box sx={{ width: "70%" }}>
					<Typography
						variant="h1"
						className="hina-mincho-regular"
						sx={{
							textTransform: "uppercase",
							color: [colors.darkBrown],
							fontWeight: 600,
							fontSize: {
								xs: 20,
								sm: 26,
							},
						}}
					>
						{data.name}
					</Typography>

					<Typography
						component="p"
						sx={{
							mt: 0.5,
							fontSize: {
								xs: 14,
								sm: 18,
							},
						}}
					>
						{data.description}
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							gap: "10px",
							alignItems: "center",
							mt: 0.5,
						}}
					>
						<Box
							sx={{
								width: 20,
								height: 20,
								backgroundColor: [colors.productDarkB],
								borderRadius: 50,
							}}
						></Box>
						<Typography
							component="p"
							sx={{
								fontSize: {
									xs: 14,
									sm: 18,
								},
							}}
						>
							Brown
						</Typography>
					</Box>
					<Typography
						component="p"
						sx={{
							mt: 1,
							fontSize: {
								xs: 14,
								sm: 18,
							},
						}}
					>
						Product ID: {data._id}
					</Typography>
					<Typography
						component="p"
						sx={{
							fontSize: {
								xs: 14,
								sm: 18,
							},
							mt: 2,
						}}
					>
						QTY: {data.qty}
					</Typography>
					<Typography
						component="p"
						sx={{
							fontSize: {
								xs: 16,
								sm: 20,
							},
							fontWeight: 600,
							mt: 0.5,
						}}
					>
						${data.discountPrice}
					</Typography>
					<Typography
						onClick={() => removeFromCartHandler(data)}
						component="p"
						sx={{
							fontSize: {
								xs: 14,
								sm: 16,
							},
							mt: 0.5,
							textTransform: "uppercase",
							cursor: "pointer",
						}}
					>
						remove product
					</Typography>
				</Box>
			</Box>
			{addProduct && (
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
						alignItems: "center",
						zIndex: 1000,
					}}
				>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "90%",
								md: "60%",
							},
							height: 450,
							backgroundColor: [colors.gray],
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-between",
							py: 3,
							px: 1,
						}}
					>
						<Box
							sx={{
								width: {
									xs: "40%",
									lg: "50%",
								},
								my: "auto",
								px: 1,
							}}
						>
							<Swiper
								cssMode={true}
								navigation={true}
								pagination={true}
								mousewheel={true}
								keyboard={true}
								modules={[Navigation, Pagination, Mousewheel, Keyboard]}
								className="mySwiper"
							>
								{addProduct.images.map((img, idx) => {
									return (
										<SwiperSlide key={idx}>
											<CardMedia
												component="img"
												image={img.url}
												sx={{
													height: 400,
													objectFit: "fill",
												}}
											/>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</Box>
						<Box
							sx={{
								width: {
									xs: "60%",
									lg: "50%",
								},
								px: 1,
								my: "auto",
							}}
						>
							<Typography
								variant="h1"
								className="hina-mincho-regular"
								sx={{
									fontSize: {
										xs: 18,
										sm: 30,
									},
									fontWeight: 600,
									color: [colors.darkBrown],
									textTransform: "uppercase",
								}}
							>
								{addProduct.name}
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 17,
									},
									mt: 1,
								}}
							>
								{addProduct.description}
							</Typography>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 17,
									},
									mt: 1,
									fontWeight: 600,
								}}
							>
								{"$" + addProduct.discountPrice * data.qty}
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									gap: "20px",
									flexWrap: "wrap",
									mt: 1,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 14,
											sm: 17,
										},
										fontWeight: 600,
									}}
								>
									Color:
								</Typography>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 14,
											sm: 17,
										},
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
											width: {
												xs: 15,
												sm: 30,
											},
											height: {
												xs: 15,
												sm: 30,
											},
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
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									gap: "20px",
									flexWrap: "wrap",
									mt: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 14,
											sm: 17,
										},
										fontWeight: 600,
									}}
								>
									Size:
								</Typography>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 14,
											sm: 17,
										},
									}}
								>
									N/A
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									gap: "20px",
									alignItems: "center",
									mt: 4,
								}}
							>
								<Button
									onClick={() => decrement(data)}
									sx={{
										border: `1px solid ${colors.darkBrown}`,
										px: 1,
										py: 1,
										color: [colors.darkBrown],
										borderRadius: 0,
										minWidth: "auto",
									}}
								>
									<FaMinus />
								</Button>
								<Typography
									component="p"
									sx={{
										fontSize: {
											xs: 14,
											sm: 17,
										},
										fontWeight: 600,
									}}
								>
									{data.qty}
								</Typography>
								<Button
									onClick={() => increment(data)}
									sx={{
										border: `1px solid ${colors.darkBrown}`,
										px: 1,
										py: 1,
										color: [colors.darkBrown],
										borderRadius: 0,
										minWidth: "auto",
									}}
								>
									<FaPlus />
								</Button>
							</Box>
							<Button
								sx={{
									backgroundColor: [colors.black],
									color: [colors.white],
									textTransform: "uppercase",
									borderRadius: 0,
									mt: 3,
									py: 1,
									fontSize: {
										xs: 14,
										sm: 17,
									},
								}}
								onClick={() => setAddProduct(false)}
								fullWidth
							>
								update product
							</Button>
							<Typography
								component="p"
								sx={{
									fontSize: {
										xs: 14,
										sm: 17,
									},
									mt: 1,
								}}
							>
								Product ID: {addProduct._id}
							</Typography>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Cart;
