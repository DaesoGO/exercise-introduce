import React,{ useState } from 'react';
import * as M from "./MakeContent.style"
import DropDownMenu from '../../../../common/dropDownMenu/DropDownMenu';
import WriteTextArea from './writeTextArea/WriteTextArea';
import { useEffect } from 'react';


/**
 * 
 * @ask contents물어보기
 */
const MakeContent = ({
    contents,
    setContents
}) => {

    return (
        <M.Wrapper>
            <DropDownMenu title="글 내용" defaultOpen={true}>
                <WriteTextArea contents={contents} setContents={setContents} />
            </DropDownMenu>
            <hr />
        </M.Wrapper>
    );
};

export default MakeContent;