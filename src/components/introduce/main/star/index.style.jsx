import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const exerciseTitle = styled.span`
    font-size: 28px;
    font-weight: bold;
`
export const exercisePartContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2%;
    > span {
        color: #A4A4A4;
    }
`
export const exerciseInfoContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    color: #1f1f1f;
    word-break: break-all;
    font-weight: bold;
`