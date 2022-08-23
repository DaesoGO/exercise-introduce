import * as S from './index.style'
import {useEffect, useRef} from "react";
import {
    App,
    BoneName,
    Vector3
} from 'skeletalmuscle-drawer'
import human from 'skeletalmuscle-drawer/dist/human.gltf'

const Render = () => {
    const dom = useRef()
    useEffect(() => {
        const app = new App(dom.current, human)
    }, [dom])
    return(
        <S.Main>
           <S.App ref={dom}/>
        </S.Main>
    )
}
export default Render