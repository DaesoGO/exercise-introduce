import { useState, useCallback, useEffect } from "react";
import * as S from "./recommand.style";
import EditImg from "../../../static/introduce/icons/edit.svg";
import filter from "../../../static/introduce/icons/filter.svg";
import { useNavigate } from "react-router-dom";

const Render = ({ comment }) => {
  const navigate = useNavigate();

  const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
  const [easy, setEasy] = useState(["스쿼트", "런지"]);
  const [search, setSearch] = useState("");
  const [boardid, setBoardid] = useState("");

  useEffect(() => {
    setBoardid(comment.config?.url);
    console.log(comment.config?.url);
  }, []);

  const makeComment = comment.data?.data.map((element, idx) => {
    // const name = boardid?.split("/")[1];
    const name = "squatting";

    return element.content.includes(search) ? (
      // <S.postContainer key={idx} onClick={() => navigate(`/introduce/${id}/${boardid}`)}>
      //   <S.authContainer>
      //     <S.writerName>{element.user.nickname}</S.writerName>
      //     <S.postName>{element.title}</S.postName>
      //   </S.authContainer>
      //   {/* <S.commentContainer>
      //     <S.commentCount>{element.comment}</S.commentCount>
      //   </S.commentContainer> */}
      // </S.postContainer>
      <S.postContainer key={idx} onClick={() => navigate(`/introduce/${name}/${element.id}`)}>
        <S.authContainer>
          <S.writerName>{element.user.id}</S.writerName>
          <S.postName>{element.content}</S.postName>
        </S.authContainer>
      </S.postContainer>
    ) : null;
  });

  return (
    <S.MainContainer>
      <S.upperContainer>
        <S.inputForm
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <S.buttonContainer>
          <S.divButton onClick={() => navigate("/write")}>
            <img src={EditImg} />
          </S.divButton>
          {/* <S.divButton><img src={filter}/></S.divButton> */}
        </S.buttonContainer>
      </S.upperContainer>
      <S.lowerContainer>{makeComment}</S.lowerContainer>
    </S.MainContainer>
  );
};

export default Render;
