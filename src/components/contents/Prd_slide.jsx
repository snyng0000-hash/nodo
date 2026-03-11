import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';

import './Prd_slide.css';
function Prd_slide() {
  // 슬라이드 데이터 (이미지 경로에 맞춰 숫자 조절)
  const topSlides = [1, 2, 3, 4, 5, 6, 7];
  const bottomSlides = [8, 9, 10, 11, 12, 13, 14];
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const popupData = {
    notice: {
      title: 'Notice',
      content: ['공지사항 내용입니다.', '새로운 소식을 확인하세요!'],
    },
    qna: {
      title: 'Q&A / FAQ',
      content: ['자주 묻는 질문들에', '대해 답변 드립니다.'],
    },
    store: {
      title: 'Store',
      content: ['전국 매장 안내 및', '영업시간 정보입니다.'],
    },
    contact: {
      title: 'Contact',
      content: ['문의사항을 남겨주시면', '빠르게 답변해 드립니다.'],
    },
  };

  return (
    <div className="prd_slide_container">
      {/* 위쪽 슬라이드: 왼쪽(슬라이드) + 오른쪽(텍스트) */}
      <div className="prd_row top_row">
        <div className="slide_area">
          <Swiper
            slidesPerView={5}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
              1280: { slidesPerView: 4, spaceBetween: 10 },
              1440: { slidesPerView: 5, spaceBetween: 10 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, A11y]}
          >
            {topSlides.map((num) => (
              <SwiperSlide key={`top-${num}`}>
                <div className="slide_img_box">
                  <img
                    src={`./imgs/main_slide${num}.png`}
                    alt={`상단슬라이드${num}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text_area">
          <h2>New Arrival</h2>
          <p>Minimal lines shaped into quiet architectural jewelry.</p>
        </div>
      </div>

      {/* 아래쪽 슬라이드: 왼쪽(텍스트) + 오른쪽(슬라이드) */}
      <div className="prd_row bottom_row">
        <div className="text_area">
          <h2>Custom Center</h2>
          <ul>
            <li>
              <button
                className="open_btn"
                onClick={() => setActivePopup('notice')}
              >
                공지사항
              </button>
            </li>

            <li>
              <button
                className="open_btn"
                onClick={() => setActivePopup('qna')}
              >
                QNA / FAQ
              </button>
            </li>
            <li>
              <button
                className="open_btn"
                onClick={() => setActivePopup('store')}
              >
                매장
              </button>
            </li>
            <li>
              <button
                className="open_btn"
                onClick={() => setActivePopup('contact')}
              >
                문의하기
              </button>
            </li>
          </ul>
        </div>
        <div className="slide_area">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
              1280: { slidesPerView: 4, spaceBetween: 10 },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            modules={[Autoplay, A11y]}
          >
            {bottomSlides.map((num) => (
              <SwiperSlide key={`bottom-${num}`}>
                <div className="slide_img_box">
                  <img
                    src={`./imgs/main_slide${num}.png`}
                    alt={`하단슬라이드${num}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {activePopup && (
        <div className="popup_overlay" onClick={() => setActivePopup(null)}>
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <div className="popup_header">
              {/* 4. 데이터 객체에서 현재 상태에 맞는 내용을 꺼내서 보여줌 */}
              <h2>{popupData[activePopup].title}</h2>
            </div>
            <div className="popup_body">
              {popupData[activePopup].content.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <button
                className="close_btn"
                onClick={() => setActivePopup(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prd_slide;
