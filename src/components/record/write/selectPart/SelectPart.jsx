import React from "react";
import DropDownMenu from "../../../../common/dropDownMenu/DropDownMenu";
import * as S from "./SelectPart.style";

import search from "../../../../static/record/write/search.svg";
import { useState } from "react";
import { useEffect } from "react";

const selectPart = ({exe, setExe, part, setPart,  }) => {
  // 서버한테 받아올 운동 목록
  const exeKinds = [
    {
      id: 4,
      part: ["등", "광배"],
      name: "턱걸이",
    },
    {
      id: 5,
      part: ["목"],
      name: "기뮤띠",
    },
    {
      id: 6,
      part: ["손가락", "전완근"],
      name: "코딩하기",
    },
  ];
  const [searchValue, setSearchValue] = useState("");

  // 선택된 객체형식의 운동이 들어온다
  function selectExe(selectedExe){

    // 못 찾았다면 결과값으로 -1이 나온다
    const index = exe.findIndex((element) => element.name === selectedExe.name)
    if (index === -1){ // 못 찾았을 때
        // 가중치는 0으로 해준다
        selectedExe.value = 1;
        setExe((prev) => [...prev,selectedExe]);
    } else {
        // 이미 있을 땐 가중치를 추가해준다
        // 객체가 복사가 되어도 setter에 넣어서 괜찮다..
        const temp = [...exe];
        temp[index].value += 1;
        console.log(temp)
        setExe(temp)
        // setExe((prev) => [...prev[index].value += 1]);
    }

  }

  useEffect(() => {
    console.log(exe)
  },[exe])

  function searchExe() {
    console.log(searchValue, "를 서버에 검색");
  }

  /**
   * @todo ExeKind, ExePart컴포넌트로 안나누기
   */
  return (
    <S.Wrapper>
      <DropDownMenu title="운동 선택" defaultOpen="open">
        <S.ItemColWrapper>
          <S.SearchWrapper>
            <S.SearchInput placeholder="검색" />
            <img src={search} alt="검색" onClick={searchExe} />
          </S.SearchWrapper>
          {exeKinds.map((i) => (
            <S.Item
            onClick={() => selectExe(i)}
            key={i.id}
            >{i.name}</S.Item>
          ))}
        </S.ItemColWrapper>
      </DropDownMenu>
      <DropDownMenu title="선택된 운동" defaultOpen="open">
        <S.ItemRowWrapper>
          {exe.map((i) => (
            <S.rowItem key={i.id}>{i.name}{i.value}</S.rowItem>
          ))}
        </S.ItemRowWrapper>
      </DropDownMenu>
      <DropDownMenu title="운동 부위" defaultOpen="open">
        <S.ItemColWrapper>
          {part.map((i) => (
            <S.Item key={i.id}>{i.name}</S.Item>
          ))}
        </S.ItemColWrapper>

        {/* exepart는 일단은 글로만, 시간되면 svg까지 쫌 ㄱㄱ */}
        {/* <ExePart part={part} />  */}
      </DropDownMenu>
      <hr />
    </S.Wrapper>
  );
};

export default selectPart;
