import { useState } from "react";
import * as S from "./recommand.style";

const Render = () => {
  const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
  const [easy, setEasy] = useState(["스쿼트", "런지"]);

  let makeSimilar = similar.map((similar, i) => {
    return (
      <S.Link key={i} href={`/${similar}`}>
        {similar}
      </S.Link>
    );
  });

  let makeEasy = easy.map((easy, i) => {
    return (
      <S.Link key={i} href={`/${easy}`}>
        {easy}
      </S.Link>
    );
  });

  return (
    <S.Main>
      <S.RecommandBox>
        <S.Title>비슷한 운동</S.Title>
        {makeSimilar}
      </S.RecommandBox>

      <S.SplitLine />

      <S.RecommandBox>
        <S.Title>조금더 쉬운 운동</S.Title>
        {makeEasy}
      </S.RecommandBox>
    </S.Main>
  );
};

export default Render;
