import * as S from "./explanation.style";
import Data from "../pushup.json";

const Render = ({ info }) => {
    return (
        <S.MainContainer>
            <S.exerciseTitle>주의점</S.exerciseTitle>
            <S.warningInfoContainer>{info}</S.warningInfoContainer>
        </S.MainContainer>
    )
}

export default Render;
