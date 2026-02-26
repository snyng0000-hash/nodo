import './Weblogin.css';
function Weblogin() {
  // 네이버
  const openNaverLogin = () => {
    window.open(
      'about:blank',
      'Naver Login',
      'width=500,height=600,top=100,left=100',
    );
  };
  // 카카오
  const openKakaoLogin = () => {
    window.open(
      'about:blank',
      'Kakao Login',
      'width=500,height=600,top=100,left=100',
    );
  };
  // 비회원
  const openGuestLogin = () => {
    window.open(
      'about:blank',
      'Guest Login',
      'width=500,height=600,top=100,left=100',
    );
  };
  return (
    <>
      <div className="web_login">
        <button onClick={openNaverLogin} className="naver_login_btn">
          네이버 로그인
        </button>
        <button onClick={openKakaoLogin} className="kakao_login_btn">
          카카오 로그인
        </button>
        <button onClick={openGuestLogin} className="guest_login_btn">
          비회원 로그인
        </button>
      </div>
    </>
  );
}
export default Weblogin;
