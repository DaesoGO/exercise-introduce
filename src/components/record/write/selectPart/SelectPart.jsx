import React from "react";
import DropDownMenu from "../../../../common/dropDownMenu/DropDownMenu";
import * as S from "./SelectPart.style";

import search from "../../../../static/record/write/search.svg";
import { useState } from "react";
import { useEffect } from "react";

import removeSvg from "../../../../static/record/write/remove.svg"
import api from "../../../../util/api";


const selectPart = ({exe, setExe, part, setPart,  }) => {
  // 서버한테 받아올 운동 목록
  // const exeKinds = [
  //   {
  //     id: 4,
  //     part: ["등", "광배"],
  //     name: "턱걸이",
  //   },
  //   {
  //     id: 5,
  //     part: ["마음","상처"],
  //     name: "기뮤띠",
  //   },
  //   {
  //     id: 6,
  //     part: ["손가락", "전완근"],
  //     name: "코딩하기",
  //   },
  // ];

  const [exeKinds,setExeKinds] = useState([]);
  useEffect(()=>{
    api.get(`/diary/exercise`).then(
      (result) => {
        setExeKinds(result.data.data.map((i,idx) => {
          return {
            id:idx,
            part:i.muscle.split('/'),
            name:i.title,
          }
        }))
      },(error) => {
        console.log(error)
      }
    )
  },[])

  

  const [searchValue, setSearchValue] = useState("");


  function addPart(exePart){
    const index = part.findIndex((element) => element.name === exePart)
    if (index === -1){ //못 찾았을 때
      setPart((prev) => [...prev,{name:exePart,value:1}])
    } else {
      const temp = [...part];
      temp[index].value += 1;
      setPart(temp);
    }

    setPart((prev) => sortValues(prev))
  }
  // 선택된 객체형식의 운동이 들어온다
  function addExe(selectedExe){
    // 못 찾았다면 결과값으로 -1이 나온다
    const index = exe.findIndex((element) => element.name === selectedExe.name)
    if (index === -1){ // 못 찾았을 때
        // 추가해준다, 가중치는 0으러
        selectedExe.value = 1;
        console.log(selectedExe)
        setExe((prev) => [...prev,selectedExe]);
    } else {
        // 이미 있을 땐 가중치를 추가해준다
        const temp = [...exe]
        temp[index].value += 1;
        setExe(temp);
    }

    setExe((prev) => sortValues(prev));

    // 운동에 따른 part값 변경
    selectedExe.part.forEach((i) => {
      addPart(i)
    })
  }



  function removeExe(selectedExe){
    // // console.log(
    // //   exe.map((element) => {
    // //     if (element.name === selectedExe){
    // //       element.value -= 1;
    // //       if (element.value > 0){

    // //       } 
    // //       // 아닐 땐 삭제
    // //     }else{
    // //       return element
    // //     }
    // //   })
    // // )
    // setExe((prev) => {
    //   const index = exe.findIndex((element) => element.name === selectedExe.name)
    //   console.log("prev",prev)
    //   prev[index].value -= 1
    //   if (prev[index].value > 0){
    //     return prev
    //   } else {
    //     prev.splice(index,1);
    //     return prev
    //   }
    // })
  }
  function removePart(selectedPart){
    // const index = exe.findIndex((element) => element.name === selectedPart.name)

  }





  /**객체를 받고 객체의 value를 비교해 정렬해서 return*/ 
  function sortValues(obj){
    obj.sort((a,b) => b.value - a.value)
    return obj
  }
  function searchExe() {
    console.log(searchValue, "를 서버에 검색");
  }


  return (
    <S.Wrapper>
      <hr/>
      <DropDownMenu title="운동 선택" defaultOpen="open">
        <S.ItemColWrapper>
          <S.SearchWrapper>
            <S.SearchInput placeholder="검색" />
            <img src={search} alt="검색" onClick={searchExe} />
          </S.SearchWrapper>
          {exeKinds.map((i) => (
            <S.Item
            onClick={() => addExe(i)}
            key={i.id}
            >{i.name}</S.Item>
          ))}
        </S.ItemColWrapper>
      </DropDownMenu>
      <hr/>
      <DropDownMenu title="선택된 운동" defaultOpen="open">
        <S.ItemRowWrapper>
          {exe.map((i) => (
            <S.rowItem 
            onClick={() => addExe(i)}
            key={i.name}
            >
              <div>
              {i.name}{i.value}
              </div>
              <span 
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 막기
                removeExe(i)
              }}>
                <img src={removeSvg} alt="운동 삭제" />
              </span>
            </S.rowItem>
          ))}
        </S.ItemRowWrapper>
      </DropDownMenu>
      <hr/>
      <DropDownMenu title="운동 부위" defaultOpen="open">
        <S.ItemColWrapper>
          {part.map((i) => (
            <S.Item 
            onClick={()=>addPart(i.name)}
            key={i.name}>
              <div>
                {i.name}{i.value}
              </div>
              <span onClick={(e) => {
                e.stopPropagation();
                removePart(i)
              }}>
                <img src={removeSvg} alt="부위 삭제" />
              </span>
            </S.Item>
          ))}
        </S.ItemColWrapper>

        {/* exepart는 일단은 글로만, 시간되면 svg까지 쫌 ㄱㄱ */}

      </DropDownMenu>
      <hr />
    </S.Wrapper>
  );
};

export default selectPart;
