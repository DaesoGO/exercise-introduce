import * as S from './index.style'
import image from './www.png'
const Render = () => {
    return(
        <S.Main>
            {/* <img src={image} width='200'></img> */}
            <S.MainContent></S.MainContent>
            <S.MyRecord></S.MyRecord>
            <S.TrainingList>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
                <S.TestBox></S.TestBox>
            </S.TrainingList>
        </S.Main>
    )
}
export default Render