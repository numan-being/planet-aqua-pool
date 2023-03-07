import React from 'react'
import './experience.css'

import {MdPool, MdVerifiedUser, MdFace} from 'react-icons/md'
import {IoWomanSharp} from 'react-icons/io5'
import {AiFillExperiment} from 'react-icons/ai'
import {FaShower} from 'react-icons/fa'


const Experience = () => {
  return (
    <section id='experience'>
     <h1
        className='text-center text-4xl font-bold  md:mt-36 mb-16 xl:mx-4  text-green-300 xl:text-6xl'
        style={{ color: "#4a4a4a", fontWeight: 900 }}>
        <strong>OUR SERVICES</strong>
      </h1>

<div className="container">
        <div className="">
        <div class="row">
        <div class="column">
          <div class="card rounded-3xl">
            <div class="icon-wrapper">
            <MdPool/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Separate Infant Pool</h3>
            <p>
            A shallow and safe pool designed for babies and young children, separate from more active swimmers.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <IoWomanSharp/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Women-only Sessions</h3>
            <p>
            A swimming session exclusively for women, providing a private and secure environment to enjoy swimming.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <MdVerifiedUser/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Qualified Coaches</h3>
            <p>
            Experienced professionals to provide expert guidance to help swimmers of all levels to improve their technique.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <FaShower/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Hygienic changing & Shower Areas</h3>
            <p>
            Clean and sanitized spaces designated for changing clothes and taking showers in a public facility.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <AiFillExperiment/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Advanced Filtration Systems</h3>
            <p>
            An advanced pool filtration system removes impurities and bacteria from swimming pool water, creating a safer and more enjoyable swimming experience.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <MdFace/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Coaching for children with special needs</h3>
            <p>
            A safe and supportive swimming program designed for children with special needs, providing a range of physical, social, and emotional benefits.
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}

export default Experience