function About() {
  return (
    <section
      className="section-container"
      id="about">
      <div className="section-area">
        <div className="section-top">
          <div className="title-box">
            <h2
              className="title"
              lang="en">
              About
            </h2>
          </div>
        </div>
        <div className="section-bottom">
          <div className="content-box">
            <div className="content-desc-box">
              <p>
                <strong>구축과 운영 프로젝트 모두를 경험하며, 안정성과 사용자 경험을 꾸준히 개선해온 4년차 웹 퍼블리셔입니다.</strong>
                <br />
                웹 표준과 시멘틱 마크업을 기반으로 작업하며, 웹 접근성과 크로스 브라우징을 고려한 견고한 화면 구현을 중요하게 생각합니다.
                <br />
                프로젝트 성격에 맞는 레이아웃을 설계하고, 유지보수성과 확장성을 중심에 둔 코드 구조를 지향합니다.
                <br />
                기획·디자인·개발의 흐름을 세심하게 이해하려 노력하며, 발생한 문제는 빠르게 파악해 해결해왔습니다.
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="content-title-box">
              <h3
                className="content-title"
                lang="en">
                Core Strengths
              </h3>
            </div>
            <div className="content-desc-box">
              <ul className="content-list">
                <li>웹 접근성 심사 통과 및 개선 경험 다수</li>
                <li>반응형 및 컴포넌트 구조 기반 퍼블리싱</li>
                <li>기획·디자인·개발과의 원활한 협업 커뮤니케이션</li>
                <li>디자인 검수·QA 이슈의 빠르고 정확한 대응</li>
                <li>운영 이슈 대응 및 안정성·성능 개선 경험</li>
                <li>JavaScript + SCSS 기반 UI 인터랙션 구현</li>
                <li>크로스브라우징 대응 및 환경 제약 최적화</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
