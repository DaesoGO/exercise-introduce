import * as S from "./index.style";
import Member from "./member";
import { useEffect, useState } from "react";

import readinessIcon from "../../../../static/introduce/icons/readiness.svg";
import difficultyIcon from "../../../../static/introduce/icons/difficulty.svg";
import riskIcon from "../../../../static/introduce/icons/risk.svg";

const Render = ({ info }) => {
    return (
    <S.MainContainer>
        <S.exerciseTitle>{info.title}</S.exerciseTitle>
        <S.exercisePartContainer>
            {info.muscle.map((element, idx) => {
                return <span key={idx}>{element}</span>
            })}
        </S.exercisePartContainer>
        <S.exerciseInfoContainer>{info.explanation}</S.exerciseInfoContainer>
    </S.MainContainer>
    )
}
export default Render;
