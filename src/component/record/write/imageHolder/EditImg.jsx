import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import * as E from "./EditImg.style";
import { ImgContext } from "../Write";

import leftArrow from "../../../../static/record/leftArrow.svg";
import rightArrow from "../../../../static/record/rightArrow.svg";
import zoomIn from "../../../../static/record/zoomIn.svg";
import addFile from "../../../../static/record/addFile.svg";
import sizeFree from "../../../../static/record/sizeFree.svg";
import size1x1 from "../../../../static/record/size1x1.svg";
import size4x5 from "../../../../static/record/size4x5.svg";
import size16x9 from "../../../../static/record/size16x9.svg";

import Cropper from "react-easy-crop";

const EditImg = () => {
  const [imgFiles, setImgFiles] = useContext(ImgContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [selectedOption, setSelectedOption] = useState(-1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  function nextImg() {
    setCurrentIndex((prev) => prev - 1);
  }
  function backImg() {
    setCurrentIndex((prev) => prev + 1);
  }

  function makeImgURL() {
    const temp = [];
    imgFiles.forEach((file) => {
      temp.push(URL.createObjectURL(file));
    });
    return temp;
  }

  const imgURL = useMemo(() => makeImgURL(), [imgFiles]);


  function clickOption(index){
    if (selectedOption === index){
      setSelectedOption(-1)
    } else {
      setSelectedOption(index)
    }
  }

  /**
   * @todo button을 styled-component와 더불어(absolute위치) 컴포넌트로 만들어서
   * onClick때 함수 실행 시키도록 만들기
   * @ask 버튼 ui가 선택되면 뛰우는걸 다 비교로 하는게 맞는가
   * @ask 만약에 근데 컴포넌트에 저 함수가 다 있으면 가독성은 좋은데 오히려 안좋은거 아님?
   */
  return (
    <E.Wrapper>
      <E.ImgContainer>
        {/* <E.Img src={imgURL[currentIndex]}/> */}
        <Cropper
          image={imgURL[currentIndex]}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
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

      <E.EditOption left={15}>
        <E.Button
        onClick={() => clickOption(0)}
        >
          <img src={sizeFree} alt="fitSize" />
        </E.Button>
        {selectedOption === 0 &&
        <E.OptionInfo>

        </E.OptionInfo>
        }
      </E.EditOption>

      <E.EditOption left={60}>
        <E.Button
        onClick={() => clickOption(1)}
        >
          <img src={zoomIn} alt="zoom" />
        </E.Button>
      </E.EditOption>

      <E.EditOption right={15}>
        <E.Button
        onClick={() => clickOption(2)}
        >
          <img src={addFile} alt="addFile" />
        </E.Button>
      </E.EditOption>

    </E.Wrapper>
  );
};

export default EditImg;
