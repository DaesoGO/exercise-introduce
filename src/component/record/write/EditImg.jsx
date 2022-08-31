import React, { useContext, useEffect, useState, useMemo     } from "react";
import * as E from "./EditImg.style";
import { ImgContext } from "./Write";

import leftArrow from "../../../static/record/leftArrow.svg";
import rightArrow from "../../../static/record/rightArrow.svg";
import zoomIn from "../../../static/record/zoomIn.svg"
import addFile from "../../../static/record/addFile.svg"
import sizeFree from "../../../static/record/sizeFree.svg"
import size1x1 from "../../../static/record/size1x1.svg"
import size4x5 from "../../../static/record/size4x5.svg"
import size16x9 from "../../../static/record/size16x9.svg"

const EditImg = () => {
  const [imgFiles, setImgFiles] = useContext(ImgContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImg(){
    setCurrentIndex((prev) => prev-1)
  }

  function backImg(){
    setCurrentIndex((prev) => prev+1)
  }

  function makeImgURL(){
    const temp = []
    imgFiles.forEach(file => {
        temp.push(URL.createObjectURL(file))
    })
    return temp
  }

  const imgURL = useMemo(() => makeImgURL(),[imgFiles])


  /** 
   * @todo button을 styled-component와 더불어(absolute위치) 컴포넌트로 만들어서
   * onClick때 함수 실행 시키도록 만들기
   */
  return (
    <E.Wrapper>
      <E.ImgContainer>
        <E.Img src={imgURL[currentIndex]}/>
      </E.ImgContainer>
      {currentIndex !== 0 && (
        <E.GoLeftButton onClick={nextImg}>
          <img src={leftArrow} alt="goLeft" />
        </E.GoLeftButton>
      )}
      {currentIndex !== imgFiles.length - 1 && (
        <E.GoRightButton onClick={backImg}>
          <img src={rightArrow} alt="goRight" />
        </E.GoRightButton>
      )}
      <E.fitSizeButton>
        <img src={sizeFree} alt="fitSize" />
      </E.fitSizeButton>
      <E.zoomButton>
        <img src={zoomIn} alt="zoom" />
      </E.zoomButton>
      <E.addFileButton>
        <img src={addFile} alt="addFile" />
      </E.addFileButton>
    </E.Wrapper>
  );
};

export default EditImg;
