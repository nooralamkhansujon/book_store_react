import React from "react";
import Book from "./Book.jsx";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import styles from "../../styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Books({ title }) {
  function onClickItem(event) {
    console.log(event);
  }
  function onClickThumb(event) {
    console.log(event);
  }
  function onChange(event) {
    console.log(event);
  }
  return (
    <div className={styles.books_segments}>
      <Typography className="global_title" variant="h4">
        {title}
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item md={3}>
          <Book image="1.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="2.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="3.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="4.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="7.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="8.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="10.jpg" />
        </Grid>
        <Grid item md={3}>
          <Book image="11.jpg" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Books;
