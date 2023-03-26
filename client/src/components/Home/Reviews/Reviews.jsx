import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

import CustomerImg1 from "../../../assets/customer/professional.png";
import CustomerImg2 from "../../../assets/customer/winter.png";
import CustomerImg3 from "../../../assets/customer/gamer.png";
import CustomerImg4 from "../../../assets/customer/woman.png";
import CustomerImg5 from "../../../assets/customer/lady.png";
import CustomerImg6 from "../../../assets/customer/therapist.png";
import CustomerImg7 from "../../../assets/customer/archaeologist.png";
import CustomerImg8 from "../../../assets/customer/girl.png";

export default function Reviews() {
  return (
      <>
          <section class="section customer-review">
              <div class="cust-container">
                  <h6 class="customer-heading">Customer Reviews</h6>
              </div>
          </section>
          
        <Swiper
              freeMode={true}
              slidesPerView={0}
              spaceBetween={30}
              breakpoints={{
                  0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  }
        }}
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,Autoplay,Pagination]}
        className="mySwiper cust-container"
      >
        <SwiperSlide>
                  <div className="slide">
                      <div className="cust-msg">
                          <p>I was so excited to see what this dressed looked like on, it is just beautiful, a perfect fit and it's like made for me!!</p>
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg1} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Swati Sharma</p>
                              <p>User</p>
                          </div>
                      </div>
            </div>
       </SwiperSlide>
              
        <SwiperSlide>
                  <div className="slide">
                      <div className="cust-msg">
                        <p>This is my very first order through site, and I am totally and completely satisfied! The look is great and so are the prices. I will definitely visit again and again...</p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg2} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Ritika Singh</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
              
        <SwiperSlide>
                  <div className="slide">
                      <div className="cust-msg">
                          <p>I completely love this site,
                              They have great options.
                              I am always complemented on my photos. I will be back for more..Thank you.</p>
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg3} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Vijaya Krishnan</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
              
        <SwiperSlide>
                  <div className="slide">
                  <div className="cust-msg">
                        <p>I love the clothes from this website!! I am so glad I found them..Everything has been spot on, styles are trendy and lots to choose from!! Thanks for being here for us!!!</p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg4} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Pallavi Murthy</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
              
        <SwiperSlide>
                  <div className="slide">
                  <div className="cust-msg">
                          <p>Great website and amazing designs!! Found this through instagram..Nice clothing/well made/great prices.</p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg5} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Avantika Das</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
              
        <SwiperSlide>
                  <div className="slide">
                  <div className="cust-msg">
                        <p>I can't even express how excited I was when your look arrived. Such well made, adorable clothing, the editing is amazing. I'm ordering again right now. </p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg6} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Jayati Sinha</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
              
        
              
        <SwiperSlide>
            <div className="slide"><div className="cust-msg">
                        <p>I love these clothes!! I love the look!!! I was quite skeptical at the start but now it's converted into satisfied.</p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg7} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Kratika Kohli </p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
        <SwiperSlide>
            <div className="slide"><div className="cust-msg">
                      <p>Thank you for offering these beautifully unique dresses.I really loved the styles that you offer.
                          Every pic I received I just love so much. I'll be back again and again!</p>  
                      </div>
                      <div className="cust-data grid grid-two-col">
                          <figure>
                              <img src={CustomerImg8} />
                          </figure>
                          <div className="cust-data-details">
                              <p>Hansika Patil</p>
                              <p>User</p>
                          </div>
                      </div>
                  </div> </SwiperSlide>
      </Swiper>
    </>
  );
}
