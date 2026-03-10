import { Link, useParams } from 'react-router-dom';
import { prdData } from '../data';
import './Cont3_prd.css';
import { useEffect } from 'react';

function Cont3_prd() {
  const { id } = useParams();
  const item = prdData.find((p) => p.id === parseInt(id));
  useEffect(() => {
    if (!item) return;
    const saved = localStorage.getItem('watched');
    let watchList = saved ? JSON.parse(saved) : [];
    watchList.push(item.id);
    watchList = [...new Set(watchList)];
    if (watchList.length > 5) {
      watchList = watchList.slice(0, 5);
    }
    localStorage.setItem('watched', JSON.stringify(watchList));
  }, [id, item]);

  if (!item) return <div>상품 정보가 없습니다.</div>;

  return (
    <div className="product_detail">
      <div className="top_section">
        <div className="top_section_img">
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
          <p className="short_desc">{item.shortDesc2}</p>
          <div className="order_btn">
            <button>cart</button>
            <button>order</button>
          </div>
        </div>
      </div>

      <div className="detail_content">
        <h3>제품정보</h3>
        <span>
          NODO의 주얼리는 섬세한 구조와 표면 마감을 통해 완성됩니다.
          <br /> 제품의 형태와 질감을 오래 유지하기 위해 다음 사항을 참고해
          주세요.
          <br />
          <br />
          • 강한 충격이나 압력은 제품 변형의 원인이 될 수 있습니다. <br />
          향수, 화장품,땀, 물 등과의 장시간 접촉은 변색을 유발할 수 있습니다.
          <br />
          • 착용 후에는 부드러운 천으로 가볍게 닦아 보관해 주세요.
          <br />• 습기가 적은 곳에서 개별 보관을 권장합니다.
        </span>
        <img
          src={item.detailImg1}
          className="detail_content_img"
          alt="상세정보 1"
        />
        <h3>Order Notice</h3>
        <span>
          모든 제품은 주문 확인 후 준비되는 방식으로 제작 및 발송됩니다.
          <br />
          제품 특성상 미세한 표면 결이나 색 차이가 있을 수 있습니다.
          <br />
          촬영 환경 및 화면 설정에 따라 실제 색상과 차이가 있을 수 있습니다.
          <br />
          사이즈 및 구조 특성상 단순 변심에 의한 교환/환불이 제한될 수 있습니다.
          <br />
          제품 착용 또는 사용 흔적이 있는 경우 교환 및 반품이 어렵습니다.
          <br />
          구매 전 제품 정보를 충분히 확인해 주세요.
        </span>
        <img
          src={item.detailImg2}
          className="detail_content_img"
          alt="상세정보 2"
        />

        <h3>배송안내</h3>
        <span>
          주문 후 3–7 영업일 내 발송됩니다.
          <br />
          주문량 또는 제작 일정에 따라 배송이 지연될 수 있습니다.
          <br />
          제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.
          <br />
          발송 이후 배송 일정은 택배사 사정에 따라 달라질 수 있습니다.
          <br />
          배송 관련 문의는 고객센터 또는 문의 페이지를 통해 안내해 드립니다.
        </span>
      </div>
    </div>
  );
}
export default Cont3_prd;
