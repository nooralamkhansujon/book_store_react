import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
// import image1 from "../assets/images/banner/1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeBook } from "../components";

const newBooks = [
  {
    id: 1,
    image: "3.jpg",
    book_title: "Programming in ANSI",
    writer: "E.Balagurusamy",
    disCount: true,
    discountPrice: 250,
    price: 285,
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
    price: 285,
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
    price: 285,
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
    price: 285,
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
function Home() {
  const [newBooksList, setNewBooksList] = React.useState(newBooks);
  const [BuyBookList, setBuyBookList] = React.useState(BuyBooks);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
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
    <div className="container">
      <Carousel
        showArrows={true}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        onChange={onChange}
        thumbWidth={50}
        showThumbs={false}
        stopOnHover={true}
        autoPlay={true}
      >
        <div>
          <img
            style={{ width: "100%", height: "350px" }}
            src="assets/images/banner/1.jpg"
            alt=""
          />
          <h2
            style={{ background: "#fff", color: "#ec619f" }}
            className="legend"
          >
            50% Off on any books
          </h2>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "350px" }}
            src="assets/images/banner/2.jpg"
            alt=""
          />
          <h2
            style={{ background: "#fff", color: "#ec619f" }}
            className="legend"
          >
            50% Off on any books
          </h2>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "350px" }}
            src="assets/images/banner/3.jpg"
            alt=""
          />
          <h2
            style={{ background: "#fff", color: "#ec619f" }}
            className="legend"
          >
            50% Off on any books
          </h2>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "350px" }}
            src="assets/images/banner/4.jpg"
            alt=""
          />
          <h2
            style={{ background: "#fff", color: "#ec619f" }}
            className="legend"
          >
            50% Off on any books
          </h2>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "350px" }}
            src="assets/images/banner/7.jpg"
            alt=""
          />
          <h2
            style={{ background: "#fff", color: "#ec619f" }}
            className="legend"
          >
            50% Off on any books
          </h2>
        </div>
      </Carousel>
      <HomeBook books={newBooksList} title="New Books" load={false} />
      <HomeBook books={BuyBookList} title="Buy Books" load={true} />
    </div>
  );
}

export default Home;
