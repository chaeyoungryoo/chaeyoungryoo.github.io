import styled from 'styled-components'

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  .header {
    position: relative;
    height: 6rem;
    font-size: 1.6rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .header-box {
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 0 3rem;
    }
    .title-box {
      position: absolute;
      top: 50%;
      left: 3rem;
      transform: translateY(-50%);
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
        color: #444;
      }
    }
  }
  .main {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    padding: 6rem 3rem;
  }
`

export default PageStyle
