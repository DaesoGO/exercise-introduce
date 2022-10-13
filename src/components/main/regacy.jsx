import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './index.style'
import background1 from './bg1.jpg'
import background2 from './bg2.jpg'
import pullup from './exercises/pullup.png'
import dip from './exercises/dip.png'
import pushup from './exercises/pushup.png'
import situp from './exercises/situp.png'
import squat from './exercises/squat.png'
import burpee from './exercises/burpee.png'
import plank from './exercises/plank.png'
import bridge from './exercises/bridge.png'
import mountainClimber from './exercises/mountainClimber.png'
import bicycleManeuver from './exercises/bicycleManeuver.png'
const Render = () => {
    const animationList = ['fade-down-right', 'fade-down', 'fade-down', 'fade-down-left', 'fade-right', 'flip-left', 'flip-right', 'fade-left', 'fade-up-right', 'fade-up-left']
    const exerciseList = ['턱걸이', '딥스', '팔굽혀펴기', '윗몸일으키기', '스쿼트', '버피', '플랭크', '브릿지', '마운틴 클라이머', '바이시클 메뉴버']
    const pictogramList = [pullup, dip, pushup, situp, squat, burpee, plank, bridge, mountainClimber, bicycleManeuver]
    const [exerciseName, setExerciseName] = useState('Choose Your Exercise');
    const randomDuration = (min, max) => {
        return String(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <>
            <S.Main bg={background1}>
                <S.textBox>
                    <S.mainTitle>Make Your Life Healthy</S.mainTitle>
                    <S.subTitle>저희 사이트는 운동법을 보다 간편하고, 정확하게 제공합니다.</S.subTitle>
                    <S.subTitle>사용자의 움직임을 체크하여, 잘못된 부분을 지적해줍니다.</S.subTitle>
                    <S.startButton>시작하기</S.startButton>
                </S.textBox>
            </S.Main>
            <S.line></S.line>
            <S.Main bg={background2}>
                <S.textBox>
                    <S.container>
                        <S.mainTitle2 data-aos='zoom-in-up'>{exerciseName}</S.mainTitle2>
                            <S.exerciseContainer onMouseLeave={() => {setExerciseName('Choose Your Exercise')}}>
                                {exerciseList.map((item, idx) => {
                                    return (
                                        <>
                                            <S.exerciseBox
                                            data-aos={animationList[idx]}
                                            data-aos-duration='30'
                                            data-aos-delay='500'
                                            key={idx}
                                            onMouseEnter={() => {setExerciseName(exerciseList[idx])}}>
                                                <S.pictogramImg src={pictogramList[idx]}/>
                                            </S.exerciseBox>
                                        </>
                                    )
                                })}
                            </S.exerciseContainer>
                    </S.container>
                </S.textBox>
            </S.Main>
        </>
    )
}
export default Render