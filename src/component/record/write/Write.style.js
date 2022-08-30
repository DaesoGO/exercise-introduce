import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(55vw + 35px);
  max-height: 735px;
  width:55vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.header`
  height: 35px;
  box-sizing:border-box;
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-between;
  align-items: center;
  > button {
    background: none;
    border: none;
    color: #0095f5;
    font-weight: bold;
    font-size: 17px;
    margin:0px 17px;
    cursor:pointer;
  }
`;
