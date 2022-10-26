import Main from "./main";
import QnA from "./qna";
import api from "../../util/api/index";
import * as S from "./index.style";
import axios from "axios";
import { useEffect, useState } from "react";
import dummy from "./pushup.json";

const Render = () => {
  const [getInfo, setInfo] = useState(dummy);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get("exercise/Squatting").then(
      (res) => {
        const d = res.data.data;
        d.muscle = d.muscle.split("/");
        setInfo(d);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    api.get("exercise/squatting/comment/1").then(
      (res) => {
        setComments(res);
        console.log(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <S.Root>
      <S.Container>
        <Main info={getInfo} comment={comments} />
      </S.Container>
    </S.Root>
  );
};
export default Render;
