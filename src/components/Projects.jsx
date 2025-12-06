import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
            <h2 className="title">Projects</h2>
          </div>
        </div>
        <div className="section-bottom">
          <div className="project-list-box">
            <ul className="project-lists">
              <li className="project-list">
                <div className="project-title-box">
                  <h3 className="project-title">현대자동차 태국 온라인 구축 (Global Web Publishing)</h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, Pagination]}
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
                    <div className="meta">2022.11 ~ 2023.04 | UI 퍼블리싱 | Hyundai AutoEver / 글로벌 서비스</div>
                    <div className="desc">EN/TH 다국어 대응 및 컴포넌트 기반 구조화로 유지보수성과 확장성을 높였고, 반응형 구현과 Git 협업을 통해 일정 내 안정적인 런칭을 이끌었습니다.</div>
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
                    <div className="link-box">
                      <a
                        href="https://www.hyundai.com/th/en"
                        className="link">
                        🔗 https://www.hyundai.com/th/en
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project-list">
                <div className="project-title-box">
                  <h3 className="project-title">SK브로드밴드 B tv UI 구축 및 운영</h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, Pagination]}
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
                    <div className="meta">2022.03 ~ 진행 | UI 퍼블리싱 주도 | SK Broadband</div>
                    <div className="desc">
                      B tv 웹 서비스의 핵심 UI 컴포넌트를 단독으로 구축하고 운영 이슈를 지속적으로 대응했습니다. Vue.js 기반 개발 환경과 공통 컴포넌트 적용을 통해 안정성과 일관성을 유지하며, QA/디자인
                      검수에 대한 빠른 피드백 반영으로 서비스 품질 향상에 기여했습니다.
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
                        <div className="info-title">기술 스택 / 구현 방식</div>
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
                  <h3 className="project-title">LG 전자 스마트코티지 구축</h3>
                </div>
                <div className="project-content-box">
                  <div className="project-slide-box">
                    <Swiper
                      modules={[Navigation, Pagination]}
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
                    <div className="meta">2024.03 ~ 2024.10 | UI 퍼블리싱 | LG 전자</div>
                    <div className="desc">
                      공통 컴포넌트 중심으로 설계해 서비스 확장 및 기능 추가 시에도 빠르게 대응할 수 있는 구조를 만들었습니다. JavaScript & SCSS 기반 인터랙션과 지도 API 구현, 전 디바이스 반응형
                      대응을 통해 현재까지 안정적인 운영을 지원하고 있습니다.
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
                    <div className="link-box">
                      <a
                        href="https://thesmartcottage.com/"
                        className="link">
                        🔗 https://thesmartcottage.com/
                      </a>
                    </div>
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
