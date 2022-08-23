import Main from './main'
import QnA from './qna'
import * as S from './index.style'
import human from 'skeletalmuscle-drawer/dist/human.gltf'
const dummy = {
    title: "팔굽혀펴기",
    muscle: ["대흉근", "삼두근", "삼각근", "복근", "전거근", "광배근"],
    human: human,
}
const Render = () => {
    return (
        <S.Root>
            <S.Container>
                <Main info={dummy}/>
                <QnA/>
            </S.Container>
        </S.Root>
    )
}
export default Render