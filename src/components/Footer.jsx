import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  console.log("this is running from footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Grid container>
          <Grid item md={6}>
            <ul className={styles.footer_nav}>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={6}>
            <Typography style={{ color: "white" }}>
              We Accept Via Email
            </Typography>
            <div className={styles.subscribe_box}>
              <input type="text" placeholder="Email" />
              <button className={styles.button}>Send</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
