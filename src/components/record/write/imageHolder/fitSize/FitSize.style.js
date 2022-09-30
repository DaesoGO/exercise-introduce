import styled from "styled-components";

export const Wrapper = styled.ul`
    width:100px;
    margin-bottom:10px;
    border-radius:10px;
    list-style:none;
    color:white;
    padding:0px;  
    >hr{
        margin:0px;
    }
    > :first-child{
        border-radius:10px 10px 0px 0px;
    }
    > :last-child{
        border-radius:0px 0px 10px 10px;
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
    background-color:rgba(0,0,0,0.7);

    cursor:pointer;
    >img{
        width:25px;
    }
    :hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
`