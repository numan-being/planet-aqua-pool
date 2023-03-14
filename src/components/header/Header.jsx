import React from "react";
import logo from "../../assets/logo.png";
import video from "../../assets/firstvideo.mp4";
import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header>
      <div
        className="relative "
        style={{
          height: "100vh",
          borderBottomRightRadius: "7%",
          borderBottomLeftRadius: "7%",
        }}
      >

        <div
          className="flex justify-between absolute z-10 w-full  "
          style={{ width: "100%" }}
        >
          <Link to="/">
          <div
            className="backdrop pt-2 pl-4 md:p-8 md:px-20 flex w-96 items-center"
            style={{ width: "100%" }}
          >

            <img alt="Logo" src={logo} className="h-16 w-16" />
            <p
              className="text-[32px] p-3"
              style={{
                fontFamily: "poppins",
                color: "#F1F6F5",
                fontWeight: 700,
              }}
            >
              Planet Aqua Pool
              <span className=" text-gray-200 text-[24px] font-normal">
                <p>Unit of Planet Fitness</p>
              </span>
            </p>

          </div>
          </Link>
          <div className=" p-10 hidden lg:flex">
          <a
              type="button"
              href="https://wa.me/919380663886"
              class="flex bg-[#2ea44f] mr-4 text-white rounded-3xl border-4 px-6 py-3 mb-8 "
            >
              <svg width="35" height="40" viewBox="0 0 24 20">
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  fill="white"
                ></path>{" "}
              </svg>
              <p class="text-xl pt-1">9380663886 </p>
            </a>

            <a
              type="button"
              href="tel:8073030696"
              class="flex bg-[#1f3b60] mr-4 text-white rounded-3xl border-4  px-6 py-3 mb-8"
            >
              <svg width="25" height="34" viewBox="0 0 24 20">
                <path
                  d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  fill="white"
                ></path>{" "}
              </svg>
              <p class="text-xl pt-1 pl-3 ">8073030696 </p>
            </a>
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
              filter: "brightness(0.9)",
              borderBottomRightRadius: "7%",
              borderBottomLeftRadius: "7%",
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
              <a href="/form"
                  onClick={() => setActiveNav("/form")}
                  className={activeNav === "/form" ? "active" : ""} style={{ fontFamily: "Poppins" }}>
                {" "}
                REACH OUT TO US{" "}
              </a>
              <p>&nbsp;&nbsp;&nbsp;</p>
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
  );
};

export default Header;
