import * as S from './userInfo.style'
import person from './person.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

const dummy = [
    ["이름", "김건호"],
    ["나이", "17"],
    ["키", "170cm"],
    ["몸무게", "100kg"],
    ["BMI", "19"],
    ["기초대사량", "1500kcal"],
    ["권장섭취량", "2000kcal"]
]

const Render = () => {

    // useEffect(() => {
    //     axios.get('')
    //     .then((result)=>{setName(); setAge(); setHeight(); setWeight(); setBMI(); setBasalMetabolism(); setRecommendedIntake();})
    // }, [])

    // let [name, setName] = useState()
    // let [age, setAge] = useState()
    // let [height, setHeight] = useState()
    // let [weight, setWeight] = useState()
    // let [BMI, setBMI] = useState()
    // let [basalMetabolism, setBasalMetabolism] = useState()
    // let [recommendedIntake, setRecommendedIntake] = useState()

    return (
        <S.Main>
            <S.Container>
                <S.HumanContainer>
                    <img src={person} width='155px' height='243px'></img>
                    <h5 className='weight'>
                        100kg
                    </h5>
                    <h5 className='height'>
                        170cm
                    </h5>   
                </S.HumanContainer>
            </S.Container>
            <S.Container>
                <S.InfoContainer>
                    {
                        dummy.map((element, idx) => {
                            return <Info
                                key={idx}
                                title={element[0]}
                                value={element[1]}/>
                        })
                    }
                </S.InfoContainer>
            </S.Container>
        </S.Main>
    )
}

const Info = ({
    title,
    value
}) => {
    return <S.InfoMain>
        <h2>
            {
                title
            }
        </h2>
        <h5>
            {
                value
            }
        </h5>
    </S.InfoMain>
}

export default Render