import './Cont2.css';

function Cont2() {
  return (
    <>
      <div className="cont2_fadewrap">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="fade-right"
        >
          <img src="./imgs/cont2_fade1.png" alt="fade1" />'
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="cont2_center_text"
        >
          <p>AXIS</p>
          <span>비대칭 속에서 중심을 찾는 구조적 형태</span>
        </div>
        <div className="cont2_fade_none"></div>
      </div>
      <div className="cont2_fadewrap">
        <div className="cont2_fade_none"></div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="cont2_center_text"
        >
          <p>TENSION</p>
          <span>당겨진 선과 지지하는 면의 긴장 관계</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="fade-left"
        >
          <img src="./imgs/cont2_fade2.png" alt="fade1" />'
        </div>
      </div>
      <div className="cont2_fadewrap">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="fade-right"
        >
          <img src="./imgs/cont2_fade3.png" alt="fade1" />'
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="cont2_center_text"
        >
          <p>VOID</p>
          <span>비워진 공간이 만드는 완결성.</span>
        </div>
        <div className="cont2_fade_none"></div>
      </div>

      <div className="cont2_fadewrap">
        <div className="cont2_fade_none"></div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="cont2_center_text"
        >
          <p>FRAME</p>
          <span>형태를 둘러싸는 경계에 대한 탐구</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="fade-left"
        >
          <img src="./imgs/cont2_fade4.png" alt="fade1" />'
        </div>
      </div>
      <div className="cont2_story">
        <h2>Jewelry reduced to its essential form.</h2>
        <div className="cont2_story_img">
          <img src="./imgs/cont2_story1.png" alt="story" />
        </div>
      </div>
    </>
  );
}
export default Cont2;
