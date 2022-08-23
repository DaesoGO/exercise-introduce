import * as S from "./explanation.style";

const Render = () => {
  return (
    <>
      <S.Explanation>
        <h3>운동 설명</h3>
        <S.Text>
          웨이트 트레이닝의 일종이며 정자세로 수행 시 자신의 몸무게의 3분의 2, 약 60~70% 정도의
          무게를 들어올리는 것과 같다.
        </S.Text>
        <S.Text>
          엎드러 뻗쳐 자세에서 고개를 들고, 어깨에서 발끝까지 일직선을 이루도록 몸을 고정한 후
          팔꿈치를 굽혔다 편다.
        </S.Text>
      </S.Explanation>

      <S.Explanation>
        <h3>운동 시 주의점</h3>
        <S.Text>
          잘못된 방식으로 진행할 경우에는 횡문근융해증같은 심각한 근골격계 질환을 초래할 수 있다.
        </S.Text>
      </S.Explanation>
    </>
  );
};

export default Render;
