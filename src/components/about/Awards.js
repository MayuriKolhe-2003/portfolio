import React from 'react'
import './about.css'
import {skills_data} from './about_data.js'



// import Swiper core and required modules
import {  Pagination ,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Awards = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Awards and Honors</h2>
          <p>List of all the hackthons I had won</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <Swiper
      // install Swiper modules
      modules={[ Pagination]}
      speed={600}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay ={{delay:5000,disableOnInteraction:false}}
      
    >
      <SwiperSlide>
      <div className="testimonial-item">
                <img src="assets/img/portfolio/inc.jpg" className="testimonial-img" />
                <h3>INC Winner</h3>
                <h4>Device for blind people to recognize objects.</h4>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testimonial-item">
                <img src="assets/img/portfolio/mindspark.jpg" className="testimonial-img" />
                <h3>MindSpark Hackathon Winner</h3>
                <h4>Designed a game for promoting sustanability and renewable resources. </h4>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testimonial-item">
                <img src="assets/img/portfolio/flipkart_1.png" className="testimonial-img" />
                <h3>Flipkart Grid Hackathon</h3>
                <h4>Blockchain Based Loyalty and Rewards Program</h4>
              </div>
      </SwiperSlide>

      
    </Swiper>

        </div>
      </div>
    </section> 
  )
}

export default Awards
