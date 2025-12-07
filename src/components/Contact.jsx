function Contact() {
  return (
    <section
      className="section-container"
      id="contact">
      <div className="section-area">
        <div className="section-top">
          <div className="title-box">
            <h2
              className="title"
              lang="en">
              Contact
            </h2>
          </div>
        </div>
        <div className="section-bottom">
          <div className="content-box">
            <div className="content-title-box">
              <p className="sub-title">협업 및 제안 관련 문의는 아래 연락처로 연락 부탁드립니다.</p>
            </div>
            <div className="content-desc-box">
              <ul className="content-list">
                <li>
                  <span lang="en">Phone :&nbsp;</span>{' '}
                  <a
                    href="tel:010-2019-0841"
                    lang="en">
                    010-2019-0841
                  </a>
                </li>
                <li>
                  <span lang="en">Email :&nbsp;</span>{' '}
                  <a
                    href="mailto:ryoochaeyoung@gmail.com"
                    lang="en">
                    ryoochaeyoung@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
