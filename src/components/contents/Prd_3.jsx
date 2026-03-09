import { Link } from 'react-router-dom';
import { prdData, prdData_2 } from '../../data';

import './Prd_3.css';
function Prd_3() {
  return (
    <>
      <div className="prd_3">
        {prdData_2.map((item) => {
          return (
            <Link to={`/prd/${item.id}`} key={item.id} className="prd_3_parts">
              <img src={item.img} alt={item.name} />
              <div className="prd_3_text">
                <p className="prd_3_product">{item.name}</p>
                <p className="prd_3_price">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <a href="#" className="prd_3_more">
        more
      </a>
    </>
  );
}
export default Prd_3;
