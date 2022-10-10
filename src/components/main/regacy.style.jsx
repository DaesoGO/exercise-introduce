import styled, { keyframes } from "styled-components";
const titleAnimation = keyframes`
    0% { 
        transform: translate(-1000, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`
const buttonAnimation = keyframes`
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
`
export const Main = styled.div`
    width: 100vw;
    height: 1280px;
    display: flex;
    align-items: left;
    flex-direction: column;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${(props) => props.bg});
    background-size: cover;
`
export const line = styled.div`
    width: 100vw;
    height: 15px;
    background-color: #a8a8a8;
`
export const BackgroundImage = styled.img`
    width: 100vw;
    height: 100vh;
`
export const textBox = styled.div`
    display: flex;
    margin-top: 15%;
    justify-content: center;
    align-items: left;
    flex-direction: column;
`
export const mainTitle = styled.span`
    font-size: 55px;
    margin-left: 40px;
    margin-bottom: 40px;
    color: #dadada;
    transform: translate(-1000px, 0);
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: ${titleAnimation};
`
export const subTitle = styled.span`
    font-size: 25px;
    margin-left: 60px;
    margin-bottom: 5px;
    color: #dadada;
    transform: translate(-1000px, 0);
    animation-duration: 1s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
    animation-name: ${titleAnimation};
`
export const startButton = styled.div`
    display: flex;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 50px;
    margin-left: 70px;
    margin-right: auto;
    color: #eee;
    background-color: gray;
    border-radius: 5px;
    opacity: 0;
    transform: translate(-1000px, 0);
    cursor: pointer;
    animation: ${buttonAnimation};
    animation-delay: 1.8s;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    transition: 0.15s ease-in-out;
    &:hover {
        opacity: 0.8
    }
`
export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const mainTitle2 = styled.span`
    font-size: 55px;
    margin-left: 40px;
    margin-bottom: 40px;
    color: #dadada;
    transition: .5s all;
`
export const exerciseContainer = styled.div`
    width: 30%;
    min-width: 450px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    justify-content: space-evenly;
`
export const exerciseBox = styled.div`
    width: 21%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
    border-radius: 5px;
    box-shadow: 3px;
    cursor: pointer;
    &:hover {
    }
`
export const pictogramImg = styled.img`
    width: 80%;
    aspect-ratio: 1 / 1;
`