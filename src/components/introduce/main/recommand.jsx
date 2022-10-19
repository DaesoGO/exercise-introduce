import { useState } from "react";
import * as S from "./recommand.style";
import search from "../../../static/introduce/icons/search.svg";
import filter from "../../../static/introduce/icons/filter.svg";

const Render = ({ comment }) => {
  console.log("comment" + comment);
  const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
  const [easy, setEasy] = useState(["스쿼트", "런지"]);

  const [content, setContent] = useState("test");
  //   const filtered = comment.filter((text) => {
  //     return comment.comment.toUpperCase().includes(comment.toUpperCase());
  //   });

  return (
    <S.MainContainer>
      <S.upperContainer>
        <S.inputForm
          placeholder="Search"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            console.log(content);
          }}
        />
        <S.buttonContainer>
          <S.divButton>
            <img src={search} />
          </S.divButton>
          {/* <S.divButton><img src={filter}/></S.divButton> */}
        </S.buttonContainer>
      </S.upperContainer>
      <S.lowerContainer>
        {comment.map((element, idx) => {
          return (
            <S.postContainer key={idx}>
              <S.authContainer>
                <S.writerName>{element.user.nickname}</S.writerName>
                <S.postName>{element.title}</S.postName>
              </S.authContainer>
              <S.commentContainer>
                <S.commentCount>{element.comment}</S.commentCount>
              </S.commentContainer>
            </S.postContainer>
          );
        })}
      </S.lowerContainer>
    </S.MainContainer>
  );
};

export default Render;
