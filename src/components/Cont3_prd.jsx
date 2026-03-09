import { Link, useParams } from 'react-router-dom';
import { prdData} from '../data';
import './Cont3_prd.css';

function Cont3_prd() {
 const { id } = useParams();
  const item = prdData.find((p) => p.id === parseInt(id));

  if (!item) return <div>상품 정보가 없습니다.</div>;

  return (
    <div className="product_detail">
  
      <div className="top_section">
        <div className='.top_section_img'>
        <div className="main_img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="sub_imgs">
          {item.subImgs?.map((src, i) => (
            <img key={i} src={src} alt="서브 이미지" />
          ))}
        </div>
        </div>
        <div className="info_area">
          <h2>{item.name}</h2>
          <p className="price">₩ {item.desc}</p>
          <p className="short_desc">{item.shortDesc}</p>
          
        </div>
      </div>

      <div className="detail_content">
        <h3>제품정보</h3>
        <img src={item.detailImg1} className='detail_content_img' alt="상세정보 1" />
        <img src={item.detailImg2} className='detail_content_img'alt="상세정보 2" />

        <h3>배송안내</h3>
      </div>
    </div>
  );
}
export default Cont3_prd;
