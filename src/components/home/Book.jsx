import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Home.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Book({ book }) {
  const { id, image, book_title, disCount, discountPrice, price, stock } = book;
  console.log(book);

  return (
    <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
      <Link to={`/books/details/${id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          className={styles.book_img}
          image={`/assets/images/${image}`}
        />
      </Link>

      <CardContent>
        <Link to={`/books/details/${id}`}>
          <Typography
            className={styles.book_title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {book_title}
          </Typography>
        </Link>
        <div className={styles.book_price_content}>
          <p className={styles.price}>
            {disCount ? (
              <>
                <span>Tk: {discountPrice}</span>
                <strike>Tk: {price}</strike>
              </>
            ) : (
              <span>Tk: {price}</span>
            )}
          </p>
          {stock ? (
            <span className={styles.stock_status_active}>in Stock</span>
          ) : (
            <p className={styles.stock_status_in_active}>out of Stock</p>
          )}
        </div>
      </CardContent>
      <CardActions className={styles.cartButtons}>
        <Button size="small">Add To Cart</Button>
        <Button title="wish list" size="small">
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Book;
