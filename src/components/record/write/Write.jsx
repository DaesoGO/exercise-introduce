import React, { useState, createContext, useEffect } from "react";

import { useRecoilState } from "recoil";
import { creatingStep } from "../../../stores/write/writeData";

import * as W from "./Write.style";

import DropBox from "./dropBox/DropBox";
import ImgHolder from "./imageHolder/ImgHolder";

import backArrow from "../../../static/record/write/back.svg";
import MakeContent from "./makeContent/MakeContent";
import SelectPart from "./selectPart/SelectPart";

export const ImgContext = createContext();

const Write = ({onClose}) => {
  const [step, setStep] = useRecoilState(creatingStep);

  // 이미지 유무
  const [isExist, setIsExist] = useState(false);
  const [imgFiles, setImgFiles] = useState([]);

  // 운동 종류,부위
  const [exe, setExe] = useState([]);
  const [part,setPart] = useState([]);

  // 글
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
      if (window.confirm('글을 작성할까요?')){
        console.log(imgFiles,exe,part,content);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (step === 0) {
      // 끄는 함수 받아야함
      if (window.confirm('모달을 닫을까요?')){
        console.log("모달닫기")
      }
      onClose();
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
          {(() => {
            switch (step) {
              case 0:
                return (
                  <>
                    {isExist ? (
                      <W.ImgArea>
                        <ImgHolder mode="edit" />
                      </W.ImgArea>
                    ) : (
                      <DropBox />
                    )}
                  </>
                );
              case 1:
                return (
                  <>
                    <W.ImgArea>
                      <ImgHolder mode="view" />
                    </W.ImgArea>
                    <W.WriteArea>
                      <SelectPart 
                      exe={exe} setExe={setExe}
                      part={part} setPart={setPart} 
                      />
                    </W.WriteArea>
                  </>
                );
              case 2:
                return (
                  <>
                    <W.ImgArea>
                      <ImgHolder mode="view" />
                    </W.ImgArea>
                    <W.WriteArea>
                      <MakeContent
                        contents={content}
                        setContents={setContent}
                      />
                    </W.WriteArea>
                  </>
                );
            }
          })()}
        </W.ContentWrapper>
      </ImgContext.Provider>
    </W.Wrapper>
  );
};

export default Write;
