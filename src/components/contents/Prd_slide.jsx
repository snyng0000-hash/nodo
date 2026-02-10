import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';

import './Prd_slide.css';
function Prd_slide() {
  const handleLeftSwiperInit = (swiper) => {
    // Swiper 초기화 후 약간의 지연을 두고 위치 조정
    setTimeout(() => {
      const slideWidth = swiper.slides[0]?.offsetWidth || 0;
      if (slideWidth > 0) {
        swiper.setTranslate(-slideWidth / 2);
        swiper.updateProgress();
      }
    }, 100);
  };

  return (
    <>
      <div className="prd_slide_left">
        <div className="prd_slide_left_slide">
          <Swiper
            onSwiper={handleLeftSwiperInit}
            slidesPerView={5.5}
            spaceBetween={0}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, A11y]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드6" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_img">
                <img src="#" alt="슬라이드7" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="leftslide_blank"></div>
      </div>
      <div className="prd_slide_right">
        <div className="rightslide_blank"></div>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, A11y]}
          className="mySwiper"
        >
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드1" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드3" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드4" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드5" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_img">
            <div>
              <img src="#" alt="슬라이드6" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Prd_slide;
