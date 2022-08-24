import React, { useCallback, useEffect, useRef, useState } from "react";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";
import axios from "axios";

const DropBox = ({ setIsExist }) => {
  // ondrop과 ondragOver이벤트가 있는 곳이 drop zone, 이미지 drop이 발생할 수 있다
  const [isDragging, setIsDragging] = useState(false);

  // 이미지 저장 / 파일
  const [imgFiles, setImgFiles] = useState(null);

  const dragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  function drop(e) {
    e.preventDefault();
    console.log(e);

    // const formData = new FormData();

    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          // formData.append("image", file);
          addFile(file)
          // console.log(file)
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file) => {
        addFile(file)
        // formData.append("image", e.dataTransfer.files[i]);
        // console.log(file);
      });
    }
    setIsDragging(false);
  }

  function handleChangeFile(e) {
    console.log('file내용',imgFiles)
    console.log(e.target.files)
    const files = e.target.files;
    files.forEach((file) => {
      addFile(file)
    })
  }

  // 파일을 하나씩 더해준다
  function addFile(files){
    console.log(files)
    if (imgFiles != null){
      setImgFiles([...imgFiles,files]);
    } else if (files.length > 0) {
      setImgFiles([...files])
    } else {
      setImgFiles(files)
    }
  }

  useEffect(() => {
    console.log(imgFiles)
  },[imgFiles])
  

  /**
   * @todo 전체를 기준으로 파일을 받을 때 어썸한 방법
   * @todo setIsExist같은 변수들이 부모에게 내려오는게, 의미에 맞을까 아니면 전역이 맞을 까
   * @todo onDragLeave 와 Enter는 왜 함수로 사용할 수 없는가
   */

  // function dragLeave(e){
  //   setIsDragging(true)
  //   e.preventDefault()
  // }

  return (
    <D.Wrapper
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e)}
      onDragLeave={() => setIsDragging(false)}
      onDragEnter={() => setIsDragging(true)}
    >
      <img src={fileSvg} />
      <div>{isDragging ? "요기 놓으세요" : "파일을 드래그하세요"}</div>
      <label htmlFor="fileBox">업로드</label>
      <input type="file" id="fileBox" onChange={handleChangeFile} multiple />
    </D.Wrapper>
  );
};

export default DropBox;
