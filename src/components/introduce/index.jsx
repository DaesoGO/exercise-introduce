import Main from "./main";
import QnA from "./qna";
import * as S from "./index.style";
import axios from "axios";
import { useEffect, useState } from "react";
import dummy from './pushup.json'

const Render = () => {
  // const dummy = {
  //   title: null,
  //   muscle: [],
  //   difficulty: null,
  //   readiness: null,
  //   risk: null,
  //   explanation: null,
  //   precautions: null,
  // };

  const [getInfo, setInfo] = useState(dummy);

  useEffect(() => {
    axios
      .get("/under")
      .then(function (res) {
        const d = res.data.data;
        d.muscle = d.muscle.split("/");
        setInfo(d);
      })
      .catch(function (error) {
        console.log("get dummy Error")
      });
  }, []);

  return (
    <S.Root>
      <S.Container>
        <Main info={getInfo} />
      </S.Container>
    </S.Root>
  );
};
export default Render;
