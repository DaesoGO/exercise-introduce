import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    background-color: #f8f8f8;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`
export const logoContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Logo = styled.img`
    width: 50px;
    aspect-ratio: 1 / 1;
`
export const logoTitle = styled.span`
    color: ${(props) => props.isvisible ? 'black' : '#f8f8f8'};
    font-size: 25px;
    font-weight: bold;
    user-select: none;
    transition: .15s ease-in-out;
`
export const navigator = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: space-between;
`
export const container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    transition: .15s ease-in-out;
    &:hover {
        background-color: #e6e6e6;
    }
`
export const menu = styled.span`
    color: black;
    font-size: 25px;
    font-weight: bold;
    user-select: none;
`
export const loginForm = styled.div`
    width: 15%;
    display: flex;
    gap: 10px;
`
export const loginText = styled.span`
    color: black;
    font-size: 20px;
`