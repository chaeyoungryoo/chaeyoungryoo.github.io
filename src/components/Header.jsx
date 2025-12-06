function Header() {
  return (
    <header className="header">
      <div className="header-box">
        <div className="title-box">
          <div
            className="title"
            lang="en">
            Chaeyoung Ryoo
          </div>
        </div>
        <nav className="gnb-box">
          <ul className="gnb-lists">
            <li className="gnb-list">
              <a
                href="#about"
                className="gnb-link">
                <span lang="en">About</span>
              </a>
            </li>
            <li className="gnb-list">
              <a
                href="#projects"
                className="gnb-link">
                <span lang="en">Projects</span>
              </a>
            </li>
            <li className="gnb-list">
              <a
                href="#contact"
                className="gnb-link">
                <span lang="en">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
