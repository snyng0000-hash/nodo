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
              <div className="cont1_slide_list">
                <h5>OPEN FORM</h5>
                <span>
                  NODO의 클래스는 형태를 함께 경험하는 자리입니다. 형태를
                  바라보는 기준을 배우고, 비율과 균형을 직접 경험하는
                  시간입니다. 각자의 해석이 담긴 결과물은 모두 다른 구조를
                  가지지만, 그 안에는 ‘완성’에 대한 공통된 질문이 담겨 있습니다.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_subslide">
            <div className="cont1_slide_wrap">
              <img src="/imgs/cont1_slide3.png" alt="썸네일3" />
              <div className="cont1_slide_list">
                <h5>PROCESS NOTES</h5>
                <span>
                  NODO의 작업은 하나의 형태가 완성되기까지의 선택을 기록하는
                  과정입니다. 선의 두께, 곡선의 각도, 비워진 공간의 비율까지
                  여러 번 조정하며 균형을 찾습니다.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cont1_slide_subslide">
            <div className="cont1_slide_wrap">
              <img src="/imgs/cont1_slide1.png" alt="썸네일1" />
              <div className="cont1_slide_list">
                <h5>IN SPACE</h5>
                <span>
                  NODO의 공간으로 초대합니다. 새로운 컬렉션을 소개하고, 사람들과
                  직접 이야기를 나누는 시간입니다. 형태를 가까이에서 보고
                  착용하며, 각자가 느끼는 균형과 인상을 공유합니다.
                </span>
              </div>
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
