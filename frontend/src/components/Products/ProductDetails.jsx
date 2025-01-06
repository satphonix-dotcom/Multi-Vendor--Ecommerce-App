// import React, { useEffect, useState } from "react";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { server } from "../../server";
// import styles from "../../styles/styles";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";
// import Ratings from "./Ratings";
// import axios from "axios";

// const ProductDetails = ({ data }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { user, isAuthenticated } = useSelector((state) => state.user);
//   const { products } = useSelector((state) => state.products);
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   const [select, setSelect] = useState(0);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProductsShop(data && data?.shop._id));
//     if (wishlist && wishlist.find((i) => i._id === data?._id)) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   }, [data, wishlist]);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(removeFromWishlist(data));
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(addToWishlist(data));
//   };

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i._id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: count };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   };

//   const totalReviewsLength =
//     products &&
//     products.reduce((acc, product) => acc + product.reviews.length, 0);

//   const totalRatings =
//     products &&
//     products.reduce(
//       (acc, product) =>
//         acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
//       0
//     );

//   const avg =  totalRatings / totalReviewsLength || 0;

//   const averageRating = avg.toFixed(2);

//   const handleMessageSubmit = async () => {
//     if (isAuthenticated) {
//       const groupTitle = data._id + user._id;
//       const userId = user._id;
//       const sellerId = data.shop._id;
//       await axios
//         .post(`${server}/conversation/create-new-conversation`, {
//           groupTitle,
//           userId,
//           sellerId,
//         })
//         .then((res) => {
//           navigate(`/inbox?${res.data.conversation._id}`);
//         })
//         .catch((error) => {
//           toast.error(error.response.data.message);
//         });
//     } else {
//       toast.error("Please login to create a conversation");
//     }
//   };

//   return (
//     <div className="bg-white">
//       {data ? (
//         <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
//           <div className="w-full py-5">
//             <div className="block w-full 800px:flex">
//               <div className="w-full 800px:w-[50%]">
//                 <img
//                   src={`${data && data.images[select]?.url}`}
//                   alt=""
//                   className="w-[80%]"
//                 />
//                 <div className="w-full flex">
//                   {data &&
//                     data.images.map((i, index) => (
//                       <div
//                         className={`${
//                           select === 0 ? "border" : "null"
//                         } cursor-pointer`}
//                       >
//                         <img
//                           src={`${i?.url}`}
//                           alt=""
//                           className="h-[200px] overflow-hidden mr-3 mt-3"
//                           onClick={() => setSelect(index)}
//                         />
//                       </div>
//                     ))}
//                   <div
//                     className={`${
//                       select === 1 ? "border" : "null"
//                     } cursor-pointer`}
//                   ></div>
//                 </div>
//               </div>
//               <div className="w-full 800px:w-[50%] pt-5">
//                 <h1 className={`${styles.productTitle}`}>{data.name}</h1>
//                 <p>{data.description}</p>
//                 <div className="flex pt-3">
//                   <h4 className={`${styles.productDiscountPrice}`}>
//                     {data.discountPrice}$
//                   </h4>
//                   <h3 className={`${styles.price}`}>
//                     {data.originalPrice ? data.originalPrice + "$" : null}
//                   </h3>
//                 </div>

