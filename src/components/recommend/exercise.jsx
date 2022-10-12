import * as S from './exercise.style'
import logo from './logo.png'

import Dumbbell from '../../static/recommend/exercise/dumbbell.png'

import { useState, useEffect } from 'react'
import axios from 'axios'

const dummy = [
    {
        src: Dumbbell,
        name: "팔운동"
    }
]

const Render = () => {

    let [name, setName] = useState()

    // useEffect(()=>{
    //     axios.get('')
    //     .then((result)=>{console.log(result)})
    // })

    return <S.Main>
        {/* <img src={logo} width='350px' height='350px'></img> */}
        <S.Img>
            <img src={Dumbbell} width='250px' height='250px'></img>
        </S.Img>
    </S.Main>
}
export default Render