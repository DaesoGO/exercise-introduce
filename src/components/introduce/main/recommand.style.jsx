import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const upperContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const inputForm = styled.input`
    width: 40%;
    height: 40px;
    border: 1px solid #6797e7;
    outline: none;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 15px;
`
export const buttonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
`
export const divButton = styled.button`
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #6798e7;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: .15s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #5687d6;
    }
`
export const lowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const postContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const authContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const writerName = styled.span`
    color: #a4a4a4;
    font-size: 16px;
`
export const postName = styled.span`
    color: #1f1f1f;
    font-size: 18px;
    font-weight: bold;
`
export const commentContainer = styled.div`
    display: flex;
    gap: 10px;
`
export const commentCount = styled.span`
    color: #a4a4a4;
    font-size: 16px;
`
