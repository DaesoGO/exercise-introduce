import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  width: 70%;
`;

export const Top = styled.div`
  width: 100%;
  height: 50px;

  padding-bottom: 10px;
  border-bottom: 3px solid black;

  display: flex;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  width: 70%;
  height: 100%;
`;

export const SearchBar = styled.input`
  width: calc(100% - 50px);
  height: 100%;

  background-color: #f1f1f1;

  border-radius: 20px 0px 0px 20px;
  border: none;
  padding-left: 10px;

  box-sizing: border-box;

  outline: none;
  font-size: 15px;
`;

export const Search = styled.button`
  width: 50px;
  height: 100%;

  color: black;
  background-color: #f1f1f1;

  border: none;
  border-radius: 0px 20px 20px 0px;
  box-sizing: border-box;
  padding-right: 8px;

  cursor: pointer;
  :hover {
    transition: 0.5s;
    background-color: yellow;
  }
`;

export const Register = styled.button`
  width: 15%;
  height: 100%;

  background-color: purple;
  color: white;

  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding-right: 8px;

  cursor: pointer;
  :hover {
    transition: 0.5s;
    background-color: yellow;
  }
`;

export const Options = styled.button`
  width: 10%;
  height: 100%;
  background-color: black;
  color: white;

  border: none;
  border-radius: 20px;

  cursor: pointer;
  :hover {
    transition: 0.5s;
    background-color: yellow;
    color: black;
  }
`;

export const Questions = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;
