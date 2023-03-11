import React from "react";
import logo from "../../assets/logo.png";
import video from "../../assets/firstvideo.mp4";

const Form = () => {

  return (
    <section id="form">
      <div className="relative  pb-36">
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
              <span className="text-blue-200 text-lg ">
                <p>Unit of Planet Fitness</p>
              </span>
            </p>
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
              height: "90vh",

              opacity: 1,
              filter: "brightness(0.4)",
            }}
          />
        </div>
        <div
        className=' mb-48 p-2 py-6 absolute  w-full  top-2/4  '
        id='new'
        style={{ zIndex: 100 }}>
        <div
          className='flex flex-col lg:flex-row justify-between m-auto  items-center'
          style={{ width: "90vw" }}>
          <p
            style={{ fontWeight: 800, color: "#44b2e5  " }}
            className='text-5xl md:text-5xl  mt-10 mb-8 xl:text-6xl '>
            <span className='text-2xl text-white'> BOOK A </span>
            <br />
            FREE TRAIL ?
          </p>
          <div className='m-2  flex flex-col items-start md:items-end '>
            <span className='sm:text-lg md:text-xl font-medium text-white hover:text-white flex'>
            "A day at the pool is a day well spent."
            </span>
            <a href='https://wa.me/+919876543210'>
              <span
                className='text-lg md:text-xl font-bold text-center  text-white hover:text-blue-400 ease-in duration-150  my-4 flex items-center'
                style={{ fontFamily: "Poppins", fontWeight: 400 }}>
                <svg
                  className='w-6 h-6   md:w-8 md:h-8 mx-2 md:mx-3  '
                  fill='#44b2e5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 49.89 50.11'>
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class='a'
                    d='M42.62,7.28a24.85,24.85,0,0,0-39.1,30L0,50.11l13.17-3.45a24.78,24.78,0,0,0,11.87,3h0A24.84,24.84,0,0,0,42.62,7.28M25.05,45.49h0a20.63,20.63,0,0,1-10.51-2.88l-.75-.44L6,44.21,8.05,36.6l-.49-.78a20.65,20.65,0,1,1,17.49,9.67M36.37,30c-.62-.31-3.67-1.81-4.24-2s-1-.31-1.39.31-1.61,2-2,2.44-.72.46-1.34.15a16.8,16.8,0,0,1-5-3.08A18.51,18.51,0,0,1,19,23.53c-.36-.62,0-1,.27-1.26s.63-.73.94-1.09a4.21,4.21,0,0,0,.62-1,1.13,1.13,0,0,0-.06-1.08c-.15-.31-1.39-3.37-1.91-4.61s-1-1-1.4-1.06-.77,0-1.19,0a2.29,2.29,0,0,0-1.65.78,7,7,0,0,0-2.17,5.18c0,3.05,2.22,6,2.53,6.42s4.38,6.68,10.6,9.36a35.12,35.12,0,0,0,3.54,1.31,8.55,8.55,0,0,0,3.91.25c1.2-.18,3.67-1.5,4.19-2.95a5.11,5.11,0,0,0,.36-2.95c-.15-.26-.56-.42-1.19-.73'></path>
                </svg>{" "}
                Click{" "}
                <p className='font-semibold  mx-2 ' style={{color:"#44b2e5"}}> here </p> to
                WhatsApp us{" "}
              </span>
            </a>
            <a href='mailto:contact@planetaquapool.in'>
              <span
                className=' text-xl font-semibold text-white hover:text-blue-400 ease-in duration-150 text-right flex items-center'
                style={{ fontFamily: "Poppins" }}>
                <svg
                  className='w-6 h-6   md:w-8 md:h-8 mx-2 md:mx-3 '
                  fill='#44b2e5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 56.01 40.01'>
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class='a'
                    d='M54,0H2A2,2,0,0,0,0,2V38a2,2,0,0,0,2,2H54a2,2,0,0,0,2-2V2A2,2,0,0,0,54,0ZM50.73,4,28,21.48,5.28,4ZM52,36H4V8.06L26.79,25.59a2,2,0,0,0,2.44,0L52,8.06Z'></path>
                </svg>
                contact@planetaquapool.com
              </span>
            </a>
          </div>
        </div>
        <div
          className=' w-full border-2 border-blue-100 m-auto shadow-lg px-4 py-10 bg-white md:mt-16'
          style={{ width: "90vw" }}>
          <p
            className=' text-xl md:text-2xl m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Your Name
          </p>
          <input
            required
            type='text'
            placeholder='Name Surname'
            className='border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-base md:text-xl  ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg  md:textm-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Your Email
          </p>
          <input
            required
            type='email'
            placeholder='youremail@gmail.com'
            className='border-2 hover:border-blue-300  text-blue-500 hover:shadow-xl  text-base md:text-xl    ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg  md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Phone Number
          </p>
          <input
            required
            type='number'
            placeholder='9995559992'
            className='border-2 hover:border-blue-300 text-blue-500 hover:shadow-xl text-base md:text-xl    ease-in duration-300 w-5/6 p-4 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
          <p
            className='md:text-xl text-lg md:text m-auto  p-2 md:p-4  md:mx-4 font-bold md:font-extrabold	'
            style={{ color: "#4a4a4a" }}>
            Whats your query?
          </p>
          {/* <input
            required
            value={work}
            onChange={(e) => setWork(e.target.value)}
            type='text'
            placeholder='Details are like good news. The more you share,the better'
            className='border-2 hover:border-blue-300 hover:shadow-xl text-blue-500  text-base md:text-xl   ease-in duration-300 w-5/6 p-4 h-40 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          /> */}
            <textarea
            required
            type='text'
            placeholder='Details are like good news. The more you share,the better'
            className='border-2 hover:border-blue-300 hover:shadow-xl text-blue-500  text-base md:text-xl   ease-in duration-300 w-5/6 p-4 h-40 flex m-auto md:mb-2'
            style={{ outlineWidth: 0, fontFamily: "Poppins", width: "95%" }}
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Form;
