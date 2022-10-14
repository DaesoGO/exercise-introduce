import * as S from "./index.style";
import Question from "./question";
import comment from "../comment.json";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import search from "../../../static/introduce/icons/search.svg";
import filter from "../../../static/introduce/icons/filter.svg";
import edit from "../../../static/introduce/icons/edit.svg";
import axios from "axios";

const Render = ({ comments }) => {
  const [getComment, setCommnet] = useState([]);
  const navigate = useNavigate();

  const [searchtText, setSearchtText] = useState("");

  const changeSearch = useCallback(
    (e) => {
      setSearchtText(e.target.value);
    },
    [searchtText]
  );

  const searched = getComment.filter((data) => {
    return data.title.toLowerCase().includes(searchtText.toLowerCase());
  });
e
  const goWrite = () => {
    navigate("/write");
  };

  // const checkEnter = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("enter");
  //   }
  // };

  // useEffect(() => {
  //   setCommnet(comments);
  // });

  useEffect(() => {
    setCommnet(comments);
    console.log("comments " + comments);
  });

  return (
    <S.Root>
      <S.Main>
        <S.Top>
          <S.SearchContainer>
            <S.SearchBar
              type="text"
              placeholder="Search"
              // onKeyDown={checkEnter}
              onChange={changeSearch}
              value={searchtText}
            ></S.SearchBar>
          </S.SearchContainer>
          {/* <S.FunctionButton image={filter} /> */}
          <S.FunctionButton image={edit} onClick={goWrite} />
        </S.Top>
        <S.Questions>
          <Question questions={searched} />
        </S.Questions>
      </S.Main>
    </S.Root>
  );
};
export default Render;
