import React from "react";
import {
  FormControlLabel,
  Card,
  Typography,
  RadioGroup,
  Radio,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "../../styles/Profile.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
function MyRatingReviews() {
  return (
    <Card className={styles.profile_content_box}>
      <div className={styles.card_header}>
        <div className={styles.cart_header__left}>
          <Typography variant="h5">My Ratings & Reviews</Typography>
        </div>
        {/* <button className={styles.change_info}>change Reviews</button> */}
      </div>
  <div className={styles.card_body}>
        {/* single wishlist item */}
        <Card className={`${styles.card_contain} my-3`}>
            <Grid container rowSpacing={2} columnSpacing={1}>
              <Grid item md={3}>
                <Link to="/">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      className={styles.book_img}
                      image={`/assets/images/1.jpg`}
                    />
                  </Link>
              </Grid>
              <Grid item md={6}>
                 <CardContent>
                    <Typography
                      className={styles.book_title}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      নীল ডায়েরির নোনতা পাতা
                    </Typography>
                    <p className={styles.book_writer}>হাশিম কিয়াম</p>
                     <div className="d-flex justify-content-between " style={{width:"35%"}}>
                      <span>Tk: 220</span>
                       <p><strike >Tk: 170</strike></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{width:"80%"}}> 
                       <p><Rating value={3}/></p>
                       <p><span>3</span> (You rated this book)</p>
                    </div>
                       <p className={styles.myReview}>that was very good</p>
                    <button className="text-info btn">Edit Your Review</button>
                  </CardContent>
              </Grid>
              <Grid item md={3} className="d-flex justify-content-end align-items-center p-5">
              </Grid>
            </Grid>
        </Card>
        {/* end of single wishlist item  */}
      </div>
    </Card>
  );
}

export default MyRatingReviews;
