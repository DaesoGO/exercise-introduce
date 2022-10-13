import * as S from './index.style'
import LeftImage from '../../static/main/left.png'
import RightImage from '../../static/main/right.png'
import LogoImage from '../../static/main/logo.png'
import { useState } from 'react'
import Info from './info.json'
const Render = () => {
    const [leftAniamtion, setLeftAnimation] = useState(0)
    const [rightAniamtion, setRigntAnimation] = useState(0)
    return <S.Main>
        <S.TopContainer>
            <S.ImageContainer>
                <S.SideImage src={LeftImage} onLoad={() => setLeftAnimation(0)} transfrom={leftAniamtion}/>
            </S.ImageContainer>
            <S.Explanation>
                <S.LogoImage src={LogoImage}></S.LogoImage>
                <S.Name>{Info.title}</S.Name>
                <S.Content>{Info.content}</S.Content>
            </S.Explanation>
            <S.ImageContainer>
                <S.SideImage src={RightImage} onLoad={() => setRigntAnimation(0)} transfrom={rightAniamtion}/>
            </S.ImageContainer>
        </S.TopContainer>

    </S.Main>
}
export default Render;
