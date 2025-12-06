import styled from 'styled-components'

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  .header {
    height: 6rem;
    font-size: 1.6rem;
    font-weight: 500;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .header-box {
      display: flex;
      justify-content: center;
      position: relative;
      max-width: 192rem;
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 6rem;
    }
    .title-box {
      position: absolute;
      top: 50%;
      left: 3rem;
      transform: translateY(-50%);
      font-weight: 200;
    }
    .gnb-box {
      .gnb-lists {
        display: flex;
        gap: 2rem;
        height: 100%;
      }
      .gnb-list {
        height: 100%;
        transition: color 0.2s;
        @media (hover: hover) {
          &:hover {
            .gnb-link {
              color: #000;
            }
          }
        }
      }
      .gnb-link {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 2rem;
        color: #555;
      }
    }
  }
  .main {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    .main-box {
      max-width: 192rem;
      margin: auto;
      padding: 6rem;
      width: 100%;
    }
  }
  .section-container {
    & + .section-container {
      margin-top: 6rem;
      padding-top: 4rem;
      border-top: 1px solid #eee;
    }
    .section-top {
      .title-box {
        .title {
          font-size: 3rem;
          font-weight: 500;
          color: #222;
        }
      }
    }
    .section-bottom {
      margin-top: 2.8rem;
      .content-box {
        & + .content-box {
          margin-top: 2.8rem;
        }
        .content-title-box {
          font-size: 2rem;
          font-weight: 500;
          color: #222;
          & + .content-desc-box {
            margin-top: 1.2rem;
          }
          .sub-title {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.4;
          }
        }
        .content-desc-box {
          font-size: 1.6rem;
          font-weight: 400;
          color: #444;
          line-height: 1.4;
        }
        .content-list {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-left: 0.8rem;
          li {
            display: flex;
            &::before {
              content: '-';
              flex-shrink: 0;
              margin-right: 0.8rem;
            }
          }
        }
      }
    }
  }
  .project-list {
    & + .project-list {
      margin-top: 8rem;
    }
    .project-title-box {
      font-size: 2rem;
      font-weight: 500;
      color: #222;
      line-height: 1.4;
      .project-title {
        .project-link {
          margin-left: 1rem;
          font-size: 1.6rem;
          font-weight: 400;
          color: #555;
          transition: color 0.2s;
          white-space: nowrap;
          @media (hover: hover) {
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
    .project-content-box {
      margin-top: 2rem;
    }
    .swiper {
      position: relative;
      .swiper-wrapper {
        display: flex;
      }
      .swiper-slide {
        flex-shrink: 0;
        opacity: 0 !important;
        padding: 0 3rem;
        &.swiper-slide-active {
          opacity: 1 !important;
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        z-index: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        width: 4rem;
        height: 4rem;
        .swiper-navigation-icon {
          transform: scale(1.3);
        }
      }
      .swiper-button-prev {
        left: 0;
        transform: translateY(-50%) rotate(180deg);
      }
      .swiper-button-next {
        right: 0;
        transform: translateY(-50%);
      }
    }
    .project-info-box {
      .meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: #444;
        line-height: 1.4;
        .company {
          display: flex;
          align-items: center;
          font-size: 1.4rem;
          color: #888;
          &::before {
            content: '|';
            position: relative;
            top: -0.1rem;
            margin-right: 1rem;
            color: #444;
          }
        }
      }
      .desc {
        margin-top: 0.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        color: #444;
        line-height: 1.4;
      }
      .info-list-box {
        display: flex;
        gap: 2rem;
        margin-top: 2.8rem;
        .info-list {
          flex: 1;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 0.8rem;
        }
        .info-title {
          font-size: 1.8rem;
          font-weight: 500;
          color: #222;
        }
        .lists {
          margin-top: 1.6rem;
          padding-left: 0.6rem;
          font-size: 1.6rem;
          font-weight: 400;
          color: #444;
          line-height: 1.4;
          .list {
            display: flex;
            &::before {
              content: '•';
              flex-shrink: 0;
              margin-right: 0.8rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      height: 8rem;
      .header-box {
        flex-direction: column;
        justify-content: unset;
        padding: 1.2rem 2rem 0;
      }
      .title-box {
        position: static;
        transform: none;
        font-size: 1.4rem;
      }
      .gnb-box {
        flex: 1;
        .gnb-lists {
          gap: 3rem;
        }
        .gnb-link {
          padding: 0;
        }
      }
    }
    .main {
      .main-box {
        padding: 4rem 2rem;
      }
    }
    .project-list {
      & + .project-list {
        margin-top: 6rem;
      }
      .project-info-box {
        margin-top: 2.8rem;
        .info-list-box {
          flex-direction: column;
        }
      }
      .swiper {
        .swiper-slide {
          padding: 0 2rem;
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 2.4rem;
          height: 2.4rem;
          .swiper-navigation-icon {
            transform: scale(1);
          }
        }
      }
    }
  }
`

export default PageStyle
