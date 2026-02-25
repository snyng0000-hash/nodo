import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Cont1_slide.css';

function Cont1_slide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <h2>collection</h2>
      <div className="cont1_slidetrack">
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: '.cont1_slide_rbtn',
            prevEl: '.cont1_slide_lbtn',
          }}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide className="cont1_slide_mainslide">
            <a href="#" className="cont1_slide_imgbox">
              <img src="/imgs/cont1_slide1.png" alt="슬라이드1" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_mainslide">
            <a href="#" className="cont1_slide_imgbox">
              <img src="/imgs/cont1_slide2.png" alt="슬라이드2" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_mainslide">
            <a href="#" className="cont1_slide_imgbox">
              <img src="/imgs/cont1_slide3.png" alt="슬라이드3" />
            </a>
          </SwiperSlide>
          <div className="cont1_slide_lbtn">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          navigation={{
            nextEl: '.cont1_slide_rbtn',
            prevEl: '.cont1_slide_lbtn',
          }}
          loop={true}
          slidesPerView={1}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide className="cont1_slide_subslide">
            <div className="cont1_slide_wrap">
              <img src="/imgs/cont1_slide2.png" alt="썸네일2" />
              <ul className="cont1_slide_list">
                <li>
                  <a href="#">- 스토리</a>
                </li>
                <li>
                  <a href="#">- 후기</a>
                </li>
                <li>
                  <a href="#">- 아카이브</a>
                </li>
                <li>
                  <a href="#">- 이벤트</a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_subslide">
            <div className="cont1_slide_wrap">
              <img src="/imgs/cont1_slide3.png" alt="썸네일3" />
              <ul className="cont1_slide_list">
                <li>
                  <a href="#">- 제작 스토리</a>
                </li>
                <li>
                  <a href="#">- 클래스 후기</a>
                </li>
                <li>
                  <a href="#">- 이벤트 아카이브</a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_subslide">
            <div className="cont1_slide_wrap">
              <img src="/imgs/cont1_slide1.png" alt="썸네일1" />
              <ul className="cont1_slide_list">
                <li>
                  <a href="#">- 제작 스토리</a>
                </li>
                <li>
                  <a href="#">- 클래스 후기</a>
                </li>
                <li>
                  <a href="#">- 이벤트 아카이브</a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <div className="cont1_slide_rbtn">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Cont1_slide;
