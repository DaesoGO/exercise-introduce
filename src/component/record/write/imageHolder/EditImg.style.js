import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
    border-radius:0px 0px 10px 10px;
`

export const ImgContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

export const Img = styled.img`
    width:100%;
    height:100%;
    border-radius:0px 0px 10px 10px;
    object-fit:cover;
`

export const Button = styled.button`
    border-radius:50%;
    border:none;
    background-color:rgba(0,0,0,0.7);
    width:35px;
    height:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:background-color 0.3s;
    :hover{
        background-color:rgba(0,0,0,0.5)
    }
    > img{
        width:20px;
        height:20px;
    }
`

export const GoLeftButton = styled(Button)`
    position:absolute;
    top: 50%;
    left:11px;
    >img{
        margin-left:6px;
    }
`
export const GoRightButton = styled(Button)`
    position:absolute;
    top:50%;
    right:11px;
    >img{
        margin-left:3px;
    }
`

export const EditOption = styled.div`
    position:absolute;
    ${(props) => props.left && css`left:${(props) => props.left+"px"};`};
    ${(props) => props.right && css`right:${(props) => props.right+"px"};`}
    bottom:15px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`

export const OptionInfo = styled.div`
    width:100px;
    height:100px;
    background-color:powderblue;
`

// Button은 OptionButton에서도 쓴다
/**
 * @todo button common으로 빼기
 */
export default {Button}