import styled,{ css } from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

export const ImgContainer = styled.img`
    width:100%;
    height:100%;
`

/**
 * @todo left, right, top, bottom을 멋지게 어떻게 사용할까?
 * 요소가 있을 수도 있고 없을 수도 있어서 저렇게 함
 * 컴포넌트로 따로 빼야하는가?
 */
const button = styled.button`
    position:absolute;
    border-radius:50%;
    border:none;
    background-color:black;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    > img{
        width:17px;
        height:17x;
    }
`

export const GoLeftButton = styled(button)`
    top: 50%;
    left:11px;
    >img{
        margin-left:6px;
    }
`

export const GoRightButton = styled(button)`
    top:50%;
    right:11px;
    >img{
        margin-left:3px;
    }
`