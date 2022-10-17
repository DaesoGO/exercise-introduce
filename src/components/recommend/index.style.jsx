import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    /* background-color: #F2F6FD; */
    background-color: white;
`
export const Main = styled.div`
    width: 70%;
    height: 95%;
    position: absolute;
    bottom: 0;
`
export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const UpperContainer = styled.div`
    display: flex;
    height: 47%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -60px;
`
export const LowerContainer = styled.div`
    display: flex;
    height: 47%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -80px;
`