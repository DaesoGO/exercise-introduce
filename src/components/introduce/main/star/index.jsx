import * as S from "./index.style";
import Member from "./member";
import { useEffect, useState } from "react";

import readinessIcon from "../../../../static/introduce/icons/readiness.svg";
import difficultyIcon from "../../../../static/introduce/icons/difficulty.svg";
import riskIcon from "../../../../static/introduce/icons/risk.svg";

const Render = ({ readiness, difficulty, risk }) => {
    const exerciseList = ['광배근', '전거근', '복근', '삼각근', '삼두근', '대흉근']
    return (
    <S.MainContainer>
        <S.exerciseTitle>팔굽혀펴기</S.exerciseTitle>
        <S.exercisePartContainer>
            {exerciseList.map((element, idx) => {
                return <span key={idx}>{element}</span>
            })}
        </S.exercisePartContainer>
        <S.exerciseInfoContainer>머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기머시기</S.exerciseInfoContainer>
    </S.MainContainer>
    )
}
export default Render;
