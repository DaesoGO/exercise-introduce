import { useEffect, useRef } from "react";
import { App } from "skeletalmuscle-drawer";
import * as S from "./index.style";
import Info from "./info";

const Render = ({ info }) => {
  const { title, muscle, human } = info;
  const dom = useRef();
  let app;
  useEffect(() => {
    if (app == undefined) {
      app = new App(dom.current, human);
    }
  }, [dom]);
  return (
    <S.MainContainer>
      <S.DisplayContainer>
        <S.AppContainer ref={dom} />
        <S.InfoContainer>
          {muscle.map((element, idx) => {
            return <S.Muscle key={idx}>{element}</S.Muscle>;
          })}
          <S.Title>{title}</S.Title>
        </S.InfoContainer>
      </S.DisplayContainer>
      <Info />
    </S.MainContainer>
  );
};
export default Render;
