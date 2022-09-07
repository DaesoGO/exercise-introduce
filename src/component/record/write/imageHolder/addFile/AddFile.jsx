import React, { useContext, useMemo, useRef } from "react";
import * as A from "./AddFile.style";

import { ImgContext } from "../../Write";

import add from "../../../../../static/record/add.svg";
import close from "../../../../../static/record/close.svg";

/**
 *
 * @ask 이거 props가 맞을까 context가 맞을까
 * 어떤걸 기준으로 정함?
 */
const AddFile = () => {
  const [imgFiles, setImgFiles] = useContext(ImgContext);

  /**
   * @ask addFile이라는 함수를 어떻게 같이 사용할 수 있을까요?
   */
  function addFile(file) {
    setImgFiles((prev) => [...prev, file]);
  }
  function handleChangeFile(e) {
    [...e.target.files].forEach((file) => addFile(file));
  }

  function deleteFile(key) {
    // 파일 삭제
    console.log(key)
    let temp = [...imgFiles];
    temp.splice(key,1);
    console.log(temp)
    setImgFiles(temp)
  }

//   const imgId = useRef(0);
  let imgId = useMemo(() => 0,[imgFiles])

  return (
    <A.Wrapper>
      {imgURL.reverse().map((url) => {
        const key = imgId++;
        return (
          <A.Desc key={key}>
            <A.DescImg src={url} alt="descImage" />
            <A.DescImgDel onClick={() => deleteFile(key)}>
              <img src={close} alt="close" />
            </A.DescImgDel>
          </A.Desc>
        );
      })}
      <label htmlFor="exUpload">
        <img src={add} alt="plus" />
      </label>
      <input multiple type="file" id="exUpload" onChange={(e) => handleChangeFile(e)} />
    </A.Wrapper>
  );
};

export default AddFile;
