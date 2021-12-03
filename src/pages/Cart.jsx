import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import { CartCartSummery, CartSingleCart } from "../components";
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
        <Grid item md={8}>
          <Card>
            <Box
              className={`${styles.CartTopHeader}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={`${styles.rememberMe}`}>
                <Checkbox
                  {...label}
                  onClick={checkedAll}
                  sx={{
                    color: "rgba(47, 23, 147)",
                    "&.Mui-checked": {
                      color: "rgba(47, 23, 147)",
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
                <NavLink to="/OrderAsGift" className={styles.order_as_gift}>
                  Order as Gift
                </NavLink>
                <NavLink
                  to="/ShippingPage"
                  className={styles.shipping_page_link}
                >
                  Go To Shipping Page{" "}
                </NavLink>
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
