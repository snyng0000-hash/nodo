import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';

import './Prd_slide.css';
function Prd_slide() {
  const handleLeftSwiperInit = (swiper) => {
    // Swiper 초기화 후 약간의 지연을 두고 위치 조정
    setTimeout(() => {
      // 슬라이드 너비의 절반만큼 이동 (225px / 2 = 112.5px)
      adjustSwiperPosition(swiper);
    }, 100);
  };

  const adjustSwiperPosition = (swiper) => {
    // 첫 슬라이드가 항상 반만 보이도록 위치 고정
    swiper.setTranslate(-112.5);
    swiper.updateProgress();
  };

  const handleSlideChange = (swiper) => {
    // 루프되어 처음으로 돌아갈 때 위치 재조정
    if (swiper.realIndex === 0) {
      setTimeout(() => {
        adjustSwiperPosition(swiper);
      }, 50);
    }
  };

  const handleRightSwiperInit = (swiper) => {
    // 첫 슬라이드가 완전히 보이도록 초기 오프셋 설정 (0으로 설정)
    setTimeout(() => {
      swiper.setTranslate(0);
      swiper.updateProgress();
    }, 100);
  };

  const handleRightSlideChange = (swiper) => {
    // 루프되어 처음으로 돌아갈 때 위치 재조정
    if (swiper.realIndex === 0) {
      setTimeout(() => {
        swiper.setTranslate(0);
        swiper.updateProgress();
      }, 50);
    }
  };

  return (
    <>
      <div className="prd_slide">
        <h2 className="prd_title">text</h2>
        <div className="prd_slide_left">
          <div className="prd_slide_left_slide">
            <Swiper
              onSwiper={handleLeftSwiperInit}
              onSlideChange={handleSlideChange}
              slidesPerView={5}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 4000 }}
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
            onSwiper={handleRightSwiperInit}
            onSlideChange={handleRightSlideChange}
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
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
      </div>
    </>
  );
}
export default Prd_slide;
