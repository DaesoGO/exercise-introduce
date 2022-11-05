import * as S from './index.style'
import UserInfo from './userInfo'
import History from './history'
import Plate from './plate'
import Exercise from './exercise'
import { useEffect } from 'react'
import api from '../../util/api'
import { useState } from 'react'

const Render = () => {
    const [getFoods, setFoods] = useState([])
    const [getExercises, setExercises] = useState([])

    useEffect(() => {
        api.get('/recommend/fruit')
        .then((result) => {
            console.log(result.data.data)
            setFoods(result.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        api.get('/recommend/exercise')
        .then((result) => {
            // console.log(result.data.data)
            console.log(result.data.data)
            setExercises(result.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return <S.Container>
        <S.Main>
            <S.ContentContainer>
                <S.UpperContainer>
                    <UserInfo/>
                    <History/>
                </S.UpperContainer>
                <S.LowerContainer>
                    <Plate foods={getFoods}/>
                    <Exercise exercises={getExercises}/>
                </S.LowerContainer>
            </S.ContentContainer>
        </S.Main>
    </S.Container>
}
export default Render;