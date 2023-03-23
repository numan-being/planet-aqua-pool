import React from "react";
import map from "../../assets/location.png";
import {FaMapMarkerAlt} from 'react-icons/fa'
import poster from '../../assets/poster.jpg'

const Map = () => {
  return (
    <div class="text-gray-600 body-font mt-36">
      <h1
        className="text-center text-4xl font-bold mt-8 text-green-300 xl:text-6xl"
        style={{ color: "#4a4a4a", fontWeight: 900 }}
      >

<h3 class="text-3xl font-semibold mt-2 mb-4">Our Premium Fitness Locations</h3>
      </h1>
      <p class="text-center container text-xl leading-relaxed text-gray-600">Planet Fitness branches are located in convenient areas across Bangalore.</p>
      
      <div class="container  px-5 py-10 mx-auto flex flex-wrap">
        <div class="place-content-center flex flex-wrap w-full">
        <img
            class="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mb-12"
            src={map}
            alt="step"
          />
          <div class="lg:w-2/5 md:w-1/2 md:pl-10 md:py-6">
            <div class="flex relative pb-12">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
              <FaMapMarkerAlt/>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  BTM Layout 1st Stage
                </h2>
                <a class="flex leading-relaxed text-indigo-500" href="https://goo.gl/maps/gN9QHBtj7ySwCT9p9">
                  Get Directions.
                </a>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
              <FaMapMarkerAlt/>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                BTM Layout 2nd Stage
                </h2>
                <a class="flex leading-relaxed text-indigo-500" href="https://goo.gl/maps/TywafGxqQp7CFZnD6">
                  Get Directions.
                </a>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
              <FaMapMarkerAlt/>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Kasavanahalli
                </h2>
                <a class="flex leading-relaxed text-indigo-500" href="https://goo.gl/maps/Gm3G4CVrQ8Venrw17">
                  Get Directions
                </a>
              </div>
            </div>
            <div class="flex relative pb-12">

              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
              <FaMapMarkerAlt/>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  HSR Layout
                </h2>
                <a class="flex leading-relaxed text-indigo-500" href="https://goo.gl/maps/HjFSzAK94XwkXnhJA">
                  Get Directions
                </a>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                <FaMapMarkerAlt/>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  Arekere
                </h2>
                <a class="flex leading-relaxed text-indigo-500" href="https://goo.gl/maps/51g2xTTCHuBmC8PT7">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
            <img src={poster} alt="" />
          </div>
    </div>

  );
};

export default Map;
