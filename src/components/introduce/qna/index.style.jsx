import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  width: 80%;
`;

export const Top = styled.div`
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border: 2px solid #0a1e40;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
`;

export const FunctionButton = styled.button`
  width: 10%;
  height: 100%;
  background-color: #0a1e40;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: #233c68;
  }
`;

export const SearchButton = styled(FunctionButton)`
  width: 13%;
  border-radius: 0 10px 10px 0;
`;

export const Questions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
