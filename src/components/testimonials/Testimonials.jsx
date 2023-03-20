import React from 'react'
import './testimonials.css'
import Vid1 from '../../assets/vid1.mp4'
import Vid2 from '../../assets/vid2.mp4'
import Vid3 from '../../assets/vid3.mp4'
import Vid4 from '../../assets/vid4.mp4'
import Vid5 from '../../assets/vid5.mp4'
import Vid6 from '../../assets/vid6.mp4'
import Vid7 from '../../assets/vid7.mp4'
import Vid8 from '../../assets/vid8.mp4'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    Video: Vid1,
  },
  {
    Video: Vid6,
  },
  {
    Video: Vid3,
  },
  {
    Video: Vid5,
  },
  {
    Video: Vid4,
  },
  {
    Video: Vid2,
  },
  {
    Video: Vid7,
  },
  {
    Video: Vid8,
  },
  
]


const Testimonials = () => {
  return (
    <section id='testimonials' className="mt-32">
      <h1
        className='text-center text-4xl font-bold mb-4  text-green-300 xl:text-6xl'
        style={{ color: "#4a4a4a", fontWeight: 900 }}>
        <strong>FEEDBACK </strong>
      </h1>

      <h5
        className='text-center text-2xl p-4'
        style={{ color: "#4a4a4a" }}>
        <strong>What clients say about us.</strong>
      </h5>

      <div className='m-10 '>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.map(({Video}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial mb-20'>
                <video  controls>
                    <source src={Video} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
      </div>


    </section>
  )
}

export default Testimonials