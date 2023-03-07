import React from "react";
import man from "../../assets/Blue_Man.png";
import {MdOutlineWaterDrop} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
      <div >
        <h1
          className="text-center text-4xl font-bold text-green-300 xl:text-6xl"
          style={{ color: "#4a4a4a", fontWeight: 900}}
        >
          <strong>ABOUT US</strong>
        </h1>
      </div>

      <div className="flex md:flex mb-32 place-content-center">
      <section class="container">
        <section class="relative md:p-0 transform duration-500 cursor-pointer hover:-translate-y-1 ">
            <div>
            <img class="rounded-full h-[23rem] xl:max-w-6xl" src={man} alt=""/>
            </div>
            <div class="content bg-white p-2 pt-6 rounded- md:p-12 pb-12 hover:shadow-xl lg:max-w-lg w-full lg:absolute top-20 right-56">
                <div class="font-bold text-sm">
                    <p>Welcome To</p>
                </div>
                <h3 class="text-3xl font-semibold mt-2">Planet Aqua Pool</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Looking for a clean and safe place to swim in Bangalore? Look no further than our indoor swimming pool! With clear and sparkling water, modern amenities, and trained Coaches, our pool is the perfect place to relax, exercise, and cool off. 
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 mr-3"
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Pay Per Session
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 mr-3"
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Monthly Membership</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 mr-3"
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Quarterly Membership</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 mr-3"
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Half-Yearly Membership</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 mr-3"
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Annual Membership</h4>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
        </section>
    </section>
      </div>
    </section>
  );
};

export default About;
