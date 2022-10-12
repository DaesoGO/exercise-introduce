import * as S from "./explanation.style";
import Data from "../pushup.json";

const Render = ({ explanation, precautions }) => {
    return (
        <S.MainContainer>
            <S.exerciseTitle>주의점</S.exerciseTitle>
            <S.warningInfoContainer>잘못된 방식으로 진행할 경우에는 머시기머시기같은 머시기머시기 질환을 초래할 수 있다.</S.warningInfoContainer>
        </S.MainContainer>
    )
}

export default Render;
