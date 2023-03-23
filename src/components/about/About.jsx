import React from "react";
import man from "../../assets/Blue_Man.png";
import {MdOutlineWaterDrop} from "react-icons/md"

const About = () => {
  return (
    <section id="about" className="mt-36 mb-12">
      <div >
        <h1
          className="text-center mt-5 text-4xl font-bold text-green-300 xl:text-6xl"
          style={{ color: "#4a4a4a", fontWeight: 900}}
        >
          <strong>ABOUT US</strong>
        </h1>
      </div>

      <div className="flex md:flex place-content-center lg:mb-72">
      <section class="container">
        <section class="relative md:p-0 transform duration-500 cursor-pointer hover:-translate-y-1 ">
            <div>
            <img class="rounded-full h-[23rem]" src={man} alt=""/>
            </div>
            <div className="lg:absolute inset-0 flex items-center justify-center">
            <div class="bg-white p-2 pt-6 rounded- md:p-12 pb-12 hover:shadow-xl lg:max-w-xl w-full lg:absolute top-20 items-center justify-center">
                <div class="font-bold text-sm">
                    <p>Welcome To</p>
                </div>
                <h3 class="text-3xl font-semibold mt-2">Planet Aqua Pool</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Looking for a clean and safe place to swim in Bangalore? Look no further than our indoor swimming pool! the newest addition to the Planet Fitness family. With clear and sparkling water, modern amenities, and trained Coaches, our pool is the perfect place to relax, exercise, and cool off. 
                </p>
                <div className="flex flex-col md:flex-row ">
                <ul class="list-none mt-6 pr-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      </div>
                      <div >
                        <h4 class=" text-gray-600 font-bold ml-2">
                          Membership Packages
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Pay Per Session</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class=" text-gray-600">Monthly</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class=" text-gray-600">Quarterly</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class=" text-gray-600">Half-Yearly</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class=" text-gray-600">Annual</h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <div>
                <ul class="list-none mt-6">
                <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      </div>
                      <div >
                        <h4 class=" text-gray-600 font-bold ml-2">
                          Our Activities
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Kids Learn to Swim
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Kids Intermediate</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Kids Stroke School</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Kids Competitive</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Kids Pre-Competitive</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Adults Mixed Learn to Swim</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Ladies only Learn to Swim</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                      <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-50 "
                          ><MdOutlineWaterDrop/></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Adults Advance Training</h4>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                </div>
                </div>
            </div>
        </section>
    </section>
      </div>
    </section>
  );
};

export default About;
