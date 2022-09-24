import styled from "styled-components";

export const HeadBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    //background-color: aliceblue ;
    
`

export const Box = styled.div`
    width: 850px;
    height: 600px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    margin-left: -200px;
`

export const ExercisePart = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
    margin-right: 20px;
    margin-top: 100px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 35px;
`

export const FoodPart = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 20px;
    margin-top: 20px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
`

export const ExerciseImg = styled.img`
    width: 300px;
    height: 300px;
    background-color: white;
`

export const FoodImg = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    background-color: #787878;
    padding: 10px;
    border-radius: 10px;
`

export const Title = styled.h2`
    margin-top: 50px;
`

export const Title_Datail = styled.h3`
    font-size: 17px;
    margin-top: 40px;
    line-height: 30px; 
`

export const Comment = styled.div`
    width: 300px;
    height: 300px;
    margin-left: 150px;
    margin-right: -200px;
    margin-top: 270px;
    display: flex;
    flex-direction: column;
`

export const Text = styled.h1`
    font-size: 25px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 50px;
`

export const Detail = styled.h3`
    font-size: 17px;
    margin-top: -10px;
`

export const LargeImgPart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const SmallImgPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Img1 = styled.img`
    width: 90%;
    height: 100%;
    margin:10px;
    &:hover{
        filter: brightness(90%);
    }
`