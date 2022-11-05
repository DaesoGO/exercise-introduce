import * as S from './exercise.style'
import logo from './logo.png'

import Dumbbell from '../../static/recommend/exercise/dumbbell.png'
import Hulahoop from '../../static/recommend/exercise/hulahoop.png'
import Jumpping from '../../static/recommend/exercise/jumpping.png'
import Pushup from '../../static/recommend/exercise/pushup.png'
import RunningMachine from '../../static/recommend/exercise/runningmachine.png'
import SitUP from '../../static/recommend/exercise/sit_up.png'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Render = ({
    exercises
}) => {

    let [img, setImg] = useState()
    let [title, setTitle] = useState()
    let [muscle, setMuscle] = useState()
    let [difficulty, setDifficulty] = useState()
    let [explanation, setExplanation] = useState()
    let [precautions, setPrecautions] = useState()
    let [videoFile, setVideoFile] = useState()
    console.log(exercises)
    return <S.Main>
        <S.LeftExercise>
            {
                exercises.length >= 2 ?
                <>
                <Content
                    img={Pushup}
                />
                    <S.ContentWrapper>
                    <span>{exercises[0].title}</span>
                    <S.Text>{exercises[0].explanation}</S.Text>
                    </S.ContentWrapper>
                </> : <></>
            }
        </S.LeftExercise>

        <S.RightExercise>
            {
                exercises.length >= 2 ?
                <>
                    <Content
                        img={SitUP}
                    />
                    <S.ContentWrapper>
                    <span>{exercises[1].title}</span>
                    <S.Text>{exercises[1].explanation}
                    </S.Text>
                    <S.Temp></S.Temp>
                    </S.ContentWrapper>
                </>
                : 
                <></>
            }

        </S.RightExercise>
    </S.Main>
}

const Content = ({
    img
}) => {
    console.log(img)
    return <S.ExerciseContent>
        <img src={img}></img>
    </S.ExerciseContent>
}

export default Render