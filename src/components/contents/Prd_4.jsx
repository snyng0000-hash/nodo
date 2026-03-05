import { Link } from 'react-router-dom';
import prdData from '../../data';
import './Prd_4.css';

function Prd_4() {
  return (
    <>
      <div className="prd_4">
        {prdData.map((item) => {
          return (
            <>
              <Link to={`/prd/${item.id}`} key={item.id} className="prd_4_box">
                <img src={item.img} alt="{item.name}" />
                <div className="prd_4_text">
                  <p className="prd_name">{item.name}</p>
                  <p className="prd_price">{item.desc}</p>
                </div>
              </Link>
              {/* <Link to="/prd" className="prd_4_box">
                <img src="#" alt="제품2" />
                <div className="prd_4_text">
                  <p className="prd_name">00000</p>
                  <p className="prd_price">0000원</p>
                </div>
              </Link>
              <Link to="/prd" className="prd_4_box">
                <img src="#" alt="제품3" />
                <div className="prd_4_text">
                  <p className="prd_name">00000</p>
                  <p className="prd_price">0000원</p>
                </div>
              </Link>
              <Link to="/prd" className="prd_4_box">
                <img src="#" alt="제품4" />
                <div className="prd_4_text">
                  <p className="prd_name">00000</p>
                  <p className="prd_price">0000원</p>
                </div>
              </Link> */}
            </>
          );
        })}
      </div>
    </>
  );
}
export default Prd_4;
