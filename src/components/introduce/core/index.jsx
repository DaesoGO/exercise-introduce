import * as S from './index.style'
import App from "skeletalmuscle-drawer";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import human from '../../../static/introduce/asset/man.gltf'
import animation from '../../../static/introduce/animation/test.json'
import Ui from './ui'

export default () => {
    const dom = useRef();
    let app
    useEffect(() => {
      if (app == undefined) {
        app = new App(dom.current, human, animation, human)
      }
    }, [dom]);
    return (
        <S.monitorContainer>
            <S.monitorDisplay>
                <S.monitorCam/>
                <S.AppContainer ref={dom}>
                </S.AppContainer>
            </S.monitorDisplay>
            <S.monitorDisplayBottom/>
            <S.monitorArm></S.monitorArm>
        </S.monitorContainer>
    )
}