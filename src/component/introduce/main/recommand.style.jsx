import styled from "styled-components";

export const Thumbnail = styled.div`
  width: 100%;
  height: 85%;
  background-color: purple;
`;

export const Main = styled.div`
  width: 90%;
  height: calc(20% - 11px);

  border-radius: 0px 0px 8px 8px;

  background-color: #cfffe5;
  margin-bottom: 11px;

  display: flex;
  justify-content: space-between;
`;

export const SplitLine = styled.div`
  width: 20px;
  height: 100%;

  background-color: white;
`;

export const Title = styled.h4`
  margin: 5px auto 10px auto;
  text-align: center;
`;

export const RecommandBox = styled.div`
  width: 100%;
  height: 85%;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 5px;

  text-decoration: underline;
  color: black;

  :hover {
    color: blue;
    transition: 0.5s;
  }
`;
