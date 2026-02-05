import './Header.css';

function Header() {
  return (
    <>
      <div id="header">
        <div>
          <ul>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">event</a>
            </li>
            <li>
              <a href="#">story</a>
            </li>
          </ul>
        </div>
        <a href="#">
          <img src="#" alt="로고" />
          LOGO
        </a>
        <div>
          <ul>
            <li>
              <a href="#">
                <i></i>로그인
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>장바구니
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
