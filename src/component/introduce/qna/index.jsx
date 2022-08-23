import * as S from "./index.style";
import Question from "./question";

const Render = () => {
  return (
    <S.Root>
      <S.Main>
        <S.Top>
          <S.SearchContainer>
            <S.SearchBar type="text" placeholder="검색"></S.SearchBar>
            <S.Search>검색</S.Search>
          </S.SearchContainer>

          <S.Options>옵션</S.Options>
          <S.Register>질문 등록</S.Register>
        </S.Top>

        <S.Questions>
          <Question />
        </S.Questions>
      </S.Main>
    </S.Root>
  );
};
export default Render;
