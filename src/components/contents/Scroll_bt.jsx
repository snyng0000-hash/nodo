import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { prdData } from '../../data';
import './Scroll_bt.css';

function Scroll_bt() {
  const [isClockPopupOpen, setIsClockPopupOpen] = useState(false);

  const handleClockClick = (e) => {
    e.preventDefault();
    setIsClockPopupOpen(!isClockPopupOpen);
  };
  const [watchedItems, setWatchedItems] = useState([]);
  useEffect(() => {
    if (isClockPopupOpen) {
      const watchedIds = JSON.parse(localStorage.getItem('watched')) || [];
      const items = watchedIds
        .map((id) => prdData.find((p) => p.id === id))
        .filter((item) => item !== undefined)
        .reverse();
      setWatchedItems(items);
    }
  }, [isClockPopupOpen]);

  return (
    <>
      <div className={`clock_popup ${isClockPopupOpen ? 'active' : ''}`}>
        <p>최근 본 상품</p>
        <div className="watched_list">
          {watchedItems.length > 0 ? (
            watchedItems.map((item) => (
              <div key={item.id} className="watched_item">
                <Link
                  to={`/prd/${item.id}`}
                  key={item.id}
                  className="watched_imgBox"
                >
                  <img src={item.img} alt={item.name} />

                  <p className="watched_itemName">{item.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="no_data">최근 본 상품이 없습니다.</p>
          )}
        </div>
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
