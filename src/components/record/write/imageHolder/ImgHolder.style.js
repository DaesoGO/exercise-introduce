import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  /* width: 100%; */

  /* width:55vw;
  max-width:700px;
  max-height:700px;
  height: 100%; */

  width:100%;
  height:100%;
  position: relative;
  border-radius: 0px 0px 10px 10px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  .reactEasyCrop_Container{
    border-radius:0px 0px 10px 10px !important;
    .reactEasyCrop_CropAreaGrid{
      visibility:hidden;
    }
    .reactEasyCrop_CropArea{
      border:0px;
    }
    :active > .reactEasyCrop_CropAreaGrid{
      visibility:visible;
    };

  }
  

`;

export const ContainerSupporter = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  // 가로 세로가 똑같으니 그냥 계산
  display: flex;
  flex-direction: ${(props) => (props.aspect === 16 / 9 ? "column" : "row")};
  justify-content: space-between;

  > div {
    background-color: white;

    // 1/1 비율일 땐 없어야 하기 때문에
    width: ${(props) => {
      switch (props.aspect) {
        case 16 / 9:
          return "100%";
        case 4 / 5:
          return "10%";
        default:
          return "0px";
      }
    }};
    height: ${(props) => {
      switch (props.aspect) {
        case 16 / 9:
          return "21.875%";
        case 4 / 5:
          return "100%";
        default:
          return "0px";
      }
    }};
  }

  ${(props) => props.aspect === 16 / 9 ? 
  css`
    > :last-child{
      border-radius:0px 0px 10px 10px;
    }
  ` : css`
    > :first-child {
      border-radius:0px 0px 0px 10px;
    }
    > :last-child{
      border-radius:0px 0px 10px 0px;
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => 
  props.step === 1 ?
  "0px 0px 0px 10px" : 
  "0px 0px 10px 10px"};
  object-fit: cover;
`;

export const Button = styled.button`
  pointer-events:all;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  > img {
    width: 20px;
    height: 20px;
  }
`;

export const GoLeftButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 11px;
  > img {
    margin-left: 6px;
  }
`;
export const GoRightButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 11px;
  > img {
    margin-left: 3px;
  }
`;

export const EditOption = styled.div`
  position: absolute;
  ${(props) =>
    props.left &&
    css`
      left: ${(props) => props.left + "px"};
    `};
  ${(props) =>
    props.right &&
    css`
      right: ${(props) => props.right + "px"};
    `}
  bottom:15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const OptionInfo = styled.div`
  width: 100px;
  height: 100px;
  background-color: powderblue;
`;

// Button은 OptionButton에서도 쓴다
/**
 * @todo button common으로 빼기
 */
export default { Button };

