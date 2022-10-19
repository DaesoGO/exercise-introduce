import styled from "styled-components";

export const Wrapper = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Content = styled.section`
    margin:100px 50px 20px 50px;
    max-width:1100px;
    display:grid;
    
    grid-template-rows:repeat(3,1fr);
    /* grid-template-columns:repeat(3,1fr); */
    grid-template-columns:repeat(auto-fill,minmax(100px,300px));
    justify-content:center;
    
    row-gap:30px;
    column-gap:30px;

    @media (max-width:1120px) {
        row-gap:5px;
        column-gap:5px;
    }

    > a {
        text-decoration:none;
        background-color:black;
        box-sizing:border-box;
        /* height:300px; */
        width:100%;
        height:100%;
    }

`

// 그냥 각각 사이즈를 줘야할 듯

export const WriteB = styled.div`
    box-sizing:border-box;
    width:100%; 
    height:300px;
    background-color:#ebebeb;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:gray; 
    cursor:pointer;
`

export const WirteBPlus = styled.div`
    font-size:100px;
    @media (max-width:800px){
        font-size:70px;
    }
    font-weight:bold;
`


const WriteBCommentFont = styled.p`
    @media (max-width:800px){
        font-size:13px;
    }
    font-size:15px;
`

export const WirteBComment = styled(WriteBCommentFont)`
    font-weight:bold;
    margin:0px;
`
export const WriteBSubComment = styled(WriteBCommentFont)`
    margin-top:7px;
`

export const PostWrapper = styled.div`
    position:relative;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const PostImg = styled.img`  
    width:100%;
    height:100%;
    object-fit:cover;
    /* width:100%; */
`

export const PostInfo = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    position:absolute;
    top:0px;
    left:0px; 
    color:white;  
    font-weight:bold;
    font-size:x-large;
    display:flex;
    justify-content:center;
    align-items:center;
`


export const Loading = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    margin-top:20px;
    margin-bottom:80px;
    border:solid white 10px;
    border-top:solid #808080 10px;
    box-sizing:border-box;

    @keyframes rotateLoading {
        from {
            transform: rotate(0deg)
        }
        to{
            transform:rotate(360deg)
        }
    }

    animation:rotateLoading 1s infinite;
`