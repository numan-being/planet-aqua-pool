import React from 'react'
import logo from "../../assets/logo.png";
import video from "../../assets/firstvideo.mp4";
import videobannner from "../../assets/bannernow1.png";

import "../../App.css";

const Header = () => {
  return (
    <header>
<div
      className="relative "
      style={{
        height: "100vh",
        borderBottomRightRadius: "7%",
        borderBottomLeftRadius: "7%",
        overflow: "hidden",
      }}
    >
      <div
        className="flex justify-between absolute z-10 w-full  "
        style={{ width: "100%" }}
      >
        <div
          className="pl-6 pt-2  md:p-8 md:px-20 flex items-center"
          style={{ width: "100%" }}
        >
          <img alt="Logo" src={logo} className="h-14 w-14" />
          <p
            className="text-3xl p-3"
            style={{
              fontFamily: "poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}
          >
            Planet Aqua Pool
            <span className="text-blue-200 text-xl ">
              <p >Unit of Planet Fitness</p>
            </span>
          </p>
        </div>
      </div>

      <div className="absolute top-0 " style={{ height: "100%" }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full "
          style={{
            objectFit: "cover",
            width: "100vw",
            opacity: 1,
            filter: "brightness(0.8)",
            borderBottomRightRadius: "7%",
            borderBottomLeftRadius: "7%",
            backgroundImage: `url(${videobannner})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="banner__text__div  top-2/4 transform -translate-y-2/4	 p-8 md:px-20  md:py-24  absolute text-5xl md:text-7xl "
          style={{ fontFamily: "Poppins", fontWeight: 800 }}
        >
          <h1 className="text-white font-black ">DIVE </h1>
          <span className="text-white">INTO </span>
          <h1 style={{ color: "#44b2e5" }}>HAPPINESS.</h1>
          <span
            className="reachout text-2xl p-2 py-4 flex  justify-center items-center mt-4 ease-in duration-300	"
            style={{
              border: " 1px solid #44b2e5 ",
              width: "fit-content",
            }}
          >
              <a href="/#" style={{ fontFamily: "Poppins" }}>
                REACH OUT TO US{" "}
              </a>
            <svg
              viewBox="0 0 38.62 17.59"
              xmlns="http://www.w3.org/2000/svg"
              width="10%"
              height="10%"
              fill="currentcolor"
            >
              <path d="m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z"></path>
            </svg>
          </span>
        </div>
        <svg
          fill="white"
          className="absolute "
          style={{ height: "fit-content", top: "92%" }}
          width="100%"
          height="fit-content"
          viewBox="0 0 1289 186.38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m644.5 45.86c-258.99 0-490.56-17.86-644.5-45.86v186.38h1289v-186.38c-153.94 28-385.51 45.86-644.5 45.86z"></path>
        </svg>
        <svg
          fill="white"
          className=" absolute md:hidden"
          style={{ height: "fit-content", top: "95%" }}
          width="100%"
          height="fit-content"
          viewBox="0 0 1289 186.38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m644.5 45.86c-258.99 0-490.56-17.86-644.5-45.86v186.38h1289v-186.38c-153.94 28-385.51 45.86-644.5 45.86z"></path>
        </svg>
      </div>
    </div>
    </header>
  )
}

export default Header