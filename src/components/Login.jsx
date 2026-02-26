import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import Weblogin from './contents/Weblogin';
import Header from './Header';
import Footer from './Footer';

function Login() {
  return (
    <>
      <Header></Header>
      <div className="login_wrap">
        <h5>로그인</h5>
        <div className="login_wrap_parts">
          <p>아이디</p>
          <input type="text" placeholder="아이디를 입력해주세요." />
        </div>
        <div className="login_wrap_parts">
          <p>비밀번호</p>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <button className="login_btn">로그인</button>
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
