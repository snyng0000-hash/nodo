import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div id="header">
        <ul className="gnb_left">
          <li className="gnb_menu">
            <Link to="/cont1">SHOP</Link>
          </li>
          <li className="gnb_menu">
            <Link to="/cont2">EVENT</Link>
          </li>
        </ul>

        <Link to="/" className="logo">
          <img src="/imgs/logo.png" alt="로고" />
        </Link>
        <ul className="gnb_right">
          <li>
            <Link to="/login">
              <i className="fa-solid fa-user"></i>
              <p>login</p>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bag-shopping"></i>
              <p>cart</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
