import React, { useContext, useMemo, useRef } from "react";
import * as A from "./AddFile.style";

import { ImgContext } from "../../Write";

import add from "../../../../../static/record/add.svg";
import close from "../../../../../static/record/close.svg";

/**
 * @todo 이미지 여러 개 있을 때 스크롤로 넘어가게
 * @ask 이거 props가 맞을까 context가 맞을까
 * 어떤걸 기준으로 정함?
 */
const AddFile = ({imgURL}) => {
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
      temp = [...imgURL]
      temp.slice(key,1);
      imgURL = temp;
    // 파일 삭제
    console.log(key)
    let temp = [...imgFiles];
    temp.splice(key,1);
    setImgFiles(temp)

  }

//   const imgId = useRef(0);
  let imgId = useMemo(() => 0,[imgFiles])

  return (
    <A.Wrapper>
      <A.ImgContainer>
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
      </A.ImgContainer>
      <label htmlFor="exUpload">
        <img src={add} alt="plus" />
      </label>
      <input multiple type="file" id="exUpload" onChange={(e) => handleChangeFile(e)} />
    </A.Wrapper>
  );
};

export default AddFile;