//                 <div className="flex items-center mt-12 justify-between pr-3">
//                   <div>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={decrementCount}
//                     >
//                       -
//                     </button>
//                     <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
//                       {count}
//                     </span>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={incrementCount}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     {click ? (
//                       <AiFillHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => removeFromWishlistHandler(data)}
//                         color={click ? "red" : "#333"}
//                         title="Remove from wishlist"
//                       />
//                     ) : (
//                       <AiOutlineHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => addToWishlistHandler(data)}
//                         color={click ? "red" : "#333"}
//                         title="Add to wishlist"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
//                   onClick={() => addToCartHandler(data._id)}
//                 >
//                   <span className="text-white flex items-center">
//                     Add to cart <AiOutlineShoppingCart className="ml-1" />
//                   </span>
//                 </div>
//                 <div className="flex items-center pt-8">
//                   <Link to={`/shop/preview/${data?.shop._id}`}>
//                     <img
//                       src={`${data?.shop?.avatar?.url}`}
//                       alt=""
//                       className="w-[50px] h-[50px] rounded-full mr-2"
//                     />
//                   </Link>
//                   <div className="pr-8">
//                     <Link to={`/shop/preview/${data?.shop._id}`}>
//                       <h3 className={`${styles.shop_name} pb-1 pt-1`}>
//                         {data.shop.name}
//                       </h3>
//                     </Link>
//                     <h5 className="pb-3 text-[15px]">
//                       ({averageRating}/5) Ratings
//                     </h5>
//                   </div>
//                   <div
//                     className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
//                     onClick={handleMessageSubmit}
//                   >
//                     <span className="text-white flex items-center">
//                       Send Message <AiOutlineMessage className="ml-1" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ProductDetailsInfo
//             data={data}
//             products={products}
//             totalReviewsLength={totalReviewsLength}
//             averageRating={averageRating}
//           />
//           <br />
//           <br />
//         </div>
//       ) : null}
//     </div>
//   );
// };

// const ProductDetailsInfo = ({
//   data,
//   products,
//   totalReviewsLength,
//   averageRating,
// }) => {
//   const [active, setActive] = useState(1);

//   return (
//     <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
//       <div className="w-full flex justify-between border-b pt-10 pb-2">
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(1)}
//           >
//             Product Details
//           </h5>
//           {active === 1 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(2)}
//           >
//             Product Reviews
//           </h5>
//           {active === 2 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(3)}
//           >
//             Seller Information
//           </h5>
//           {active === 3 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//       </div>
//       {active === 1 ? (
//         <>
//           <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
//             {data.description}
//           </p>
//         </>
//       ) : null}

//       {active === 2 ? (
//         <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
//           {data &&
//             data.reviews.map((item, index) => (
//               <div className="w-full flex my-2">
//                 <img
//                   src={`${item.user.avatar?.url}`}
//                   alt=""
//                   className="w-[50px] h-[50px] rounded-full"
//                 />
//                 <div className="pl-2 ">
//                   <div className="w-full flex items-center">
//                     <h1 className="font-[500] mr-3">{item.user.name}</h1>
//                     <Ratings rating={data?.ratings} />
//                   </div>
//                   <p>{item.comment}</p>
//                 </div>
//               </div>
//             ))}

//           <div className="w-full flex justify-center">
//             {data && data.reviews.length === 0 && (
//               <h5>No Reviews have for this product!</h5>
//             )}
//           </div>
//         </div>
//       ) : null}

//       {active === 3 && (
//         <div className="w-full block 800px:flex p-5">
//           <div className="w-full 800px:w-[50%]">
//             <Link to={`/shop/preview/${data.shop._id}`}>
//               <div className="flex items-center">
//                 <img
//                   src={`${data?.shop?.avatar?.url}`}
//                   className="w-[50px] h-[50px] rounded-full"
//                   alt=""
//                 />
//                 <div className="pl-3">
//                   <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
//                   <h5 className="pb-2 text-[15px]">
//                     ({averageRating}/5) Ratings
//                   </h5>
//                 </div>
//               </div>
//             </Link>
//             <p className="pt-2">{data.shop.description}</p>
//           </div>
//           <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
//             <div className="text-left">
//               <h5 className="font-[600]">
//                 Joined on:{" "}
//                 <span className="font-[500]">
//                   {data.shop?.createdAt?.slice(0, 10)}
//                 </span>
//               </h5>
//               <h5 className="font-[600] pt-3">
//                 Total Products:{" "}
//                 <span className="font-[500]">
//                   {products && products.length}
//                 </span>
//               </h5>
//               <h5 className="font-[600] pt-3">
//                 Total Reviews:{" "}
//                 <span className="font-[500]">{totalReviewsLength}</span>
//               </h5>
//               <Link to="/">
//                 <div
//                   className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
//                 >
//                   <h4 className="text-white">Visit Shop</h4>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { Box, Container, CardMedia, Typography, Button } from "@mui/material";
import { colors } from "../../styles/styles";
import Image from "../../assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

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
