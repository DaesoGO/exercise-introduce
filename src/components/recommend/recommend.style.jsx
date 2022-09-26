import styled from "styled-components";

export const HeadBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Box = styled.div`
    width: 1200px;
    height: 1000px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    margin-left: -200px;
`

export const ExercisePart = styled.div` //운동 부분
    width: 70%;
    height: 600px;
    background-color: #eee;
    margin-right: 20px;
    margin-top: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 35px;
`

export const FoodPart = styled.div` //음식 부분
    width: 100%;
    height: 100%;
    margin-left: 20px;
    margin-top: 13%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
`

export const ExerciseImg = styled.img` //운동사진
    width: 300px;
    height: 250px;
    background-color: white;
    margin-top: 15px;
`

export const Title = styled.h2` //운동이름
    margin-top: 50px;
`

export const Title_Datail = styled.h3` //운동설명
    font-size: 17px;
    margin-top: 40px;
    line-height: 30px; 
`

export const FoodImg = styled.div` //음식 사진 부분
    width: 100%;
    height: 40%;
    display: flex;
    background-color: #eee;
    padding: 10px;
    border-radius: 10px;
`

export const LargeImgPart = styled.div` //음식 사진 이미지 부분
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const SmallImgPart = styled.div` //음식 사진 이미지 부분
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Img = styled.img` //음식 사진 이미지
    width: 92%;
    height: 100%;
    margin:10px;
    &:hover{
        filter: brightness(90%);
    }
`

export const Comment = styled.div` //오늘은 이거 어때요 부분
    width: 300px;
    height: 300px;
    margin-left: 150px;
    margin-right: -200px;
    margin-top: 270px;
    display: flex;
    flex-direction: column;
`

export const Text = styled.h1` //오늘은 이거 어때요 
    font-size: 25px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 50px;
`

export const Detail = styled.h3` //오늘은 이거 어때요 설명
    font-size: 17px;
    margin-top: -10px;
    line-height: 40px; 
`