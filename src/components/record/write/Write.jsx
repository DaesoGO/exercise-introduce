import React, { useState, createContext, useEffect } from "react";

import { useRecoilState } from "recoil";
import { creatingStep } from "../../../stores/write/writeData";

import * as W from "./Write.style";

import DropBox from "./dropBox/DropBox";
import ImgHolder from "./imageHolder/ImgHolder";

import backArrow from "../../../static/record/write/back.svg";
import MakeContent from "./makeContent/MakeContent";
import SelectPart from "./selectPart/SelectPart";

import img1 from "./1.jpg";
import img2 from "./2.jpg";

export const ImgContext = createContext();

const Write = () => {
  const [step, setStep] = useRecoilState(creatingStep);

  // 이미지 유무
  const [isExist, setIsExist] = useState(false);
  const [imgFiles, setImgFiles] = useState([]);
  // const [imgFiles, setImgFiles] = useState([new File([img1],"img1.jpg"), new File([img2],"img2.jpg")]);

  // 운동 부위, 글
  const [part, setPart] = useState([
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
  ]);
  const [content, setContent] = useState();

  const createStep = [
    {
      name: "holdImg",
      Width: 60, // vw
      MaxWidth: 700, // px
    },
    {
      name: "selectPart",
      Width: 95,
      MaxWidth: 1100,
    },
    {
      name: "write",
      Width: 95,
      MaxWidth: 1100,
    },
  ];

  useEffect(() => {
    if (imgFiles.length > 0) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }, [imgFiles]);

  function nextStep() {
    if (step === createStep.length - 1) {
      console.log("내용 서버에 보내기");
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
            <W.Button onClick={nextStep}>
              {step === createStep.length - 1 ? "생성하기" : "다음"}
            </W.Button>
          </W.MenuInner>
        )}
      </W.Menu>
      <ImgContext.Provider value={[imgFiles, setImgFiles]}>
        <W.ContentWrapper>
          {
            isExist ?
            <W.ImgArea step={step} >
            <ImgHolder mode={step === 0 ? "edit" : "view"} />
            </W.ImgArea>
            :
            <DropBox />
          }
          {(() => {
            switch (step) {
              // case 0:
              //   return (

              //   );
              case 1:
                return (
                  <W.WriteArea>
                    <SelectPart part={part} setPart={setPart} />
                  </W.WriteArea>
                );
              case 2:
                return (
                  <W.WriteArea>
                    <MakeContent contents={content} setContents={setContent} />
                  </W.WriteArea>
                );
            }
          })()}
        </W.ContentWrapper>
        {/* {(() => {
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
                  <W.ImgArea><ImgHolder /></W.ImgArea>
                  <W.WriteArea>
                    <SelectPart part={part} setPart={setPart} />
                  </W.WriteArea>
                </W.ContentWrapper>
              );
            case 2:
              return (
                <W.ContentWrapper>
                  <W.ImgArea><ImgHolder/></W.ImgArea>
                  <W.WriteArea>
                    <MakeContent contents={content} setContents={setContent} />
                  </W.WriteArea>
                </W.ContentWrapper>
              );
          }
        })()} */}
      </ImgContext.Provider>
    </W.Wrapper>
  );
};

export default Write;
