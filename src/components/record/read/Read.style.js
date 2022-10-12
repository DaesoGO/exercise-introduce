import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  margin: 40px 30px;
  display: flex;
  height: fit-content;
  max-width: 935px;
  min-height: 450px;
  max-height: 600px;
  border: 1px solid rgb(219, 219, 219);
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(250, 250, 250);
  border-right: solid 1px rgb(239, 239, 239);
`;
export const Img = styled.img`
  object-fit: contain;
  max-height: 600px;
  max-width: 600px;
`;

// 239, 239, 239
export const Article = styled.article`
  width: 335px;
  height: auto;
  hr {
    height: 1px;
    background-color: rgb(239, 239, 239);
    border: none;
    margin: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: Center;
  height: 45px;
  > * {
    margin: 10px;
  }
`;
export const UserName = styled.h3``;
export const Date = styled.p``;

export const Content = styled.div`
  height: auto;
  width: 100%;
`;
export const ItemRowWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e4e4e4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  height: auto;
`;
export const rowItem = styled.div`
  display: inline-block;
  max-width: none;
  cursor:pointer;
  margin:0px 7px 10px 10px;
  font-size: small;
  max-width: calc(85% - 10px);
  padding:10px 15px;
  border-radius: 15px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Comment = styled.p`    
    padding:15px;
`
