import React, { useContext, useEffect, useState, useMemo     } from "react";
import * as E from "./EditImg.style";
import { ImgContext } from "./Write";

import leftArrow from "../../../static/record/leftArrow.svg";
import rightArrow from "../../../static/record/rightArrow.svg";
import { ThemeProvider } from "styled-components";

const EditImg = () => {
  const [imgFiles, setImgFiles] = useContext(ImgContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImg(){
    setCurrentIndex((prev) => prev-1)
  }

  function backImg(){
    setCurrentIndex((prev) => prev+1)
  }

  useEffect(() => {
    console.log(currentIndex)
  },[currentIndex])

  function makeImgURL(){
    const temp = []
    imgFiles.forEach(file => {
        temp.push(URL.createObjectURL(file))
    })
    return temp
  }

  const imgURL = useMemo(() => makeImgURL(),[imgFiles])

  return (
    <E.Wrapper>
      <E.ImgContainer src={imgURL[currentIndex]} />
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
    </E.Wrapper>
  );
};

export default EditImg;
