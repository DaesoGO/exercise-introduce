import styled from "styled-components";

export const Question = styled.div`
  width: calc(100% - 20px);
  height: 40px;
  padding: 10px;

  border-bottom: 1px solid black;
  background-color: white;

  display: flex;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: row;

  text-align: left;
  align-items: center;
`;

export const Title = styled.a`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;

  font-weight: bolder;
`;

export const Chat = styled.div`
  width: 25%;

  text-align: right;

  margin-left: 20px;
  color: orangered;
`;

export const Writer = styled.div`
  width: 25%;
  padding-left: 10px;
  color: black;

  box-sizing: border-box;
`;
