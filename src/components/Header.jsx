import './Header.css';

function Header() {
  return (
    <>
      <div id="header">
        <ul className="gnb_left">
          <li className="gnb_menu">
            <a href="#">SHOP</a>
          </li>
          <li className="gnb_menu">
            <a href="#">EVENT</a>
          </li>
          <li className="gnb_menu">
            <a href="#">STORY</a>
          </li>
        </ul>

        <a href="#" className="logo">
          <img src="./public/imgs/logo.png" alt="로고" />
        </a>
        <ul className="gnb_right">
          <li>
            <a href="#">
              <i class="fa-solid fa-user"></i>
              <p>login</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-bag-shopping"></i>
              <p>cart</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
