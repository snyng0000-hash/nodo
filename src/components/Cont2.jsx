import Header from './Header';
import './Cont2.css';
import Footer from './Footer';

function Cont2() {
  return (
    <>
      <Header></Header>
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
          <p>text</p>
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
          <p>text</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="fade-left"
        >
          <img src="./imgs/cont2_fade1.png" alt="fade1" />'
        </div>
      </div>
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
          <p>text</p>
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
          <p>text</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="fade-left"
        >
          <img src="./imgs/cont2_fade1.png" alt="fade1" />'
        </div>
      </div>
      <div className="cont2_story">
        <h2>story</h2>
        <div className="cont2_story_img">
          <img src="./imgs/cont2_story.png" alt="story" />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default Cont2;
