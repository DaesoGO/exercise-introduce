import * as S from './index.style'
import UserInfo from './userInfo'
import History from './history'
import Plate from './plate'
import Exercise from './exercise'
const Render = () => {
    return <S.Container>
        <S.Main>
            <S.ContentContainer>
                <S.UpperContainer>
                    <UserInfo/>
                    <History/>
                </S.UpperContainer>
                <S.LowerContainer>
                    <Plate/>
                    <Exercise/>
                </S.LowerContainer>
            </S.ContentContainer>
        </S.Main>
    </S.Container>
}
export default Render;