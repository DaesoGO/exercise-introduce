import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  box-sizing: border-box;

  max-width: 670px;
  @media (max-width: 1272px) {
    max-width: calc(55vw - 30px);
  }

  > label {
    display: inline-block;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: Flex;
    justify-content: center;
    align-items: Center;
    margin: 10px;
    border: 1px solid white;
    > img {
      width: 25px;
    }
  }
  > input {
    display: none;
  }
`;

export const Desc = styled.div`
  position: relative;
  margin: 10px 0px 10px 10px;
`;

export const DescImg = styled.img`
  /* margin:5px; */
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

/**
 * @todo button이라는 hover하면 색이 변하는 컴포넌트를 만들어서
 * css 통일
 */
export const DescImgDel = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 0.3s;
  cursor: pointer;
  display: Flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  > img {
    width: 14px;
    height: 14px;
  }
`;
