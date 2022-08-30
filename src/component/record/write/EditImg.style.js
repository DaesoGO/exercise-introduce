import styled,{ css } from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:calc(100% - 34px);
    position:relative;
    border-radius:0px 0px 10px 10px;
`

export const ImgContainer = styled.img`
    width:100%;
    height:100%;
    border-radius:10px;
    object-fit:cover;
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
    width:35px;
    height:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    > img{
        width:20px;
        height:20px;
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
export const fitSizeButton = styled(button)`
    bottom:15px;
    left:15px;
`
export const zoomButton = styled(button)`
    bottom:15px;
    left:60px;
`
export const addFileButton = styled(button)`
    bottom:15px;
    right:15px;
`