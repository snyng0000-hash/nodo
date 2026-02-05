import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import './Prd_slide.css';
function Prd_slide() {
  return (
    <>
      <div className="prd_slide_left">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드5" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="prd_slide_right">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="#" alt="슬라이드5" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Prd_slide;
