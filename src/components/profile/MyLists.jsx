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
import styles from "../../styles/Profile.module.css";

function MyLists() {
  return (
    <Card className={styles.profile_content_box}>
      <div className={styles.card_header}>
        <div className={styles.cart_header__left}>
          <Typography variant="h5">My Lists</Typography>
          <p>
            Your Total List: <span className={styles.total_orders}>1</span>
          </p>
        </div>
        <button className={styles.change_info}>Create New List</button>
      </div>
      <div className={styles.card_body}>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item md={3}>
            <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  className={styles.book_img}
                  image={`/assets/images/1.jpg`}
                />
              </Link>

              <CardContent>
                <Typography
                  className={styles.book_title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  programming book
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  className={styles.book_img}
                  image={`/assets/images/1.jpg`}
                />
              </Link>

              <CardContent>
                <Typography
                  className={styles.book_title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  programming book
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  className={styles.book_img}
                  image={`/assets/images/1.jpg`}
                />
              </Link>

              <CardContent>
                <Typography
                  className={styles.book_title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  programming book
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  className={styles.book_img}
                  image={`/assets/images/1.jpg`}
                />
              </Link>

              <CardContent>
                <Typography
                  className={styles.book_title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  programming book
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={styles.card_contain} sx={{ maxWidth: 250 }}>
              <Link to="/">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  className={styles.book_img}
                  image={`/assets/images/1.jpg`}
                />
              </Link>

              <CardContent>
                <Typography
                  className={styles.book_title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  programming book
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

export default MyLists;
