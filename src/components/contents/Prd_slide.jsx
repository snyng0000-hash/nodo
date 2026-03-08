import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';

import './Prd_slide.css';
function Prd_slide() {
 // 슬라이드 데이터 (이미지 경로에 맞춰 숫자 조절)
  const topSlides = [1, 2, 3, 4, 5, 6, 7];
  const bottomSlides = [6, 7, 8, 9, 10, 11];

  return (
    <div className="prd_slide_container">
      {/* 위쪽 슬라이드: 왼쪽(슬라이드) + 오른쪽(텍스트) */}
      <div className="prd_row top_row">
        <div className="slide_area">
          <Swiper
            slidesPerView={5} 
            
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, A11y]}
          >
            {topSlides.map((num) => (
              <SwiperSlide key={`top-${num}`}>
                <div className="slide_img_box">
                  <img src={`./imgs/main_slide${num}.png`} alt={`상단슬라이드${num}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text_area">
          <h2>Premium Selection</h2>
          <p>공간을 채우는 감각적인 아이템들을 확인해보세요.</p>
        </div>
      </div>

      {/* 아래쪽 슬라이드: 왼쪽(텍스트) + 오른쪽(슬라이드) */}
      <div className="prd_row bottom_row">
        <div className="text_area">
          <h2>New Arrivals</h2>
          <p>새롭게 입고된 미니멀한 시리즈입니다.</p>
        </div>
        <div className="slide_area">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, reverseDirection: true}}
            modules={[Autoplay, A11y]}
          >
            {bottomSlides.map((num) => (
              <SwiperSlide key={`bottom-${num}`}>
                <div className="slide_img_box">
                  <img src={`./imgs/main_slide${num}.png`} alt={`하단슬라이드${num}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

 
export default Prd_slide;
