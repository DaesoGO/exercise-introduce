import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
`

export const Section = styled.section`
    margin:40px 30px;
    display:flex;
    height:fit-content;
    max-width:935px;
    min-height:450px;
    max-height:600px;
`

export const ImgWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
`
export const Img = styled.img`
    object-fit:contain;
    max-height:600px;
    max-width:600px;
`


export const Article = styled.article`
    width:335px;
    height:auto;
    background-color:powderblue;
`