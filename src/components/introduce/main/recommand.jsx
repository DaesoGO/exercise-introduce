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

  const name = window.location.href.split("/")[4];

  const makeComment = comment.data?.data.map((element, idx) => {
    return (
      <S.postContainer key={idx} onClick={() => navigate(`/introduce/${name}/${element.id}`)}>
        <S.authContainer>
          <S.writerName>{element.user.id}</S.writerName>
          <S.postName>{element.title}</S.postName>
        </S.authContainer>
      </S.postContainer>
    );
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
          <S.divButton onClick={() => navigate(`/${name}/write`)}>
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
