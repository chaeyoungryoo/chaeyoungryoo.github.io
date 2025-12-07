import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

function Projects() {
  const projectImages01 = [
    { src: 'assets/images/1-1.png', alt: '현대자동차 태국 - 메인 페이지' },
    { src: 'assets/images/1-2.png', alt: '현대자동차 태국 - 모델 목록 필터' },
    { src: 'assets/images/1-3.png', alt: '현대자동차 태국 - 모델 비교하기' },
    { src: 'assets/images/1-4.png', alt: '현대자동차 태국 - 모델 목록' },
    { src: 'assets/images/1-5.png', alt: '현대자동차 태국 - 옵션 선택' },
    { src: 'assets/images/1-6.png', alt: '현대자동차 태국 - 모델 목록 필터 모바일' },
    { src: 'assets/images/1-7.png', alt: '현대자동차 태국 - 모델 비교하기 모바일' },
    { src: 'assets/images/1-8.png', alt: '현대자동차 태국 - 옵션 선택 모바일' }
  ]
  const projectImages02 = [
    { src: 'assets/images/2-1.png', alt: 'SKB B tv - 메인 페이지' },
    { src: 'assets/images/2-2.png', alt: 'SKB B tv - 검색' },
    { src: 'assets/images/2-3.png', alt: 'SKB B tv - 시놉시스' },
    { src: 'assets/images/2-4.png', alt: 'SKB B tv - 시놉시스 더보기' },
    { src: 'assets/images/2-5.png', alt: 'SKB B tv - 상품 구매하기' },
    { src: 'assets/images/2-6.png', alt: 'SKB B tv - 마이페이지' },
    { src: 'assets/images/2-7.png', alt: 'SKB B tv - 편성표' }
  ]
  const projectImages03 = [
    { src: 'assets/images/3-1.png', alt: 'LGE 스마트코티지 - 메인 페이지' },
    { src: 'assets/images/3-2.png', alt: 'LGE 스마트코티지 - 메인 페이지 메뉴 펼침' },
    { src: 'assets/images/3-3.png', alt: 'LGE 스마트코티지 - 서비스 인트로' },
    { src: 'assets/images/3-4.png', alt: 'LGE 스마트코티지 - 지도 API 연동' },
    { src: 'assets/images/3-5.png', alt: 'LGE 스마트코티지 - 모델 선택 옵션' },
    { src: 'assets/images/3-6.png', alt: 'LGE 스마트코티지 - 메인 페이지 모바일' },
    { src: 'assets/images/3-7.png', alt: 'LGE 스마트코티지 - 서비스 인트로 모바일' },
    { src: 'assets/images/3-8.png', alt: 'LGE 스마트코티지 - 지도 API 연동 모바일' },
    { src: 'assets/images/3-9.png', alt: 'LGE 스마트코티지 - 모델 선택 옵션 모바일' }
  ]

  return (
    <section
      className="section-container"
      id="projects">
      <div className="section-area">
        <div className="section-top">
          <div className="title-box">
            <h2
              className="title"
              lang="en">
              Projects
            </h2>
          </div>
        </div>
        <div className="section-bottom">
          <div className="project-list-box">
            <ul className="project-lists">
              <li className="project-list">
                <div className="project-title-box">
                  <h3 className="project-title">
                    1. 현대자동차 태국 온라인 서비스 구축
                    <a
                      href="https://www.hyundai.com/th/en"
                      className="project-link"
                      target="_blank">
                      🔗 링크
                    </a>
                  </h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, EffectFade, Pagination]}
                      effect="fade"
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}>
                      {projectImages01.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image.src}
                            alt={image.alt}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="project-info-box">
                    <div className="meta">
                      2022.11 - 2023.04
                      <span
                        className="company"
                        lang="en">
                        Hyundai Autoever
                      </span>
                    </div>
                    <div className="desc">
                      다국어(EN/TH) 기반 글로벌 사이트 구축 퍼블리싱을 담당했습니다.
                      <br />
                      Git 협업과 공통 컴포넌트 구조 설계를 통해 소스 품질을 관리했습니다.
                      <br />
                      접근성과 반응형도 고려하며 안정적으로 납기 내 완료했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">현대 내부망 환경에서 글로벌 웹 구축 퍼블리싱 담당</li>
                          <li className="list">EN/TH 다국어 서비스 UI 공통 컴포넌트 설계</li>
                          <li className="list">모바일·태블릿·PC 반응형 레이아웃 제작</li>
                          <li className="list">QA·디자인·개발 간 커뮤니케이션 주도</li>
                          <li className="list">글로벌 론칭 일정 내 안정적 전달</li>
                        </ul>
                      </div>

                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">HTML, SCSS 기반 컴포넌트 단위 구조화</li>
                          <li className="list">이미지 최적화 및 Lazy Loading 적용</li>
                          <li className="list">언어별 UI/텍스트 분리로 다국어 대응</li>
                          <li className="list">Git 기반 버전 관리 및 협업</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project-list">
                <div className="project-title-box">
                  <h3 className="project-title">2. SK브로드밴드 B tv UI 구축 및 운영</h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, EffectFade, Pagination]}
                      effect="fade"
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}>
                      {projectImages02.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image.src}
                            alt={image.alt}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="project-info-box">
                    <div className="meta">
                      2022.03 - 2025.12
                      <span
                        className="company"
                        lang="en">
                        SK Broadband
                      </span>
                    </div>
                    <div className="desc">
                      SKB B tv UI 퍼블리싱을 담당했습니다.
                      <br />
                      다양한 구형 환경에서도 안정적인 UI를 제공하기 위해 구조 개선 및 공통 컴포넌트 기반으로 작업했습니다.
                      <br />
                      Jira/Confluence 협업과 철저한 QA 대응을 통해 서비스 품질 개선에 기여했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">B tv 웹 서비스 주요 카테고리 퍼블리싱 단독 담당</li>
                          <li className="list">서비스 운영 중 발생하는 이슈 대응 및 지속적인 UI 유지보수</li>
                          <li className="list">버전업 시 검수 및 QA 피드백을 빠르고 정확하게 반영</li>
                          <li className="list">Jira / Confluence를 활용한 업무·이슈 관리</li>
                          <li className="list">프론트엔드 개발자와의 긴밀한 커뮤니케이션을 통한 협업</li>
                        </ul>
                      </div>
                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">Vue.js 기반 템플릿 마크업 및 공통 컴포넌트 조립/적용</li>
                          <li className="list">Storybook 기반 컴포넌트 개발 및 문서화</li>
                          <li className="list">사내 공통 컴포넌트 라이브러리를 활용한 화면 구축</li>
                          <li className="list">SCSS 기반 애니메이션 구현 (화면 전환, 포커스 이동 등)</li>
                          <li className="list">TV UI 특성을 고려해 구형 기기 및 크롬 구버전에서도 안정적으로 동작하도록 구현</li>
                          <li className="list">Git 기반 버전 관리 및 협업</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project-list">
                <div className="project-title-box">
                  <h3 className="project-title">
                    3. LG 전자 스마트코티지 구축
                    <a
                      href="https://thesmartcottage.com/"
                      className="project-link"
                      target="_blank">
                      🔗 링크
                    </a>
                  </h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, EffectFade, Pagination]}
                      effect="fade"
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}>
                      {projectImages03.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image.src}
                            alt={image.alt}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="project-info-box">
                    <div className="meta">
                      2024.03 - 2024.10
                      <span
                        className="company"
                        lang="en">
                        LG Electronics
                      </span>
                    </div>
                    <div className="desc">
                      반응형 UI와 JavaScript 인터랙션 기반의 퍼블리싱을 담당했습니다.
                      <br />
                      지도 API 적용 및 공통 컴포넌트 구조로 유지보수성을 높였고, 신규 서비스 기능이 추가될 때마다 빠르게 대응했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">컴포넌트 단위 구조화로 유지보수 효율 극대화</li>
                          <li className="list">신규 서비스 추가 시 빠른 퍼블리싱 대응</li>
                          <li className="list">디자인·기획·개발과 협업하며 일정 지연 없이 납기 준수</li>
                        </ul>
                      </div>

                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">JavaScript + SCSS 기반 인터랙션 UI 구현</li>
                          <li className="list">Naver Maps 기반 지도 API 연동</li>
                          <li className="list">HTML, SCSS 기반 컴포넌트 단위 구조화</li>
                          <li className="list">Git 기반 버전 관리 및 협업</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project-list">
                <div className="project-title-box">
                  <h3
                    className="project-title"
                    lang="en">
                    More Projects
                  </h3>
                </div>
                <div className="project-content-box">
                  <div className="project-card-box">
                    <ul className="project-cards">
                      <li className="project-card skt">
                        <div className="card-top">
                          <div className="logo-box">
                            <img
                              src="assets/images/logo-skt.svg"
                              alt="SKT logo"
                            />
                          </div>
                          <div className="name">SKT 보이는 ARS</div>
                        </div>
                        <div className="card-bottom">
                          <div className="date">2024.07 - 2025.12</div>
                          <div className="desc">
                            <p>긴급 보안 이슈(해킹)에 따른 UI 개선을 빠르게 수행하고, 디자인 리뉴얼과 운영 요구 사항을 병행하며 서비스 품질을 지속적으로 개선했습니다.</p>
                          </div>
                        </div>
                      </li>
                      <li className="project-card lge">
                        <div className="card-top">
                          <div className="logo-box">
                            <img
                              src="assets/images/logo-lge.svg"
                              alt="LGE logo"
                            />
                          </div>
                          <div className="name">LGE E-Centric</div>
                        </div>
                        <div className="card-bottom">
                          <div className="date">2024.01 - 2024.04</div>
                          <div className="desc">
                            <p>전기차 충전 웹앱 퍼블리싱을 담당했으며, 접근성 심사를 통과(WCAG AA 준수)하고 납기일에 맞춰 완료했습니다.</p>
                          </div>
                        </div>
                      </li>
                      <li className="project-card s1">
                        <div className="card-top">
                          <div className="logo-box">
                            <img
                              src="assets/images/logo-s1.svg"
                              alt="S1 logo"
                            />
                          </div>
                          <div className="name">삼성에스원 건물 관리 웹 솔루션</div>
                        </div>
                        <div className="card-bottom">
                          <div className="date">2023.05 - 2023.08</div>
                          <div className="desc">
                            <p>건물 관리 웹 솔루션을 삼성에스원 가이드에 맞춰 적응형 UI로 퍼블리싱하여, 다양한 환경에서 안정적인 UX를 제공했습니다.</p>
                          </div>
                        </div>
                      </li>
                      <li className="project-card hyundai">
                        <div className="card-top">
                          <div className="logo-box">
                            <img
                              src="assets/images/logo-hyundai.svg"
                              alt="Hyundai logo"
                            />
                          </div>
                          <div className="name">현대자동차 IR 개편</div>
                        </div>
                        <div className="card-bottom">
                          <div className="date">2023.07 - 2023.10</div>
                          <div className="desc">
                            <p>현대자동차 IR 페이지를 기업 디자인 가이드에 맞춰 구조화하고, 반응형 기반으로 안정적인 UI를 퍼블리싱했습니다.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
