import React from "react";
import {
  FormControlLabel,
  Card,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import styles from "../../styles/Profile.module.css";
function MyRokomariBalance() {
  return (
    <Card className={styles.profile_content_box}>
      <div className={styles.card_header}>
        <div className={styles.cart_header__left}>
          <Typography variant="h5">My Rokomari Balance</Typography>
          <p>
            You can pay using your Rokomari Balance when you buy any product:
          </p>
        </div>
        <button className={styles.change_info}>change Information</button>
      </div>
      <div className={styles.card_body}>
        <Card>0 Balance Now</Card>
      </div>
    </Card>
  );
}

export default MyRokomariBalance;
