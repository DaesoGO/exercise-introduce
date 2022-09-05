import styled from "styled-components";

export const Wrapper = styled.ul`
    width:100px;
    margin-bottom:10px;
    border-radius:10px;
    background-color:rgba(0,0,0,0.7);
    list-style:none;
    color:white;
    padding:0px;  
    >hr{
        margin:0px;
    }
`

export const AspectOption = styled.li`
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    font-size:14px;
    font-weight:600;
    >img{
        width:25px;
    }

`