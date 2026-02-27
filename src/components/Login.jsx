import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import Weblogin from './contents/Weblogin';
import Header from './Header';
import Footer from './Footer';

function Login() {
  const [loginData, setLoginData] = useState({
    userid: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginData.userid === 'admin' && loginData.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', loginData.userid);
      alert('로그인되었습니다.');
      window.location.href = '/';
    } else {
      alert('아이디 또는 비밀번호를 확인하세요.');
    }
  };

  return (
    <>
      <Header></Header>
      <div className="login_wrap">
        <h5>로그인</h5>
        <div className="login_wrap_parts">
          <p>아이디</p>
          <input
            name="userid"
            type="text"
            value={loginData.userid}
            onChange={(e) =>
              setLoginData({ ...loginData, userid: e.target.value })
            }
            placeholder="아이디를 입력해주세요."
          />
        </div>
        <div className="login_wrap_parts">
          <p>비밀번호</p>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <button className="login_btn" onClick={handleLogin}>
          로그인
        </button>
        <ul className="login_wrap_sign">
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <a href="#">아이디 찾기</a>
          </li>
          <li>
            <a href="#">비밀번호 찾기</a>
          </li>
        </ul>
      </div>
      <Weblogin></Weblogin>
      <Footer></Footer>
    </>
  );
}
export default Login;
