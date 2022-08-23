import React,{ useRef, useState} from "react";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";

const DropBox = ({setIsExist}) => {

  // 이벤트를 prevent하고, stopPropagation
  const dragFunction = (e,type) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(type)
  }


  return (
    <D.Wrapper
      onDragOver={(e) => dragFunction(e,'over')}
      onDrop={(e) => dragFunction(e,'drop')}
      onDragEnter={(e) => dragFunction(e,'enter')}
      onDragLeave={(e) => dragFunction(e,'leave')}
    >
      <img src={fileSvg} />
      {/* <div>{isDragging ? "요기 놓으세요" : "파일을 드레그하세요"}</div> */}
      <label htmlFor="fileBox">업로드</label>
      <input type="file" id="fileBox"/>
    </D.Wrapper>
  );
};

export default DropBox;
