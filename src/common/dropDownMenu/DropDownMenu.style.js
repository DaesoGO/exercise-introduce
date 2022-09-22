import styled from "styled-components";

export const Wrapper = styled.details`
    border-top:1px solid #bdbebd ;
    width:100%;
`

export const Title = styled.summary`
    height:45px;
    display:flex;
    align-items:Center;
    justify-content:space-between;
    padding:0px 16px;
    > img{
        height:38px;
        user-select:none;
    }
`  

export const Content = styled.div`
    padding:5px 16px;
`