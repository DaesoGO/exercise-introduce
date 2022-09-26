import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom:10px;
    width:130px;
    height:30px;
    background-color:rgba(0,0,0,0.7);
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:Center;
`

export const Ranger = styled.input.attrs({type:"range",})`
	-webkit-appearance: none;
	background: #000000;
    height:1px;
    width:100px;
    ::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width:15px;
        height:15px;
        border-radius:50%;
        background:#ffffff;
        cursor:pointer;
    }
    ::-ms-track{
        cursor:pointer;
        background:#ffffff;
    }
    ::-moz-range-thumb{
        background-color:#ffffff;
        cursor:pointer;
    }
`