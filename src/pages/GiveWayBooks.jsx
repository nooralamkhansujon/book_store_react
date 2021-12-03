import React, { useEffect } from "react";
import { HomeBook } from "../components";
const newBooks = [
  {
    id: 1,
    image: "3.jpg",
    book_title: "Programming in ANSI",
    writer: "E.Balagurusamy",
    disCount: true,
    discountPrice: 250,
    price: "free",
    stock: true,
    status: true,
  },
  {
    id: 2,
    image: "4.jpg",
    book_title: "Programming PHP",
    writer: "ORELLY",
    disCount: true,
    discountPrice: 250,
    price: "free",
    stock: true,
    status: true,
  },
  {
    id: 3,
    image: "5.jpg",
    book_title: "Programming COLD Fusion mx",
    writer: "Fusion",
    disCount: true,
    discountPrice: 250,
    price: "free",
    stock: true,
    status: true,
  },
  {
    id: 4,
    image: "11.jpg",
    book_title: "Learn with Javascript Visually",
    writer: "E.Balagurusamy",
    disCount: false,
    discountPrice: 250,
    price: "free",
    stock: false,
    status: true,
  },
];
const BuyBooks = [
  {
    id: 5,
    image: "12.jpg",
    book_title: "Javascript Beginner's Tutorial",
    writer: "QuanTech",
    disCount: true,
    discountPrice: 400,
    price: "free",
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
    price: "free",
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
    price: "free",
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
    price: "free",
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
    price: "free",
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
    price: "free",
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
    price: "free",
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
    price: "free",
    stock: false,
    status: true,
  },
];
function GiveWayBooks() {
  const [newBooksList, setNewBooksList] = React.useState(newBooks);
  const [BuyBookList, setBuyBookList] = React.useState(BuyBooks);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return <HomeBook books={newBooksList} title="Give Way Books" load={true} />;
}

export default GiveWayBooks;
