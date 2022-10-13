import Main from "./main";
import QnA from "./qna";
import * as S from "./index.style";
import axios from "axios";
import { useEffect, useState } from "react";
import dummy from "./pushup.json";

const Render = () => {
  const [getInfo, setInfo] = useState(dummy);
  const [comments, setComments] = useState();

  useEffect(() => {
    axios
      .get("exercise/test2")
      .then(function (res) {
        const d = res.data.data;
        d.muscle = d.muscle.split("/");
        setInfo(d);
      })
      .catch(function (error) {
        console.log("get dummy Error");
      });
  }, []);

  useEffect(() => {
    axios
      .get("exercise/test2/board")
      .then(function (res) {
        setComments(res.data.data);
      })
      .catch(function (error) {
        console.log("get dummy Error");
      });
  }, []);

  return (
    <S.Root>
      <S.Container>
        <Main info={getInfo} />
        {/* <Main /> */}
        <QnA comments={comments} />
      </S.Container>
    </S.Root>
  );
};
export default Render;
