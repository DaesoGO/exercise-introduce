import styled from "styled-components";

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

const button = styled.button`
    position:absolute;
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