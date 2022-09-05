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
import fitSize from "../../../../static/record/fitSize.svg";

import OptionButton from "./optionButton/OptionButton";
import FitSize from "./fitSize/FitSize";
import Zoom from "./zoom/Zoom";
import AddFile from "./addFile/AddFile"
import Cropper from "react-easy-crop";

const EditImg = () => {
  const [imgFiles, setImgFiles] = useContext(ImgContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  
  // 7배가 최대?
  const [zoom, setZoom] = useState(1);
  const [aspect,setAspect] = useState(1/1)

  const [selectedOption, setSelectedOption] = useState("");

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


  function clickOption(option){
    if (selectedOption === option){
      setSelectedOption(-1)
    } else {
      setSelectedOption(option)
    }
  }

  /**
   * @ask OptionButton 컴포넌트에 children으로 저렇게 넣는거 맞나?
   * 형 같으면 어케할거임? 그 때 말했던거 이해를 제대로 못한듯
   * 
   * 애초에 버튼이라는 똑같이 생긴 것들을 하나의 컴포넌트로 했고, optionButton의 로직을 수행하는 컴포넌트에 넣는것도 좋을듯
   * 
   * @ask position을 저렇게 글로 줘도 괜찮죠?
   */

  return (
    <E.Wrapper>
      <E.ImgContainer>
        {/* <E.Img src={imgURL[currentIndex]}/> */}
        <Cropper
          image={imgURL[currentIndex]}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          />
          <E.ContainerSupporter aspect={aspect} >
            <div/><div/>
          </E.ContainerSupporter>
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

      <OptionButton
        position={"left:15px"}
        src={fitSize}
        alt={"fitSize"}
        buttonPosition={"left"}
        handler={clickOption}
      >
        {selectedOption === "fitSize" && <FitSize setAspect={setAspect} />}
      </OptionButton>

      <OptionButton
        position={"left:60px"}
        src={zoomIn}
        alt={"zoom"}
        buttonPosition={"left"}
        handler={clickOption}
      >
        {selectedOption === "zoom" && <Zoom zoom={zoom} setZoom={setZoom} />}
      </OptionButton>

      <OptionButton
        position={"right:15px"}
        src={addFile}
        alt={"addFile"}
        buttonPosition={"right"}
        handler={clickOption}
      >
        {selectedOption === "addFile" && <E.OptionInfo></E.OptionInfo>}
      </OptionButton>

    </E.Wrapper>
  );
};

export default EditImg;
