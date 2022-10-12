import styled from "styled-components";
export const monitorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const monitorDisplay = styled.div`
    width: 100%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #EDEEF0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
export const monitorCam = styled.div`
    width: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: black;
`
export const monitorDisplayBottom = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #6798e7;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: inset 0px -2px 5px #0055df, 0px 15vh 40px -40px black;
`
export const monitorArm = styled.div`
    width: 20%;
    height: 10vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    background-color: #6798E7;
    box-shadow: inset 0px -7px 5px #0055df;
`
export const AppContainer = styled.div`
    width: 95%;
    height: 50vh;
    position: relative;
    border: 3px solid black;
    border-radius: 3px;
    margin-right: 10px;
`;