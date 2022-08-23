import * as S from './index.style'
import image from './www.png'
const Render = () => {
    const items = ['턱걸이', '딥스', '팔굽혀펴기', '윗몸일으키기', '맨몸 스쿼트', '버피', '플랭크', '브릿지', '마운틴 클라이머', '바이시클 메뉴버', '트릭킹']
    return (
        <S.Main>
            {/* <img src={image} width='200'></img> */}
            <S.MainContent></S.MainContent>
            <S.MyRecord></S.MyRecord>
            <S.TrainingList>
                {
                    items.map(item => (<S.TestBox><span>{item}</span></S.TestBox>))
                }
            </S.TrainingList>
        </S.Main>
    )
}
export default Render