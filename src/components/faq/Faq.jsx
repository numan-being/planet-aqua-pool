import React from 'react'
import './faq.css'


const Faq = () => {
  return (
    <section id='portfolio' className='mt-20'>

      <div className='faq-sec rounded-3xl'>
      <div class="faq-header">Frequently Asked Questions</div>
        <div class="faq-content">
          <div class="faq-question">
            <input id="q1" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q1" class="panel-title">What should I wear for swimming classes?</label>
            <div class="panel-content">You should wear a comfortable and well-fitting swimsuit that allows you to move freely in the water.</div>
          </div>
          
          <div class="faq-question">
            <input id="q2" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q2" class="panel-title">What swimming supplies should I bring to class?</label>
            <div class="panel-content">You should bring a swimsuit, swim cap, goggles, towel, flip flops/sandals, and a water bottle</div>
          </div>
          
          <div class="faq-question">
            <input id="q3" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q3" class="panel-title">What is the age requirement for the swimming classes?</label>
            <div class="panel-content">Swimming classes are available for a wide range of ages, from toddlers to adults. However, the specific age requirements may vary depending on the level of the class, as more advanced classes may be geared towards older students.
          </div>
          </div>

          <div class="faq-question">
            <input id="q4" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q4" class="panel-title">What are the different levels of swimming classes and how do I know which one to choose?</label>
            <div class="panel-content">Most swimming classes are organized into different levels, which are designed to cater to different skill levels and abilities. These levels may be based on age, ability, or a combination of factors, and can range from beginner to advanced.
          </div>
          </div>

          <div class="faq-question">
            <input id="q6" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q6" class="panel-title">What are the benefits of swimming?</label>
            <div class="panel-content">Swimming is a low-impact exercise that provides a full-body workout and can improve cardiovascular health, muscle strength, and flexibility. It can also be a great stress-reliever and can help to improve mental health and overall well-being.
          </div>
          </div>

          <div class="faq-question">
            <input id="q7" type="checkbox" class="panel"/>
            <div class="plus">+</div>
            <label for="q7" class="panel-title">Can swimming help with weight loss?</label>
            <div class="panel-content">Yes, swimming can be an effective way to aid in weight loss. Swimming burns calories and can help to increase muscle tone and definition. However, it's important to also maintain a healthy diet and lifestyle to achieve optimal results.
          </div>
          </div>


      </div>
      </div>
    </section>
  )
}

export default Faq