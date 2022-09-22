import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  > hr {
    height: 1px;
    background-color: #bdbebd;
    border: none;
    margin: none;
  }
`;

export const ExeKindWrapper = styled.div`
  overflow-y: auto;

  height:30vw;
  max-height:200px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e4e4e4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`;

export const ExeKind = styled.div`
  margin:10px 0px;
  font-size: small;
  max-width: calc(85% - 10px);
  padding: 15px 15px;
  border-radius: 15px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
`;
