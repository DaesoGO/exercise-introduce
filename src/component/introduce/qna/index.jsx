import * as S from './index.style'
import Question from './question'
const Render = () => {
    return (
        <S.Root>
            <S.Main>
                <S.Top>
                    <S.SearchBar>검색바</S.SearchBar>
                    <S.Options>옵션</S.Options>
                    <S.Register>질문 등록</S.Register>
                </S.Top>
                <S.Questions>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </S.Questions>
            </S.Main>
        </S.Root>
    )
}
export default Render