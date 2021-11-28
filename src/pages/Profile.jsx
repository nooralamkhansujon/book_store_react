import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
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
            <Typography variant="h5" className={styles.nav}>
              <NavLink to="/">My Accounts</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Orders</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Lists</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Wishlist</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Ratings & Reviews</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Rokomari Balance</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Points</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">My Points</NavLink>
            </Typography>
            <Typography variant="h5" className={styles.nav}>
              {" "}
              <NavLink to="/">Load Gift Voucher</NavLink>
            </Typography>
          </Card>
        </Grid>
        <Grid item md={9}>
          <Card className={styles.profile_content_box}>
            <div className={styles.card_header}>
              <Typography variant="h5">Personal Information </Typography>
              <button className={styles.change_info}>change Information</button>
            </div>
            <div className={styles.card_body}>
              <form>
                <div className={styles.form_group}>
                  <label>Name</label>
                  <input type="text" placeholder="profile Name" />
                </div>
                <div className={styles.form_group}>
                  <label>Your Date of Birth</label>
                  <input type="date" />
                </div>
                <div className={styles.form_group}>
                  <label>Gender</label>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className={styles.radio_group}
                    row
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </div>
              </form>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
