import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position:absolute;
    ${(props) => props.position};
    bottom:15px;
    display:flex;
    flex-direction:column;
    align-items:${(props) => props.buttonPosition == "left" ? "flex-start" : "flex-end"};
`

// 임시

export const Button = styled.button`

`