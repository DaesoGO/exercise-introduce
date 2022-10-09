import styled, { keyframes } from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 0px;
    min-height: 100%;
    /* background-color: red; */

`
export const TopContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
export const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
`
export const SideImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
    transition: 2000ms;
    transform: translateX(${({transfrom}) => transfrom}%);
`
export const Explanation = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 70px;
`
export const LogoImage = styled.img`
    margin-top: 100px;
    opacity: 0.8;
    width: 60%;
`
export const Name = styled.h1`
    font-size: 60px;
    font-weight: 700;
    color: #222;
`
export const Content = styled.div`
    width: 40%;
    color: #555;
`