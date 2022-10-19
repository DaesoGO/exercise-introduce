import styled from "styled-components";

export const Main = styled.div`
    width: 54%;
    height: 94%;
    background-color: white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
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
    /* background-color: #eeeeee; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 10px;
    overflow-y: scroll;
    border-radius: 10px;
`
export const ValueContainer = styled.div`
    width: 100px;
    height: 110px;
    padding: 5px;
    background-color: white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

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
    border-radius: 10px;
`