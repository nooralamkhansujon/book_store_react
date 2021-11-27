import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import styles from "../styles/Cart.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";

import { CartCartSummery, CartSingleCart } from "../components";
const label = { inputProps: { "aria-label": "All" } };
function Cart() {
  function checkedAll(event) {}
  return (
    <div className="container">
      <Grid container columnSpacing={4}>
        <Grid item md={8}>
          <Card>
            <Box
              className={`${styles.CartTopHeader}`}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className={`${styles.rememberMe}`}>
                <Checkbox
                  {...label}
                  onClick={checkedAll}
                  sx={{
                    color: "#ec619f",
                    "&.Mui-checked": {
                      color: "#ec619f",
                    },
                  }}
                />
                <label>All</label>
              </div>
              <div className={`${styles.total}`}>
                <h3>Total: 237 Tk.</h3>
                <p className={styles.savingText}>
                  You are saving total TK. 138
                </p>
              </div>
            </Box>
          </Card>

          {/* cart items box */}
          <Card style={{ marginTop: "1rem" }}>
            {/* single cart  */}
            <CartSingleCart />
            {/* end of single cart  */}
            {/* single cart  */}
            <CartSingleCart />
            {/* end of single cart  */}
            {/* single cart  */}
            <CartSingleCart />
            {/* end of single cart  */}

            <div className={styles.card_footer}>
              <p>একসাথে যত খুশি পণ্য অর্ডার করুন, শিপিং চার্জ মাত্র 50 টাকা</p>
              <div className={styles.button_group}>
                <button className={styles.button}>Order as Gift</button>
                <button className={styles.button}>Go To Shipping Page</button>
              </div>
            </div>
          </Card>
          {/* end of cart items box  */}
        </Grid>
        <Grid item md={4}>
          <CartCartSummery />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
