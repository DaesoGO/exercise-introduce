import React,{useContext, useMemo} from 'react';
import * as A from "./AddFile.style"

import { ImgContext } from '../../Write';

const AddFile = () => {

    const [imgFiles,setImgFiles] = useContext(ImgContext);

    /**
     * @ask addFile이라는 함수를 어떻게 같이 사용할 수 있을까요?
     */
    function addFile(file){
        setImgFiles((prev) => [...prev,file]);
    }
    function handleChangeFile(e){
        [...e.target.files].forEach((file) => addFile(file))
    }


    function makeImgURL(){
        const temp = [];
        imgFiles.forEach((file) => {
            temp.push(URL.createObjectURL(file));
        })
        return temp;
    }

    const imgURL = useMemo(() => makeImgURL(),[imgFiles]);

    return (
        <A.Wrapper>
            <A.ImgContainer>
            {
                imgURL.map((url) => (
                    <A.DescImg>

                    </A.DescImg>
                ))
            }
            </A.ImgContainer>
            <label htmlFor="exUpload">+</label>
            <input type="file" id="exUpload" 
            onChange={(e) => handleChangeFile(e)} />
        </A.Wrapper>
    );
};

export default AddFile;