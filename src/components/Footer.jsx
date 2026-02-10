import './Footer.css';
import Scroll_bt from './contents/Scroll_bt';
function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer_top">
          <ul>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_mid">
          <ul>
            <li>
              <a href="#">주식회사 NODO 대표 김선영</a>
            </li>
            <li>
              <a href="#">주소 00시 00구 00길 0000</a>
            </li>
            <li>
              <a href="#">사업자등록번호 000-00-0000</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">e-mail</a>
            </li>
            <li>
              <a href="#">통신판매업번호 000-00-0000</a>
            </li>
          </ul>
        </div>
        <div className="footer_bot">
          <ul className="footer_policy">
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
          </ul>
          <ul className="footer_icon">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-kakao-talk"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Scroll_bt></Scroll_bt>
    </>
  );
}
export default Footer;
