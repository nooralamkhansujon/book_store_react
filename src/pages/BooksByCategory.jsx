import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeBook } from "../components";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
const BuyBooks = [
  {
    id: 5,
    image: "12.jpg",
    book_title: "Javascript Beginner's Tutorial",
    writer: "QuanTech",
    disCount: true,
    discountPrice: 400,
    price: 550,
    stock: true,
    status: true,
  },
  {
    id: 6,
    image: "7.jpg",
    book_title: "Programming in ANSI",
    writer: "E.Balagurusamy",
    disCount: true,
    discountPrice: 400,
    price: 600,
    stock: true,
    status: true,
  },
  {
    id: 7,
    image: "8.jpg",
    book_title: "Java Program Design",
    writer: "E.Fahim Khan",
    disCount: true,
    discountPrice: 400,
    price: 600,
    stock: true,
    status: true,
  },
  {
    id: 8,
    image: "10.jpg",
    book_title: "Coe Java Simply in Depth",
    writer: "E.Ajit Singh",
    disCount: true,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 9,
    image: "13.jpg",
    book_title: "Javascript For Beginners",
    writer: "JOHN J.Maldonado",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 10,
    image: "14.jpg",
    book_title: "Coffee Break Python",
    writer: "Christian Mayer",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 11,
    image: "15.jpg",
    book_title: "Linux for Beginners",
    writer: "Michael Clark",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
  {
    id: 12,
    image: "17.jpg",
    book_title: "The Pragmatic Programmer",
    writer: "Andrew Hunt",
    disCount: false,
    discountPrice: 300,
    price: 400,
    stock: false,
    status: true,
  },
];
function BooksByCategory() {
  const { category } = useParams();
  const [BuyBookList, setBuyBookList] = React.useState(BuyBooks);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  function handleClick(event) {
    event.preventDefault();
    console.log("this is running ");
  }
  return (
    <div className="container">
      <div role="presentation" className="breadcumb" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" to="/">
            Core
          </Link>
          <Typography color="text.primary">{category}</Typography>
        </Breadcrumbs>
      </div>
      <HomeBook
        books={BuyBookList}
        title={`Books of ${category.toUpperCase()}`}
      />
    </div>
  );
}

export default BooksByCategory;
