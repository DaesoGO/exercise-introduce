import React, { useState, createContext, useEffect} from 'react';
import * as W from "./Write.style"

import DropBox from './dropBox/DropBox';
import EditImg from './imageHolder/EditImg';

import backArrow from "../../../static/record/write/back.svg"

export const ImgContext = createContext();

const Write = () => {

    // 이미지 유무
    const [isExist,setIsExist] = useState(false)
    const [imgFiles,setImgFiles] = useState([]) 

    useEffect(() => {
        if (imgFiles.length > 0){
            setIsExist(true)
        } else{
            setIsExist(false)
        }
    },[imgFiles])

    return (
        <W.Wrapper>
            <W.Menu>
                {isExist && 
                    <W.MenuInner>
                    <W.ButtonWithSvg>
                        <img src={backArrow} alt="back" />
                    </W.ButtonWithSvg>
                    <W.Button>다음</W.Button>
                    </W.MenuInner>
                }
            </W.Menu>
            <ImgContext.Provider value={[imgFiles,setImgFiles]}>
            <W.Content>
                {
                    isExist ?
                    <EditImg/>
                    :<DropBox/>
                }
            </W.Content>
            </ImgContext.Provider>
        </W.Wrapper>
    );
};

export default Write;