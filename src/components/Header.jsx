function Header() {
  return (
    <header className="header">
      <div className="header-box">
        <div className="title-box">
          <div className="title">Chaeyoung Ryoo</div>
        </div>
        <nav className="gnb-box">
          <ul className="gnb-lists">
            <li className="gnb-list">
              <a
                href="#about"
                className="gnb-link">
                <span>About</span>
              </a>
            </li>
            <li className="gnb-list">
              <a
                href="#projects"
                className="gnb-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="gnb-list">
              <a
                href="#contact"
                className="gnb-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
