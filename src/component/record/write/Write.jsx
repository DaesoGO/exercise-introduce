import React, { useState, createContext, useEffect} from 'react';
import * as W from "./Write.style"

import DropBox from './DropBox';
import EditImg from './EditImg';

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
                <button>다음</button>}
            </W.Menu>
            <ImgContext.Provider value={[setImgFiles]}>
                {
                    isExist ?
                    <EditImg/>
                    :<DropBox/>
                }
            </ImgContext.Provider>
        </W.Wrapper>
    );
};

export default Write;