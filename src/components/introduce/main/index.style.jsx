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
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  height: 30px;
  align-items: center;
  gap: 5px;
  display: flex;
  flex-direction: row-reverse;
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 20px;
  margin-top: 5px;
  left: 0;
  color: #222;
`;

export const Muscle = styled.h3`
  float: right;
  color: #888;
  font-size: 13px;
`;
