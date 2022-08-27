import React,{useContext} from 'react';
import * as E from "./EditImg.style"
import { ImgContext } from './Write';

const EditImg = () => {
    const [setImgFiles] = useContext(ImgContext)

    return (
        <E.Wrapper>
            
        </E.Wrapper>
    );
};

export default EditImg;