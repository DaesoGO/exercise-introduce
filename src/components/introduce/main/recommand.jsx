import { useState, useCallback, useEffect } from "react";
import * as S from "./recommand.style";
import search from "../../../static/introduce/icons/search.svg";
import filter from "../../../static/introduce/icons/filter.svg";
import { useNavigate } from "react-router-dom";

const Render = ({ comment }) => {
  const navigate = useNavigate();

  const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
  const [easy, setEasy] = useState(["스쿼트", "런지"]);

  const makeComment = comment.map((element, idx) => {
    const id = element.id.split("_")[0];
    const boardid = element.id.split("_")[1];
    return (
      <S.postContainer key={idx} onClick={() => navigate(`/introduce/${id}/${boardid}`)}>
        <S.authContainer>
          <S.writerName>{element.user.nickname}</S.writerName>
          <S.postName>{element.title}</S.postName>
        </S.authContainer>
        {/* <S.commentContainer>
          <S.commentCount>{element.comment}</S.commentCount>
        </S.commentContainer> */}
      </S.postContainer>
    );
  });

  return (
    <S.MainContainer>
      <S.upperContainer>
        <S.inputForm placeholder="Search" />
        <S.buttonContainer>
          <S.divButton>
            <img src={search} />
          </S.divButton>
          {/* <S.divButton><img src={filter}/></S.divButton> */}
        </S.buttonContainer>
      </S.upperContainer>
      <S.lowerContainer>{makeComment}</S.lowerContainer>
    </S.MainContainer>
  );
};

export default Render;
