import React from "react";
import logo from "../../assets/logo.png";
import video from "../../assets/firstvideo.mp4";
import { useRef as UseRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Form = () => {
  const form = UseRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cu5y2va",
      "template_gt7pxy9",
      form.current,
      "gsLldhZuL_9mswikp"
    );

    e.target.reset();
  };

  return (
    <div className="relative  pb-36">

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


      <div className="absolute top-0 " style={{ zIndex: -1 }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full "
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "150vh",
            opacity: 1,
            filter: "brightness(0.4)",
          }}
        />
      </div>
      <div
        className="p-2 py-6 absolute  w-full  top-2/4  "
        id="new"
        style={{ zIndex: 100 }}
      >
        <div
          className="flex flex-col lg:flex-row justify-between m-auto  items-center"
          style={{ width: "90vw" }}
        >
          <p
            style={{ fontWeight: 800, color: "#44b2e5  " }}
            className="text-5xl md:text-5xl  mt-10 mb-8 xl:text-6xl "
          >
            <span className="text-2xl text-white"> BOOK A </span>
            <br />
            SESSION
          </p>
          <div className=" flex flex-col items-start md:items-end ">
            <span className="sm:text-lg mb-4 md:text-3xl font-semibold text-white hover:text-white flex">
              "A day at the pool is a day well spent."
            </span>
          </div>
        </div>
        <div
          className=" w-full border-2 border-blue-100 m-auto shadow-lg px-4 py-10 bg-white md:mt-16"
          style={{ width: "90vw" }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <p
              className=" text-xl md:text-2xl m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	"
              style={{ color: "#4a4a4a" }}
            >
              Your Name
            </p>
            <input
              required
              type="text"
              name="name"
              placeholder="Your Fullname"
              className="border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-base md:text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2"
              style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
            />
            <p
              className="md:text-xl text-lg  md:textm-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	"
              style={{ color: "#4a4a4a" }}
            >
              Your Email
            </p>
            <input
              required
              type="email"
              name="email"
              placeholder="youremail@email.com"
              className="border-2 hover:border-blue-300  text-blue-500 hover:shadow-xl  text-base md:text-xl    ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2"
              style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
            />
            <p
              className="md:text-xl text-lg  md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	"
              style={{ color: "#4a4a4a" }}
            >
              Phone Number
            </p>
            <input
              required
              type="number"
              name="phone"
              placeholder="9876543210"
              className="border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-base md:text-xl    ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2"
              style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
            />
            <p
              className="md:text-xl text-lg md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	"
              style={{ color: "#4a4a4a" }}
            >
              What do you need help with?
            </p>
            <textarea
              required
              type="text"
              name="message"
              placeholder="Your Message"
              className="border-2 hover:border-blue-300 hover:shadow-xl text-blue-500  text-base md:text-xl   ease-in duration-300 w-5/6 p-4 h-40 flex m-auto md:mb-2"
              style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
            />

            <button
              type="submit"
              className="ml-8 mt-2 btn btn-primary text-white font-bold rounded-full p-4 w-48"
            >
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
