import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 25px;
  }
  > img {
    width: 120px;
    -webkit-user-drag: none; 
    @media (max-width:1000px){
      width:80px;
    }
  }
  >div{
    font-size:35px;
    margin-bottom:0px;
    @media (max-width:800px) {
      font-size:25px; 
    }
  }
  > label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: white;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #0095f5;
    cursor: pointer;
    border-radius: 0.25em;
  }
  > input {
    display: none;
  }
`;
