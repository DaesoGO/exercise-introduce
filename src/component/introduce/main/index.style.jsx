import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DisplayContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
`;

export const Title = styled.h1`
  position: absolute;
  left: 0;
`;

export const Muscle = styled.h3`
  float: right;
  margin-left: 10px;
`;
