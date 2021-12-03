import React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/Cart.module.css";
const label = { inputProps: { "aria-label": "Single" } };

function SingleCart() {
  function checkedCart() {}
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Grid
        columnSpacing={2}
        container
        justifyContent="center"
        alignItems="center"
        className={`${styles.CartTopHeader}`}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item md={1}>
          <div className={`${styles.rememberMe}`}>
            <Checkbox
              {...label}
              onClick={checkedCart}
              sx={{
                color: "rgba(47, 23, 147)",
                "&.Mui-checked": {
                  color: "rgba(47, 23, 147)",
                },
              }}
            />
          </div>
        </Grid>
        <Grid item md={3}>
          <div className={`${styles.cart_content_image}`}>
            <img src="/assets/images/1.jpg" alt="" />
          </div>
        </Grid>
        <Grid item md={4}>
          <div className={`${styles.cart_content}`}>
            <h3>
              রাসূলুল্লাহ (সা)-এর স্বাস্থ্যবিধান ও আধুনিক চিকিৎসাবিজ্ঞান (সকল
              খন্ড একত্রে)
            </h3>
            <p className={styles.savingText}>এ. বি. এম কামাল উদ্দিন শামীম</p>
            <p className={styles.weight}>Weight: 0.48 Kg</p>
            <p>
              <button className={styles.button}>
                <DeleteIcon />
              </button>
            </p>
          </div>
        </Grid>

        <Grid item md={2}>
          <div className={styles.qtyUpdate}>
            <button>-</button>
            <span className={styles.qty}>1</span>
            <button>+</button>
          </div>
        </Grid>
        <Grid md={2}>
          <p className={styles.price}>
            {" "}
            <span>Tk: 285</span>
            {/* <strike className="text">Tk: 285</strike> */}
          </p>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleCart;
