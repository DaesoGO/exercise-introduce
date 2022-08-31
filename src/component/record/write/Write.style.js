import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:55vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.header`
  height: 46px;
  width:100%;
  box-sizing:border-box;
`;


export const MenuInner = styled.div`
  height:100%;
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
    background: none;
    border: none;
    color: #0095f5;
    font-weight: bold;
    font-size: 16px;
    margin:0px 17px;
    cursor:pointer;

`

export const ButtonWithSvg = styled(Button)`
  margin-left:10px;
  >img{
    width:28px;
  }
`

export const Content = styled.div`  
  height:55vw;
  max-height:700px;
  width:100%;
  position:relative;
`