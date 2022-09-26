import React, { useEffect, useState } from "react";
import axios from 'axios';

import * as R from './recommend.style.jsx'
import './recommend.css'

function Recommend(){

    let [exerciseName, setExerciseName] = useState();
    let [exerciseExplain, setExerciseExplain] = useState();
    let [exerciseImg, setExerciseImg] = useState();

    let [food1Name, setFood1Name] = useState();
    let [food2Name, setFood2Name] = useState();
    let [food3Name, setFood3Name] = useState();
    
    let [food1Img, setFood1Img] = useState();
    let [food2Img, setFood2Img] = useState();
    let [food3Img, setFood3Img] = useState();

    let [food1Explain, setFood1Explain] = useState();
    let [food2Explain, setFood2Explain] = useState();
    let [food3Explain, setFood3Explain] = useState();

    const body = {
        exercise:{
            exerciseName:"팔굽혀펴기",
            aboutExercise:"사람이 아무런 도구 없이도 할 수 있는 순수 맨몸 운동 중 하나이며, 자신의 몸을 팔로 밀어내야 하기 때문에 꽤나 근력이 붙는다. 정자세로 수행 시 자신의 몸무게의 3분의 2, 약 60~70% 정도의 무게를 들어올리는 것과 같다고 한다. 보다 정확한 무게를 알아보는 쉬운 방법은 체중계 위에 양손을 올리고 한번 내려갔다 오는 것이다.",
            exerciseImg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjVfMjEz%2FMDAxNjAxMDM2NTI1Mjg3.cQDx5KIogjVgY5RUMiKpKt3P_u7v86OAs0vhHpF9FMUg.vccV2mh2wnOBATVrP-MGWv3ohUopg6FS7xAK480p3SYg.JPEG.qhtjdtmdgh1%2FKakaoTalk_20200925_211848401.jpg&type=sc960_832"
        },
        food:{
            foodName1:"바나나",
            foodName2:"닭가슴살",
            foodName3:"고구마",
            aboutFood1:"중간크기의 바나나 118g 기준 105kcal이다.",
            aboutFood2:"중간크기의 바나나 118g 기준 105kcal이다.",
            aboutFood3:"중간크기의 바나나 118g 기준 105kcal이다.",
            foodImg1:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTdfODkg%2FMDAxNjYwNzI0NTI3Njc2.X5dALAnhkzqmuItSSuylBLuxQMKvsyor41MkT27tE74g.9ygoZSGxEzH6wiAQHD8BK1oCHnocX6ph1OS9GBU_3yMg.PNG.no1dreamfit%2F%25B0%25F8%25BA%25B9_%25B9%25D9%25B3%25AA%25B3%25AA_%25BE%25EE%25B6%25B2%25B0%25A1%25BF%25E4_%25B8%25C1%25C6%25F7%25C7%25EF%25BD%25BA%25C0%25E5_%25B9%25DD%25BF%25F9%25B5%25BFpt_%25BF%25B5%25C5%25EB%25C7%25C7%25C6%25BC_%25B5%25FB%25BA%25C0%25C1%25FC_6.png&type=sc960_832",
            foodImg2:"https://img-cf.kurly.com/shop/data/goodsview/20211123/gv30000238977_1.jpg",
            foodImg3:"https://src.hidoc.co.kr/image/lib/2022/4/13/1649807075785_0.jpg"
        }
    };

    useEffect(()=>{
        axios.get('')
        .then((result)=>{
            //setExerciseName(),setExerciseExplain(),setFoodName(),setFoodExplain()
        })
        .catch(()=>{})
        setExerciseName(body.exercise.exerciseName),
        setExerciseExplain(body.exercise.aboutExercise),
        setExerciseImg(body.exercise.exerciseImg),
        setFood1Name(body.food.foodName1),
        setFood2Name(body.food.foodName2),
        setFood3Name(body.food.foodName3),
        setFood1Img(body.food.foodImg1),
        setFood2Img(body.food.foodImg2),
        setFood3Img(body.food.foodImg3),
        setFood1Explain(body.food.aboutFood1),
        setFood2Explain(body.food.aboutFood2),
        setFood3Explain(body.food.aboutFood3);
    },[])

    return(
        <R.HeadBox>
            <R.Box>
                
                <R.ExercisePart className="box">
                    <R.ExerciseImg src={exerciseImg}></R.ExerciseImg>
                    <R.Title>{exerciseName}</R.Title>
                    <R.Title_Datail>{exerciseExplain}</R.Title_Datail>
                </R.ExercisePart>

                <R.FoodPart className="box">

                    <R.FoodImg>
                        <R.LargeImgPart>
                            <R.SmallImgPart>
                                <R.Img src={food1Img}></R.Img>
                            </R.SmallImgPart>

                            <R.SmallImgPart>
                                <R.Img src={food2Img}></R.Img>
                                <R.Img src={food3Img}></R.Img>
                            </R.SmallImgPart>

                        </R.LargeImgPart>
                    </R.FoodImg>

                </R.FoodPart>
                
            </R.Box>

            <R.Comment className="box">
                <R.Text>오늘은 '이거' 어때요?</R.Text>
                <R.Detail>오늘,</R.Detail>
                <R.Detail>어떤 운동을 하거나</R.Detail>
                <R.Detail>어떤 음식을 먹을지</R.Detail>
                <R.Detail>고민이셨던 분들을 위한</R.Detail>
                <R.Detail>'오늘의 추천 사항'</R.Detail>
            </R.Comment>

        </R.HeadBox>
        
    )
}

export default Recommend