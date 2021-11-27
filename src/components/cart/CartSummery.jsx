import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../styles/Cart.module.css";
function CartSummery() {
  return (
    <Card>
      <Typography variant="h6" style={{ padding: "1rem" }}>
        Checkout Summery
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
          <MenuItem value="bangladesh">Bangladesh</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="india">India</MenuItem>
        </Select>
      </Box>
      <Box className={`${styles.priceContent}`}>
        <div className={styles.single_group}>
          <p>Subtotal</p>
          <p>162 Tk</p>
        </div>
        <div className={styles.single_group}>
          <p>Shipping</p>
          <p>60 Tk</p>
        </div>
        <div className={styles.single_group}>
          <p>Total</p>
          <p>222 Tk</p>
        </div>
        <div className={`${styles.single_group} ${styles.payable_total}`}>
          <p>Payable Total</p>
          <p>222 Tk</p>
        </div>
      </Box>
    </Card>
  );
}

export default CartSummery;
