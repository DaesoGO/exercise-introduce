import styled from "styled-components";

export const Main = styled.div`
    width: 54%;
    height: 98%;
    background-color: skyblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Container = styled.div`
    width: 43%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin-top: 15px;
    }
`
export const ValueWrapper = styled.div`
    width: 100%;
    height: 90%;
    padding: 10px;
    position: relative;
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 10px;
    overflow-y: scroll;
`
export const ValueContainer = styled.div`
    width: 100px;
    height: 110px;
    padding: 5px;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 90px;
        height: 90px;
    }
    h5 {
        margin-top: 5px;
    }
`