import React from 'react'
import './experience.css'

import {MdPool, MdVerifiedUser} from 'react-icons/md'
import {ImWoman} from 'react-icons/im'
import {AiFillExperiment} from 'react-icons/ai'
import {FaShower} from 'react-icons/fa'
import {GiBinoculars, GiVacuumCleaner} from 'react-icons/gi'
import {TbOlympics, TbMoodKid} from 'react-icons/tb'


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
            Designated pool area specifically designed for young children.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <ImWoman/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Women-only Sessions</h3>
            <p>
            A exclusive women only session to enjoy swimming.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <MdVerifiedUser/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Certified Trainer's</h3>
            <p>
            Experienced professionals to provide expert guidance.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <TbOlympics/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Semi-Olympic Pool</h3>
            <p>
            Semi-Olympic pool for competitive swimming training.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <GiBinoculars/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Spectator Gallery</h3>
            <p>
            Platform around the pool designed for spectators to watch.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <GiVacuumCleaner/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Safe & Hygienic Facilities</h3>
            <p>
            Ensuring cleanliness through proper maintenance & protocols.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
            <div class="icon-wrapper">
              <FaShower/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Hygienic Shower & Changing Areas</h3>
            <p>
            Clean and sanitized spaces for changing clothes & Showers.
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
            Advanced System to remove impurities and bacteria.
            </p>
          </div>
        </div>
        <div class="column">
        <div class="card rounded-3xl">
        <div class="icon-wrapper">
            <TbMoodKid/>
            </div>
            <h3 className='text-xl p-2 text-slate-900 font-semibold'>Classes for children with special needs</h3>
            <p>
            Swimming lessons for children with disabilities or special needs.
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