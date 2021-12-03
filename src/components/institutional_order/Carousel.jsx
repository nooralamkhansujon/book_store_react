import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

export const CarouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  //   useEffect(() => {
  //     setInterval(() => {
  //       if (paused === false) {
  //         let newSlide =
  //           currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
  //         setCurrentSlide(newSlide);
  //       }
  //     }, 3000);
  //   }, [currentSlide, paused]);

  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="mt-5 h-72 flex overflow-hidden relative">
      <AiOutlineLeft
        onClick={prevSlide}
        className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
      />
      <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
        {CarouselData.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="This is a carousel slide"
              key={index}
              className={
                index === currentSlide
                  ? "block w-full h-auto object-cover"
                  : "hidden"
              }
              onMouseEnter={() => {
                setPaused(true);
              }}
              onMouseLeave={() => {
                console.log("thisi is ");
                setPaused(false);
              }}
            />
          );
        })}
      </Swipe>
      <div className="absolute w-full flex justify-center bottom-0">
        {CarouselData.map((element, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            ></div>
          );
        })}
      </div>
      <AiOutlineRight
        onClick={nextSlide}
        className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
      />
    </div>
  );
}

export default Carousel;
