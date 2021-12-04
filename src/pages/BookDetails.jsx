import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Card } from "@mui/material";
import styles from "../styles/BookDetails.module.css";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
// icons
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import MoneyIcon from "@mui/icons-material/Money";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

// custom import
import { HomeBook } from "../components";

const BuyBooks = [
  {
    id: 5,
    image: "12.jpg",
    book_title: "Javascript Beginner's Tutorial",
    writer: "QuanTech",
    disCount: true,
    discountPrice: 400,
    price: 550,
    stock: true,
    status: true,
  },
  {
    id: 6,
    image: "7.jpg",
    book_title: "Programming in ANSI",
    writer: "E.Balagurusamy",
    disCount: true,
    discountPrice: 400,
    price: 600,
    stock: true,
    status: true,
  },
  {
    id: 7,
    image: "8.jpg",
    book_title: "Java Program Design",
    writer: "E.Fahim Khan",
    disCount: true,
    discountPrice: 400,
    price: 600,
    stock: true,
    status: true,
  },
  {
    id: 8,
    image: "10.jpg",
    book_title: "Coe Java Simply in Depth",
    writer: "E.Ajit Singh",
    disCount: true,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 9,
    image: "13.jpg",
    book_title: "Javascript For Beginners",
    writer: "JOHN J.Maldonado",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 10,
    image: "14.jpg",
    book_title: "Coffee Break Python",
    writer: "Christian Mayer",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 11,
    image: "15.jpg",
    book_title: "Linux for Beginners",
    writer: "Michael Clark",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 12,
    image: "17.jpg",
    book_title: "The Pragmatic Programmer",
    writer: "Andrew Hunt",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
];
function BookDetails() {
  const [anchorEl, setsetAnchorEl] = React.useState(false);
  const [openBar, setOpenBar] = React.useState(false);
  const [BuyBookList, setBuyBookList] = React.useState(BuyBooks);
  const { book_id } = useParams();
  const open = Boolean(anchorEl);
  const [districts, setDistricts] = React.useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    async function fetchDistricts() {
      const response = await fetch(`http://localhost:3001/districts`);
      const data = await response.json();
      setDistricts(data);
      console.log(data);
    }
    fetchDistricts();
  }, []);
  const handleClose = () => {
    setsetAnchorEl(null);
  };
  const handleClick = (event) => {
    setsetAnchorEl(event.currentTarget);
  };
  function onClickItem(event) {
    console.log(event);
  }
  function onClickThumb(event) {
    console.log(event);
  }
  function onChange(event) {
    console.log(event);
  }
  function handleMouseEvent(event) {
    console.log("image event is clicked");
    console.log(event.target.src);
  }
  const handleBarClick = (event) => {
    setOpenBar(event.currentTarget);
  };
  const handleBarClose = () => {
    setOpenBar(false);
  };
  return (
    <div className="container">
      <Grid container columnSpacing={2}>
        <Grid item md={8}>
          <Card>
            <Grid container>
              <Grid item md={5}>
                <Card className={styles.details_image}>
                  <img src="/assets/images/1.jpg" alt="" />
                  <div className={styles.thumbimage__section}>
                    <img
                      onMouseOver={handleMouseEvent}
                      src="/assets/images/1.jpg"
                      alt=""
                    />
                    <img
                      onMouseOver={handleMouseEvent}
                      src="/assets/images/2.jpg"
                      alt=""
                    />
                    <img
                      onMouseOver={handleMouseEvent}
                      src="/assets/images/3.jpg"
                      alt=""
                    />
                    <img
                      onMouseOver={handleMouseEvent}
                      src="/assets/images/4.jpg"
                      alt=""
                    />
                  </div>
                </Card>
              </Grid>
              <Grid item md={7}>
                <div className={styles.book_info}>
                  <Typography variant="h5" className={styles.book_name}>
                    পেন্সিলে আঁকা পরী (হার্ডকভার)
                  </Typography>
                  <p className={styles.writer}>
                    By <a href="#"> হুমায়ূন আহমেদ</a>
                  </p>
                  <p className={styles.category}>
                    Category: <a href="#">সমকালীন উপন্যাস</a>
                  </p>
                  <Stack spacing={1} className={styles.rating}>
                    <Rating name="size-medium" defaultValue={2} />
                  </Stack>
                  <p>
                    <strike className={styles.discount_price}>Tk 200</strike>
                  </p>
                  <p className={styles.price_savings}>
                    {" "}
                    <span className={styles.price}>Tk 176</span>
                    <span className={styles.savings}>
                      You Save TK. 24 (12%)
                    </span>
                  </p>
                  <p>
                    <CheckIcon className={styles.stock_active_icon} />{" "}
                    <span className={styles.stock_active}>In Stock</span>{" "}
                    <span className={styles.stock_msg}>
                      (only 8 copies left)
                    </span>
                  </p>
                  {/* <p>
                    <ClearIcon className={styles.stock_in_active_icon} />{" "}
                    <span className={styles.stock_in_active}>Out Of Stock</span>
                  </p> */}

                  <div className={styles.button_section}>
                    <button
                      className={`${styles.read_button} ${styles.button}`}
                    >
                      একটু পড়ে দেখুন
                    </button>
                    <button
                      className={`${styles.cart_button} ${styles.button}`}
                    >
                      <ShoppingCartSharpIcon fontSize="small" /> Go To Cart
                    </button>
                  </div>
                  <div className={styles.store_section}>
                    <div className={styles.wishDiv}>
                      {/* profile nav  */}
                      <Button
                        className={styles.iconColor}
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <FavoriteBorderIcon /> Add To Book List
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        className={styles.wishlist}
                      >
                        <MenuItem onClick={handleClose}>
                          Create New List
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          Save to My Wish List
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Created List</MenuItem>
                      </Menu>
                      {/* end of profile nav  */}
                    </div>
                    <div className={styles.shareDiv}>
                      <Button
                        className={styles.iconColor}
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openBar ? "true" : undefined}
                        onClick={handleBarClick}
                      >
                        <ShareIcon /> Share this Book
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={openBar}
                        open={openBar}
                        onClose={handleBarClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        className={styles.share_list}
                      >
                        <MenuItem onClick={handleBarClose}>
                          <FacebookIcon />
                        </MenuItem>
                        <MenuItem onClick={handleBarClose}>
                          <InstagramIcon />
                        </MenuItem>
                        <MenuItem onClick={handleBarClose}>
                          <LinkedInIcon />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <PinterestIcon />
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <Typography variant="h6" style={{ padding: "1rem" }}>
              Booking Info
            </Typography>
            <Box className={`${styles.form_group}`}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={styles.selectBox}
                onChange={(event) => event.target.value}
                label="Category"
                autoWidth
                defaultValue={""}
              >
                <MenuItem selected value="">
                  <em>None</em>
                </MenuItem>
                {districts.map((district, index) => (
                  <MenuItem key={index} value={district.bn_name}>
                    {district.bn_name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box className={`${styles.priceContent}`}>
              <div className={styles.single_group}>
                <p>
                  <MoneyIcon />
                </p>
                <p>Cash On Delivery</p>
              </div>
              <div className={styles.single_group}>
                <p>
                  <TimerOffIcon />
                </p>
                <p>7 Days Happy Return</p>
              </div>
              <div className={styles.single_group}>
                <p>
                  <LocalShippingIcon />
                </p>
                <p>
                  Delivery Charge <br /> 50(Online Order)
                </p>
              </div>
              <div className={styles.single_group}>
                <p>
                  <LocalLibraryIcon />
                </p>
                <p>Purchase & Earn</p>
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <HomeBook books={BuyBookList} title="Recommended For You" load={true} />
    </div>
  );
}

export default BookDetails;
