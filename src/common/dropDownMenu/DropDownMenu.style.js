import styled from "styled-components";

export const Wrapper = styled.details`
    width:100%;
    background-color:rgba(0,0,0,0);

`

export const Title = styled.summary`
    height:45px;
    display:flex;
    align-items:Center;
    justify-content:space-between;
    background-color:rgba(0,0,0,0);
    padding:0px 16px;

    > img{
        height:38px;
        user-select:none;
    }
`  

export const Content = styled.div`
    padding:5px 16px;
`


