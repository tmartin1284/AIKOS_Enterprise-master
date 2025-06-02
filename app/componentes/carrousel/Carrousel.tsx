import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carrouselStyle.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Carrousel() {
  return (
    <div className="mosaic-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="mosaic-item">Slide 1</SwiperSlide>
        <SwiperSlide className="mosaic-item">Slide 2</SwiperSlide>
        <SwiperSlide className="mosaic-item">Slide 3</SwiperSlide>
        <SwiperSlide className="mosaic-item">Slide 4</SwiperSlide>
        <SwiperSlide className="mosaic-item">Slide 5</SwiperSlide>
        <SwiperSlide className="mosaic-item">Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}
