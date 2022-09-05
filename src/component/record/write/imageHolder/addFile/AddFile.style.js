import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom:10px;
    border-radius:10px;
    background-color:rgba(0,0,0,0.7);
    height:130px;

    display:flex;
    align-items:center;

    padding:0px 20px;
    box-sizing:border-box;

    max-width:670px;
    @media (max-width:1272px) {
        max-width:calc(55vw - 30px);
    }

    > label{
        display:inline-block;
        cursor:pointer;
        width:50px;
        height:50px;
        background-color:#8d8a8a;
        border-radius:50%;
        display:Flex;
        justify-content:center;
        align-items:Center;
        margin-right:20px;
        margin-left:10px;
    }
    >input{
        display:none;
    }

`

export const ImgContainer = styled.div`
    
    overflow-y:scroll;
`

export const DescImg = styled.img`
    margin:5px;
    width:100px;
    height:100px;
    border-radius:10px;
`