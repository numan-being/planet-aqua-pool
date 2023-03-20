import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <h1
        className="text-center mt-12 p-1 text-4xl font-bold md:mt-36 mb-16 xl:mx-4 text-green-300 xl:text-6xl"
        style={{ color: "#4a4a4a", fontWeight: 900 }}
      >
        <strong>SWIMMING STROKES</strong>
      </h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper p-24"
      >
        <div
          slot="container-start"
          className="parallax-bg blur-sm"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1530138897365-a9615c610099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className="title font-bold text-White"
            data-swiper-parallax="-300"
          >
            Butterfly
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-white text-lg font-normal">
              This stroke involves a simultaneous dolphin kick with both legs
              while bringing both arms out of the water, forward over the head,
              and then pulling them back down through the water, all in one
              fluid motion.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title font-bold text-White"
            data-swiper-parallax="-300"
          >
            Backstroke
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-white text-lg font-normal">
              This stroke involves lying on your back and using alternating arm
              strokes while kicking your legs in a flutter kick motion. The arms
              pull through the water, with one arm pulling back while the other
              arm recovers above the water.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title font-bold text-White"
            data-swiper-parallax="-300"
          >
            Breaststroke
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-white text-lg font-normal">
              This stroke involves kicking your legs in a frog kick motion while
              simultaneously pulling your arms back towards your chest and then
              extending them forward, similar to a frog's swimming motion.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title font-bold text-White"
            data-swiper-parallax="-300"
          >
            Freestyle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-white text-lg font-normal">
              Also known as the front crawl, this stroke involves kicking your
              legs in a flutter kick motion while alternating arm strokes
              through the water, with one arm reaching forward and pulling back
              while the other arm recovers above the water..
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
