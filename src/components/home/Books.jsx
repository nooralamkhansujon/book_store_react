import React from "react";
import Book from "./Book.jsx";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Home.module.css";
function Books({
  title,
  books,
  load,
  borrowBook = false,
  giveWayBooks = false,
}) {
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
      {/* <Container> */}
      <Typography className="global_title" variant="h4">
        {title}
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={1}>
        {books.map((book, index) => (
          <Grid item md={3} key={index}>
            <Book
              book={book}
              borrowBook={borrowBook}
              giveWayBooks={giveWayBooks}
            />
          </Grid>
        ))}
      </Grid>
      <div className="load_button_container">
        {load ? (
          <button className="load_more">Load More</button>
        ) : (
          <NavLink to="/" className="load_more_link">
            See More
          </NavLink>
        )}
      </div>
      {/* </Container> */}
    </div>
  );
}

export default Books;
