import * as S from "./star.style";

const Render = ({ stars }) => {
  return (
    <S.MainContainer>
      <S.StarContainer>
        <h4> 평균 : </h4>
        <p>⭐⭐⭐⭐</p>
      </S.StarContainer>

      <S.StarContainer>
        <h4> 난이도 : </h4>
        <p>❗❗❗</p>
      </S.StarContainer>

      <S.StarContainer>
        <h4> 위험도 : </h4>
        <p> ☣️</p>
      </S.StarContainer>
    </S.MainContainer>
  );
};
export default Render;
