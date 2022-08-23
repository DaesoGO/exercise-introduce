import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vw;
  max-height: 600px;
  width:50vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.header`
  height: 35px;
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
