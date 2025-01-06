// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/styles";
// import { categoriesData, productData } from "../../static/data";
// import {
//   AiOutlineHeart,
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import DropDown from "./DropDown";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";

// const Header = ({ activeHeading }) => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { isSeller } = useSelector((state) => state.seller);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { allProducts } = useSelector((state) => state.products);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState(null);
//   const [active, setActive] = useState(false);
//   const [dropDown, setDropDown] = useState(false);
//   const [openCart, setOpenCart] = useState(false);
//   const [openWishlist, setOpenWishlist] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredProducts =
//       allProducts &&
//       allProducts.filter((product) =>
//         product.name.toLowerCase().includes(term.toLowerCase())
//       );
//     setSearchData(filteredProducts);
//   };

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 70) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });

//   return (
//     <>
//       <div className={`${styles.section}`}>
//         <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
//           <div>
//             <Link to="/">
//               <img
//                 src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//                 alt=""
//               />
//             </Link>
//           </div>
//           {/* search box */}
//           <div className="w-[50%] relative">
//             <input
//               type="text"
//               placeholder="Search Product..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
//             />
//             <AiOutlineSearch
//               size={30}
//               className="absolute right-2 top-1.5 cursor-pointer"
//             />
// {searchData && searchData.length !== 0 ? (
//   <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
//     {searchData &&
//       searchData.map((i, index) => {
//         return (
//           <Link to={`/product/${i._id}`}>
//             <div className="w-full flex items-start-py-3">
//               <img
//                 src={`${i.images[0]?.url}`}
//                 alt=""
//                 className="w-[40px] h-[40px] mr-[10px]"
//               />
//               <h1>{i.name}</h1>
//             </div>
//           </Link>
//         );
//       })}
//   </div>
// ) : null}
//           </div>

//           <div className={`${styles.button}`}>
//             <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
//               <h1 className="text-[#fff] flex items-center">
//                 {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
//                 <IoIosArrowForward className="ml-1" />
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
//       >
//         <div
//           className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
//         >
//           {/* categories */}
//           <div onClick={() => setDropDown(!dropDown)}>
//             <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
//               <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
//               <button
//                 className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
//               >
//                 All Categories
//               </button>
//               <IoIosArrowDown
//                 size={20}
//                 className="absolute right-2 top-4 cursor-pointer"
//                 onClick={() => setDropDown(!dropDown)}
//               />
//               {dropDown ? (
//                 <DropDown
//                   categoriesData={categoriesData}
//                   setDropDown={setDropDown}
//                 />
//               ) : null}
//             </div>
//           </div>
//           {/* navitems */}
//           <div className={`${styles.noramlFlex}`}>
//             <Navbar active={activeHeading} />
//           </div>

//           <div className="flex">
//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenWishlist(true)}
//               >
//                 <AiOutlineHeart size={30} color="rgb(235 235 235 / 83%)" />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {wishlist && wishlist.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenCart(true)}
//               >
//                 <AiOutlineShoppingCart
//                   size={30}
//                   color="rgb(235 235 235 / 83%)"
//                 />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {cart && cart.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div className="relative cursor-pointer mr-[15px]">
//                 {isAuthenticated ? (
//                   <Link to="/profile">
//                     <img
//                       src={`${user?.avatar?.url}`}
//                       className="w-[35px] h-[35px] rounded-full"
//                       alt=""
//                     />
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <CgProfile size={30} color="rgb(235 235 235 / 83%)" />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* cart popup */}
//             {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//             {/* wishlist popup */}
//             {openWishlist ? (
//               <Wishlist setOpenWishlist={setOpenWishlist} />
//             ) : null}
//           </div>
//         </div>
//       </div>

//       {/* mobile header */}
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         }
//       w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
//       >
//         <div className="w-full flex items-center justify-between">
//           <div>
//             <BiMenuAltLeft
//               size={40}
//               className="ml-4"
//               onClick={() => setOpen(true)}
//             />
//           </div>
//           <div>
//             <Link to="/">
//               <img
//                 src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//                 alt=""
//                 className="mt-3 cursor-pointer"
//               />
//             </Link>
//           </div>
//           <div>
//             <div
//               className="relative mr-[20px]"
//               onClick={() => setOpenCart(true)}
//             >
//               <AiOutlineShoppingCart size={30} />
//               <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                 {cart && cart.length}
//               </span>
//             </div>
//           </div>
//           {/* cart popup */}
//           {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//           {/* wishlist popup */}
//           {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
//         </div>

//         {/* header sidebar */}
//         {open && (
//           <div
//             className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
//           >
//             <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
//               <div className="w-full justify-between flex pr-3">
//                 <div>
//                   <div
//                     className="relative mr-[15px]"
//                     onClick={() => setOpenWishlist(true) || setOpen(false)}
//                   >
//                     <AiOutlineHeart size={30} className="mt-5 ml-3" />
//                     <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                       {wishlist && wishlist.length}
//                     </span>
//                   </div>
//                 </div>
//                 <RxCross1
//                   size={30}
//                   className="ml-4 mt-5"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>

//               <div className="my-8 w-[92%] m-auto h-[40px relative]">
//                 <input
//                   type="search"
//                   placeholder="Search Product..."
//                   className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//                 {searchData && (
//                   <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
//                     {searchData.map((i) => {
//                       const d = i.name;

//                       const Product_name = d.replace(/\s+/g, "-");
//                       return (
//                         <Link to={`/product/${Product_name}`}>
//                           <div className="flex items-center">
//                             <img
//                               src={i.image_Url[0]?.url}
//                               alt=""
//                               className="w-[50px] mr-2"
//                             />
//                             <h5>{i.name}</h5>
//                           </div>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               <Navbar active={activeHeading} />
//               <div className={`${styles.button} ml-4 !rounded-[4px]`}>
//                 <Link to="/shop-create">
//                   <h1 className="text-[#fff] flex items-center">
//                     Become Seller <IoIosArrowForward className="ml-1" />
//                   </h1>
//                 </Link>
//               </div>
//               <br />
//               <br />
//               <br />

//               <div className="flex w-full justify-center">
//                 {isAuthenticated ? (
//                   <div>
//                     <Link to="/profile">
//                       <img
//                         src={`${user.avatar?.url}`}
//                         alt=""
//                         className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
//                       />
//                     </Link>
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="text-[{sm:13,
//
// md:18,
// }px] pr-[10px] text-[#000000b7]"
//                     >
//                       Login /
//                     </Link>
//                     <Link
//                       to="/sign-up"
//                       className="text-[{sm:13,
//
// md:18,
// }px] text-[#000000b7]"
//                     >
//                       Sign up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";

import { colors } from "../../styles/styles";
import { Box, CardMedia, Container, IconButton, TextField, Typography } from "@mui/material";
import Image from "../../assets/Images";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

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
