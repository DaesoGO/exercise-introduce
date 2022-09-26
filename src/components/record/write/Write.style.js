import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition:width 1s;
  width:${(props) => props.width+"vw"};
  max-width:${(props) => props.maxWidth+"px"};

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

export const ContentWrapper = styled.div`
  display:flex;
  /* display:flex;
  justify-content:center;
  align-items:center; */
`

export const ImgArea = styled.section`  
  // 정방형을 유지해야 하기 때문에
  height:55vw;
  max-height:700px;
  width:55vw;
  
  max-width: 700px;
  position:relative;
  transition:all 0s;
`

export const WriteArea = styled.section`
  overflow-y:hidden;
  height:55vw;
  max-height:700px;
  width:35vw;
  /* width:40%; */
  max-width:400px;
  display: flex;
  flex-direction:column;

`