import React, { useState } from 'react';

import './Signup.css';
function Signup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState('010');

  return (
    <>
      <div className="signup">
        <div className="signup_wrap">
          <h5>회원가입</h5>
          <div className="signup_wrap_parts">
            <p>아이디*</p>
            <input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div className="signup_wrap_parts">
            <p>비밀번호*</p>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className="signup_wrap_parts">
            <p>비밀번호 확인*</p>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
        </div>
        <div className="signup_wrap2">
          <div className="signup_wrap_parts">
            <p>이름*</p>
            <input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div className="signup_wrap_parts">
            <p>주소</p>
            <input type="text" placeholder="우편번호" />
            <input type="text" placeholder="기본주소" />
            <input type="text" placeholder="나머지주소(선택입력가능)" />
          </div>
          <div className="signup_wrap_parts2">
            <p>휴대전화*</p>
            <div className="signup_phone">
              <div className="custom_select">
                <div
                  className="selected_option"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {phonePrefix}
                  <span className={`arrow_icon ${isOpen ? 'up' : ''}`}>▼</span>
                </div>

                {isOpen && (
                  <ul className="options_list">
                    {['010', '011', '016', '017', '019'].map((num) => (
                      <li
                        key={num}
                        onClick={() => {
                          setPhonePrefix(num);
                          setIsOpen(false);
                        }}
                      >
                        {num}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input type="text" />
              <input type="text" />
            </div>
            <div className="signup_check">
              <input type="checkbox" />
              이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
              동의합니다.
            </div>
          </div>
        </div>
        <div className="signup_wrap3">
          <div className="signup_agree">
            <div className="signup_agree_check">
              <textarea>이용약관</textarea>
              <div className="signup_checkbox">
                <span>(필수)이용약관에 동의하십니까?</span>
                <div className="signup_checkbox_wrap">
                  <input type="checkbox" />
                  <span>동의함</span>
                </div>
              </div>
            </div>
            <div className="signup_agree_check">
              <textarea>개인정보수집이용</textarea>

              <div className="signup_checkbox">
                <span>(필수)개인정보 수집 및 이용에 동의하십니까? </span>
                <div className="signup_checkbox_wrap">
                  <input type="checkbox" />
                  <span>동의함</span>
                </div>
              </div>
            </div>

            <div className="signup_checkbox">
              <span>(필수)SMS 수신을 동의하십니까? </span>
              <div className="signup_checkbox_wrap">
                <input type="checkbox" />
                <span>동의함</span>
              </div>
            </div>

            <div className="signup_checkbox">
              <span>(필수)이메일 수신을 동의하십니까?</span>
              <div className="signup_checkbox_wrap">
                <input type="checkbox" />
                <span>동의함</span>
              </div>
            </div>
          </div>
        </div>
        <button className="signup_btn">회원가입</button>
      </div>
    </>
  );
}
export default Signup;
