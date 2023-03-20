import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Work1 from "../../assets/Works1.jpeg";
import Work2 from "../../assets/Works2.jpeg";
import Work3 from "../../assets/Works3.jpeg";
import Work4 from "../../assets/Works4.jpeg";

function Brochures() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    centerMode: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,

        settings: { dots: true },
      },
    ],
  };
  return (
    <div
      className="noscrollbar p-2 flex-col justify-around mt-10"
      style={{ overflowY: "hidden" }}
    >
      <>
        <h1
          className="text-center text-4xl font-bold mt-28 xl:text-5xl"
          style={{ color: "#4a4a4a", fontWeight: 800 }}
        >
          BROCHURES
        </h1>
      </>
      <>
        <Slider {...settings} className="noscrollbar mt-16">
          {[Work1, Work2, Work3, Work4].map((works) => {
            return (
              <div
                key={Math.random()}
                className="p-4 flex items-center justify-center "
                style={{ display: "flex !important" }}
              >
                <img
                  src={works}
                  alt="nil"
                  className=" w-100 h-100 rounded-xl p-0 m-auto"
                  style={{ height: "400px", width:"400px" }}
                />
              </div>
            );
          })}
        </Slider>
      </>
    </div>
  );
}

export default Brochures;
