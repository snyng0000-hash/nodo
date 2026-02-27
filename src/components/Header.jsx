import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    //페이지가 켜질 때 로컬스토리지 확인
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLogin(true);
    }
  }, []);

  //로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    setIsLogin(false); // 상태 변경
    alert('로그아웃 되었습니다.');
    window.location.href = '/'; // 메인으로 이동
  };

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
            {isLogin ? (
              <Link to="/" onClick={handleLogout}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>logout</p>
              </Link>
            ) : (
              <Link to="/login">
                <i className="fa-solid fa-user"></i>

                <p>login</p>
              </Link>
            )}
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
