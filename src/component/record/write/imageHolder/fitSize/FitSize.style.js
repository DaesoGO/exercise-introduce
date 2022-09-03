import styled from "styled-components";

export const Wrapper = styled.ul`
    width:100px;
    margin-bottom:20px;
    border-radius:10px;
    background-color:rgba(0,0,0,0.7);
    list-style:none;
    color:white;
    padding:0px;  
`

export const AspectOption = styled.li`
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    >img{
        width:20px;
    }
`