import React, { useState, createContext, useEffect } from "react";
import * as W from "./Write.style";

import DropBox from "./dropBox/DropBox";
import ImgHolder from "./imageHolder/ImgHolder";

import backArrow from "../../../static/record/write/back.svg";

export const ImgContext = createContext();

const Write = () => {
  const createStep = [
    {
      name: "holdImg",
      Width: 55, // vw
      MaxWidth:700 // px
    },{
      name: "write",
      Width: 90,
      MaxWidth: 1100
    }
  ];

  // 이미지 유무
  const [isExist, setIsExist] = useState(false);
  const [imgFiles, setImgFiles] = useState([]);
  const [step,setStep] = useState(0)

  useEffect(() => {
    if (imgFiles.length > 0) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }, [imgFiles]);

  function nextStep(){
    console.log("다음 페이지")
    setStep((prev) => prev + 1)
  }

  function prevPage(){
    console.log("이전 페이지")

    if (step === 0){
        // 끄는 함수 받아야함
        console.log("모달 닫기")
    } else {
        setStep((prev) => prev - 1)
    }

  }

  return (
    <W.Wrapper
      width={createStep[step].Width}
      maxWidth={createStep[step].MaxWidth}
    >
      <W.Menu>
        {isExist && (
          <W.MenuInner>
            <W.ButtonWithSvg onClick={prevPage}>
              <img src={backArrow} alt="back" />
            </W.ButtonWithSvg>
            <W.Button onClick={nextStep}>다음</W.Button>
          </W.MenuInner>
        )}
      </W.Menu>
      <ImgContext.Provider value={[imgFiles, setImgFiles]}>
        <W.ImgArea>
          {isExist ? <ImgHolder mode="edit" /> : <DropBox />}
        </W.ImgArea>
        { step === 1 &&

        <W.WriteArea>
        </W.WriteArea>
        } 
      </ImgContext.Provider>
    </W.Wrapper>
  );
};

export default Write;
