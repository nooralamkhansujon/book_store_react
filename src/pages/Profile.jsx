import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { NavLink, Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../styles/Profile.module.css";
import { CartSingleCart } from "../components";
const label = { inputProps: { "aria-label": "All" } };
function Cart() {
  const [activeNav, setActiveNav] = React.useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  function checkedAll(event) {}
  return (
    <div className="container">
      <Grid container columnSpacing={4}>
        <Grid item md={3}>
          {/* profile image and name  */}
          <Card className={styles.profile_box}>
            <AccountCircleIcon
              className={styles.profile_sm_image}
              size="large"
            />
            <Typography className={styles.profile_user} variant="h6">
              <span className={styles.hello}>Hello ,</span>
              <br />
              Fahim khan
            </Typography>
          </Card>
          {/*end of  profile image and name  */}
          <Card className={styles.profile_nav}>
            <Typography
              variant="h5"
              className={`${styles.nav} ${
                activeNav == "account" ? styles.activeNav : ""
              }`}
            >
              <NavLink
                to="account"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("account") : ``
                }
              >
                My Accounts
              </NavLink>
            </Typography>
            <Typography
              variant="h5"
              className={`${styles.nav} ${
                activeNav == "orders" ? styles.activeNav : ""
              }`}
            >
              {" "}
              <NavLink
                to="orders"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("orders") : ``
                }
              >
                My Orders
              </NavLink>
            </Typography>
            <Typography
              variant="h5"
              className={`${styles.nav} ${
                activeNav == "myList" ? styles.activeNav : ""
              }`}
            >
              {" "}
              <NavLink
                to="myList"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("myList") : ``
                }
              >
                My Lists
              </NavLink>
            </Typography>
            <Typography
              variant="h5"
              className={`${styles.nav} ${
                activeNav == "wishlist" ? styles.activeNav : ""
              }`}
            >
              {" "}
              <NavLink
                to="wishlist"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("wishlist") : ``
                }
              >
                My Wishlist
              </NavLink>
            </Typography>
            <Typography
              variant="h5"
              className={`${styles.nav} ${
                activeNav == "MyRatingAndReviews" ? styles.activeNav : ""
              }`}
            >
              {" "}
              <NavLink
                to="MyRatingAndReviews"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("MyRatingAndReviews") : ``
                }
              >
                My Ratings & Reviews
              </NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink
                to="myRokomariBalance"
                className={(navInfo) =>
                  navInfo.isActive ? setActiveNav("myRokomariBalance") : ``
                }
              >
                My Rokomari Balance
              </NavLink>
            </Typography>
            {/* <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Points</NavLink>
            </Typography> */}
            {/* <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">Load Gift Voucher</NavLink>
            </Typography> */}
          </Card>
        </Grid>
        <Grid item md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
