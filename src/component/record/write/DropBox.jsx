import React, { useCallback, useEffect, useContext, useState } from "react";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";
import { ImgContext } from "./Write";


const DropBox = () => {
  // ondrop과 ondragOver이벤트가 있는 곳이 drop zone, 이미지 drop이 발생할 수 있다
  const [isDragging, setIsDragging] = useState(false);
  // 이미지 저장 / 파일
  const [imgFiles,setImgFiles] = useContext(ImgContext);

  const dragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  // form data 사용

  function drop(e) {
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          addFile(file);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file) => {
        addFile(file);
      });
    }
    setIsDragging(false);
  }

  function handleChangeFile(e) {
    const files = e.target.files;
    files.forEach((file) => {
      addFile(file);
    });
  }

  // 많은 파일이 들어가지 않고, drop함수에서 하나씩 비교해야하는 작업이 있기 때문에
  /**파일 한 개씩 더해준다*/
  function addFile(file) {
    console.log(file);
    setImgFiles((prev) => [...prev, file]);
  }

  function leave() {
    setIsDragging(false);
  }
  function enter() {
    setIsDragging(true);
  }

  return (
    <D.Wrapper
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e)}
      onDragEnter={enter}
      onDragLeave={leave}
    >
      <img src={fileSvg} />
      <h3>{isDragging ? "놓으세요" : "파일을 드래그하세요"}</h3>
      <label htmlFor="fileBox">업로드</label>
      <input type="file" id="fileBox" onChange={handleChangeFile} multiple />
    </D.Wrapper>
  );
};

export default DropBox;
