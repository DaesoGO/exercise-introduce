import styled from "styled-components";

export const Main = styled.div`
    width: 42%;
    height: 94%;
    background-color: #A0BAE2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`

export const Container = styled.div`
    width: 47%;
    height: 95%;
    position: relative;
`

export const HumanContainer = styled.div`
    width: 50%;
    height: 70%;
    position: relative;
    top: 50px;
    left: 15%;
    h5 {
        font-size: 13px;
        font-weight: 400;
        color: #333;
    }
    .weight {
        position: absolute;
        bottom: -20px;
        left: 60%;
        transform: translateX(-50%);
        font-weight: bold;
    }
    .height {
        position: absolute;
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
        font-weight: bold;
    }
`
export const Name = styled.div`
    position: absolute;
    left: 60%;
    transform: translateX(-50%);
    bottom: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    text-decoration : underline;
`
export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const InfoMain = styled.div`
    width: 80%;
    height: 35px;
    border-bottom: solid 0.1em #444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-size: 14px;
        font-weight: 600;
        color: #222;
    }
    h5 {
        font-size: 13px;
        font-weight: 500;
        color: #333;
    }
`