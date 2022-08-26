import styled from "styled-components";

export const MainContainer = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StarContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: left;

  padding-left: 10px;
  box-sizing: border-box;

  width: 100%;
  height: 50px;
  background-color: powderblue;
  color: white;

  border-radius: 8px;

  h4: {
    font-size: 25px;
    font-weight: bolder;
  }

  p: {
    font-size: 30px;
  }
`;
