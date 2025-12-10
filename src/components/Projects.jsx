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
                      영어와 태국어를 지원하는 현대자동차 태국 공식 웹사이트 구축에 참여했습니다.
                      <br />
                      차량 비교, 옵션 선택 등 복잡한 구조가 필요한 화면을 중심으로 작업했고, 재사용 가능한 공통 컴포넌트를 설계해 개발팀과의 협업 효율을 높였습니다.
                      <br />
                      현대 내부망이라는 제한된 환경에서도 일정에 맞춰 안정적으로 런칭을 완료했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">메인 페이지, 차량 목록, 옵션 선택 등 핵심 화면 퍼블리싱 전담</li>
                          <li className="list">영어/태국어 전환에 대응하는 UI 컴포넌트 구조 설계</li>
                          <li className="list">모바일에서 PC까지 모든 해상도에서 깨지지 않는 반응형 구현</li>
                          <li className="list">디자인팀 피드백과 QA 이슈를 취합해 개발팀에 전달하는 중간 역할 수행</li>
                          <li className="list">태국 현지 론칭 일정에 맞춰 전체 산출물 검수 및 전달</li>
                        </ul>
                      </div>

                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">HTML, SCSS로 버튼·카드·모달 등 재사용 가능한 컴포넌트 제작</li>
                          <li className="list">글로벌 브랜드 가이드를 준수한 UI 컴포넌트 구현</li>
                          <li className="list">언어별 텍스트 길이 차이를 고려한 유연한 레이아웃 설계</li>
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
                      TV 셋톱박스에서 동작하는 B tv UI를 오랜 시간 동안 구축하고 운영했습니다.
                      <br />
                      리모컨 조작에 최적화된 포커스 이동, 화면 전환 애니메이션 등 TV 환경 특유의 애니메이션을 구현했습니다.
                      <br />
                      수년간 쌓인 코드를 정리하면서도 서비스 안정성을 유지하는 데 집중했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">메인, 검색, 시놉시스, 마이페이지, 편성표 등 모든 카테고리 퍼블리싱 전담</li>
                          <li className="list">월 평균 10건 이상의 운영 이슈를 빠르게 파악하고 수정</li>
                          <li className="list">매 버전 배포 전 QA팀과 함께 전수 검수 진행 후 피드백 즉시 반영</li>
                          <li className="list">Jira 티켓 기반으로 업무 일감을 체계적으로 관리</li>
                          <li className="list">프론트엔드 개발자와 소통하며 마크업과 로직 간 이슈 최소화</li>
                        </ul>
                      </div>
                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">Vue.js 환경에서 퍼블리싱 작업 진행</li>
                          <li className="list">Storybook으로 컴포넌트 아카이빙 진행</li>
                          <li className="list">사내 디자인 시스템 컴포넌트를 조합해 화면 단위로 조립</li>
                          <li className="list">SCSS 키프레임으로 포커스 이동, 화면 전환 등 애니메이션 구현</li>
                          <li className="list">Chrome 구버전에서도 깨지지 않도록 CSS fallback 처리</li>
                          <li className="list">Git을 통한 버전별 배포 이력 관리</li>
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
                      모듈러 주택 서비스인 '스마트코티지' 웹사이트를 구축했습니다.
                      <br />
                      사용자가 지도에서 원하는 위치를 선택하고, 다양한 옵션을 단계적으로 설정해갈 수 있는 흐름을 구현했습니다.
                      <br />
                      또한 서비스 확장에 대비해 새로운 기능을 유연하게 추가할 수 있도록 구조를 설계했습니다.
                    </div>
                    <div className="info-list-box">
                      <div className="info-list">
                        <div className="info-title">역할</div>
                        <ul className="lists">
                          <li className="list">메인, 서비스 소개, 옵션 선택, 지도 연동 화면 등 전체 페이지 퍼블리싱</li>
                          <li className="list">신규 프로모션 페이지 요청 시 평균 2~3일 내 작업 완료</li>
                          <li className="list">기획 변경이 잦은 초기 단계에서 디자이너와 실시간 소통하며 유연하게 대응</li>
                        </ul>
                      </div>

                      <div className="info-list">
                        <div className="info-title">기술 스택</div>
                        <ul className="lists">
                          <li className="list">Vanilla JavaScript로 인터랙션 구현</li>
                          <li className="list">Naver Maps API 연동</li>
                          <li className="list">SCSS 변수와 믹스인으로 컬러, 폰트 스타일 일관성 유지</li>
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
                            <p>올해 진행된 디자인 개편과 정기 운영 요구 사항을 병행했으며, 지난 4월 보안 관련 긴급 대응도 신속하게 수행했습니다.</p>
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
                            <p>
                              전기차 충전소 찾기/결제 웹앱의 전체 화면을 작업하였습니다.
                              <br />
                              스크린리더 테스트를 직접 수행하며 웹 접근성 심사를 AA 등급으로 통과하였습니다.
                            </p>
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
                            <p>
                              건물 내 보안 현황을 모니터링하는 관리자용 대시보드를 구축했습니다.
                              <br />
                              모바일/태블릿과 데스크톱 환경에 맞춘 적응형 레이아웃으로 작업하였습니다.
                            </p>
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
                            <p>
                              투자자를 위한 재무 정보, 공시 자료, IR 캘린더 등을 제공하는 페이지를 리뉴얼했습니다.
                              <br />
                              복잡한 표와 차트 콘텐츠가 모바일에서도 가독성을 유지할 수 있는 반응형으로 구현했습니다.
                            </p>
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
