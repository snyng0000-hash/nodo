import React, { useState, useRef } from 'react';

import './Signup.css';
function Signup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState('010');
  const phone3Ref = useRef(null);
  const agreeRef = useRef(null);

  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPw: '',
    userName: '',
    zipCode: '',
    addr1: '',
    addr2: '',
    phone2: '',
    phone3: '',
  });

  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    sms: false,
    email: false,
  });

  // 일반 입력값 변경 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'phone2' || name === 'phone3') {
      const onlyNumber = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: onlyNumber });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 체크박스 변경 함수 (전체 동의 로직 포함)
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    if (name === 'all') {
      setAgreements({
        all: checked,
        terms: checked,
        privacy: checked,
        sms: checked,
        email: checked,
      });
    } else {
      const newAgrees = { ...agreements, [name]: checked };
      const allChecked =
        newAgrees.terms &&
        newAgrees.privacy &&
        newAgrees.sms &&
        newAgrees.email;
      setAgreements({ ...newAgrees, all: allChecked });
    }
  };

  // 회원가입 버튼 클릭
  const onSignup = () => {
    if (
      !formData.userId ||
      !formData.password ||
      !formData.confirmPw ||
      !formData.userName ||
      !formData.phone2 ||
      !formData.phone3
    )
      return alert('필수 정보를 입력해주세요.');
    if (formData.password.length < 8)
      return alert('비밀번호는 8자리 이상입니다.');
    if (formData.password !== formData.confirmPw)
      return alert('비밀번호가 일치하지 않습니다.');
    if (!formData.phone2 || !formData.phone3) {
      return alert('휴대전화 번호를 모두 입력해주세요.');
    }
    if (formData.phone2.length !== 4) {
      return alert('휴대전화 중간 번호 4자리를 정확히 입력해주세요.');
    }
    if (formData.phone3.length !== 4) {
      return alert('휴대전화 뒷번호 4자리를 정확히 입력해주세요.');
    }
    if (!agreements.terms || !agreements.privacy)
      return alert('필수 약관에 동의해주세요.');
    if (!agreements.terms) {
      return alert('이용약관에 동의해야 가입이 가능합니다.');
    }
    if (!agreements.privacy) {
      return alert('개인정보 수집 및 이용에 동의해야 가입이 가능합니다.');
    }

    // 로컬스토리지 저장 (서버 대신)
    const userData = { ...formData, phone1: phonePrefix };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('회원가입이 완료되었습니다!');
    window.location.href = '/login';
  };

  return (
    <>
      <div className="signup">
        <div className="signup_wrap">
          <h5>회원가입</h5>
          <div className="signup_wrap_parts">
            <p>아이디*</p>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="signup_wrap_parts">
            <p>비밀번호*</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div className="signup_wrap_parts">
            <p>비밀번호 확인*</p>
            <input
              type="password"
              name="confirmPw"
              value={formData.confirmPw}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
        <div className="signup_wrap2">
          <div className="signup_wrap_parts">
            <p>이름*</p>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="signup_wrap_parts">
            <p>주소</p>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="우편번호"
            />
            <input
              type="text"
              name="addr1"
              value={formData.addr1}
              onChange={handleChange}
              placeholder="기본주소"
            />
            <input
              type="text"
              name="addr2"
              value={formData.addr2}
              onChange={handleChange}
              placeholder="나머지주소(선택입력가능)"
            />
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
              <input
                type="text"
                name="phone2"
                value={formData.phone2}
                onChange={handleChange}
                maxLength={4}
              />
              <input
                type="text"
                name="phone3"
                value={formData.phone3}
                onChange={handleChange}
                maxLength={4}
              />
            </div>
          </div>
        </div>

        <div className="signup_wrap3">
          <div className="signup_checkbox signup_checkbox_up">
            <span>
              이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
              동의합니다.
            </span>
            <div className="signup_checkbox_wrap">
              <input
                type="checkbox"
                name="all"
                checked={agreements.all}
                onChange={handleCheck}
              />
              <span>동의함</span>
            </div>
          </div>
          <div className="signup_agree">
            <div className="signup_agree_check">
              <textarea>이용약관</textarea>
            </div>
            <div className="signup_checkbox">
              <span>(필수)이용약관에 동의하십니까?</span>
              <div className="signup_checkbox_wrap">
                <input
                  type="checkbox"
                  name="terms"
                  checked={agreements.terms}
                  onChange={handleCheck}
                />
                <span>동의함</span>
              </div>
            </div>
            <div className="signup_agree_check">
              <textarea>개인정보수집이용</textarea>
            </div>

            <div className="signup_checkbox">
              <span>(필수)개인정보 수집 및 이용에 동의하십니까? </span>
              <div className="signup_checkbox_wrap">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={agreements.privacy}
                  onChange={handleCheck}
                />
                <span>동의함</span>
              </div>
            </div>

            <div className="signup_checkbox">
              <span>(필수)SMS 수신을 동의하십니까? </span>
              <div className="signup_checkbox_wrap">
                <input
                  type="checkbox"
                  name="sms"
                  checked={agreements.sms}
                  onChange={handleCheck}
                />
                <span>동의함</span>
              </div>
            </div>

            <div className="signup_checkbox">
              <span>(필수)이메일 수신을 동의하십니까?</span>
              <div className="signup_checkbox_wrap">
                <input
                  type="checkbox"
                  name="email"
                  checked={agreements.email}
                  onChange={handleCheck}
                />
                <span>동의함</span>
              </div>
            </div>
          </div>
        </div>
        <button className="signup_btn" onClick={onSignup}>
          회원가입
        </button>
      </div>
    </>
  );
}
export default Signup;
