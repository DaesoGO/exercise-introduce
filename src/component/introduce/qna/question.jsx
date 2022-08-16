import { useState } from "react";
import * as S from "./question.style";
const Render = () => {
  // [id, 제목, 채팅 갯수, 글쓴이]
  const [question, setQuestion] = useState([
    [1, "종박이가 오타쿠가 된이유", 100, "박병관"],
    [2, "유은재의 갑질 논란", 200, "박병관"],
    [3, "박돼지의 몸무게 논란", 99999, "박병관"],
  ]);

  let makeQuestion = question.map((v, i) => {
    return (
      <S.Question key={i} href={`/question/${question[i][0]}`}>
        <S.QuestionContainer>
          <S.Title>{question[i][1]}</S.Title>
          <S.Chat>{question[i][2]}</S.Chat>
          <S.Writer>{question[i][3]}</S.Writer>
        </S.QuestionContainer>
      </S.Question>
    );
  });

  return <div>{makeQuestion}</div>;
};
export default Render;
