import React, { useState, createContext, useEffect } from "react";

import { useRecoilState } from "recoil";
import { creatingStep } from "../../../stores/write/writeData";

import * as W from "./Write.style";

import DropBox from "./dropBox/DropBox";
import ImgHolder from "./imageHolder/ImgHolder";

import backArrow from "../../../static/record/write/back.svg";
import MakeContent from "./makeContent/MakeContent";
import SelectPart from "./selectPart/SelectPart"

export const ImgContext = createContext();

const Write = () => {
  const createStep = [
    {
      name: "holdImg",
      Width: 55, // vw
      MaxWidth: 700, // px
      WriteAreaWidth: 0, // vw
    },
    {
      name: "write",
      Width: 90,
      MaxWidth: 1100,
      WriteAreaWidth: 35,
    },
  ];

  const [step, setStep] = useRecoilState(creatingStep);

  // 이미지 유무
  const [isExist, setIsExist] = useState(false);
  const [imgFiles, setImgFiles] = useState([]);

  // 운동 부위, 글
  const [part,setPart] = useState()

  useEffect(() => {
    if (imgFiles.length > 0) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }, [imgFiles]);

  function nextStep() {
    if (step === 1){
      console.log("내용 서버에 보내기")
    } else {
      setStep((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (step === 0) {
      // 끄는 함수 받아야함
      console.log("모달 닫기");
    } else {
      setStep((prev) => prev - 1);
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
            <W.Button onClick={nextStep}>{step === 1 ? "생성하기" : "다음"}</W.Button>
          </W.MenuInner>
        )}
      </W.Menu>
      <ImgContext.Provider value={[imgFiles, setImgFiles]}>
        {(() => {
          switch (step) {
            case 0:
              return (
                <W.ImgArea>
                  {isExist ? <ImgHolder mode="edit" /> : <DropBox />}
                </W.ImgArea>
              );
            case 1:
              return (
                <W.ContentWrapper>
                <W.ImgArea><ImgHolder/></W.ImgArea>
                <W.WriteArea>
                  <SelectPart/>
                  <MakeContent/>
                </W.WriteArea>
                </W.ContentWrapper>
              )
          }
        })()}
      </ImgContext.Provider>
    </W.Wrapper>
  );
};

export default Write;
