import styled from "styled-components";

export const Main = styled.div`
    width: 36%;
    height: 94%;
    background-color: white;    
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`

export const LeftExercise = styled.div`
    width: 45%;
    height: 90%;
    border-radius: 15px;
    background-color: white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
`

export const RightExercise = styled.div`
    width: 45%;
    height: 90%;
    border-radius: 15px;
    background-color: white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
`

export const ExerciseContent = styled.div`
    width: 70%;
    height: 40%;
    padding-left: 30px;
    padding-top: 20px;
    box-sizing:border-box;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-left: 16%;
    margin-top: 10px;
    
    > img {
        margin-top: 5%;
        width: 80%;
        height: 70%;
    }
`
export const ContentWrapper = styled.div`
    height:60%;
    width:100%;
    position: relative;
    >span{
        height:10%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`


export const Text = styled.div`
    height:90%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    box-sizing:border-box;

    font-size: 13px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

`

export const Temp= styled.div`
    position:absolute;
    bottom:0px;
    left:0px;
    width:100%;
    height:20px;
    background-color:white;
    border-radius:0px 0px 15px 15px;
`