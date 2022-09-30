import React from 'react';
import * as W from "./WriteTextArea.style"

const WriteTextArea = ({
    setContents
}) => {
    function onChange(e){
        setContents(e.target.value)
    }

    return (
        <W.Wrapper>
            <W.TextArea onChange={(e) => onChange(e)} placeholder='내용 입력'/>
        </W.Wrapper>
    );
};

export default WriteTextArea;