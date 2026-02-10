import { useState } from 'react';
import './Scroll_bt.css';

function Scroll_bt() {
  const [isClockPopupOpen, setIsClockPopupOpen] = useState(false);

  const handleClockClick = (e) => {
    e.preventDefault();
    setIsClockPopupOpen(!isClockPopupOpen);
  };

  return (
    <>
      <div className={`clock_popup ${isClockPopupOpen ? 'active' : ''}`}>
        <p>최근 본 상품</p>
      </div>
      <div id="scroll_bt">
        <div className="scroll_bt_box scroll_bt_clock">
          <a href="#" onClick={handleClockClick}>
            <i className="fa-regular fa-clock"></i>
          </a>
        </div>
        <div className="scroll_bt_box">
          <a href="#">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default Scroll_bt;
