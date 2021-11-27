import React from "react";
import { Carousel } from "react-responsive-carousel";
// import image1 from "../assets/images/banner/1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeBook } from "../components";
function Home() {
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
            style={{ width: "100%", height: "300px" }}
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
            style={{ width: "100%", height: "300px" }}
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
            style={{ width: "100%", height: "300px" }}
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
            style={{ width: "100%", height: "300px" }}
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
            style={{ width: "100%", height: "300px" }}
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
      <HomeBook title="New Books" />
      <HomeBook title="Buy Books" />
    </div>
  );
}

export default Home;
