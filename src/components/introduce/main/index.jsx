import Core from "../core";
import { useEffect, useRef, useState } from "react";
import { App } from "skeletalmuscle-drawer";
import human from "../../../static/introduce/asset/man.gltf";
import animation from "../../../static/introduce/animation/test.json";
import * as S from "./index.style";
import Info from "./info";


const Render = ({ info }) => {
  const dom = useRef();
  let isApp;
  const [app, setApp] = useState()
  useEffect(() => {
    if (!isApp) {
      // setApp(new App(dom.current, human, animation))
      // isApp = true
    }
  }, [dom]);

  return (
    <S.MainContainer>
      <S.DisplayContainer>
        <Core/>
      </S.DisplayContainer>
      <Info info={info} />
    </S.MainContainer>
  );
};

export default Render;
