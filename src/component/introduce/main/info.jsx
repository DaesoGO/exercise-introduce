import Recommand from './recommand'
import Star from './star'
import * as S from './info.style'
const Render = () => {
    return (
    <S.MainContainer>
        <Star/>
        <S.Explanation>

        </S.Explanation>
        <S.Explanation>
            
        </S.Explanation>
        <S.RecommandContainer>
            <Recommand/>
            <Recommand/>
        </S.RecommandContainer> 
    </S.MainContainer> )
}
export default Render