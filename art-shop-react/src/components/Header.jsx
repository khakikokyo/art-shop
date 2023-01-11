import "./Header.css";

function Header() {
  return(
    <header>
      <div className="header__container">
        <div className="title">Andy Warhol</div>
        <div className="subtitle">
          도발적인 주제와 혁신적인 제작기법, 파격적인 언행으로 화제의 중심에 섰던 일러스트레이터이자 디자이너, 사진가이자 영화 제작자,
          팝아트를 대표하는 멀티 아티스트 앤디 워홀.
        </div>
        <div className="btn__area">
          <a href="https://ko.wikipedia.org/wiki/앤디_워홀" target="_BLANK" rel="noreferrer">
            <button>Wikipedia Andy Warhol</button>
          </a>
        </div>
      </div>
    </header>
  )
};

export default Header;