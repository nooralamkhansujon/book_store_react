import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Home.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Book({ image }) {
  return (
    <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
      <a href="#">
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          className={styles.book_img}
          image={`/assets/images/${image}`}
        />
      </a>

      <CardContent>
        <a href="#">
          <Typography
            className={styles.book_title}
            gutterBottom
            variant="h5"
            component="div"
          >
            Javascript For Begineers
          </Typography>
        </a>
        <div className={styles.book_price_content}>
          <p className={styles.price}>
            {" "}
            <span>Tk: 285</span>
            <strike className="text">Tk: 285</strike>
          </p>
          {/* <span className={styles.stock_status_active}>in Stock</span> */}
          <p className={styles.stock_status_in_active}>out of Stock</p>
        </div>
      </CardContent>
      <CardActions className={styles.cartButtons}>
        <Button size="small">Add To Cart</Button>
        <Button size="small">
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Book;
