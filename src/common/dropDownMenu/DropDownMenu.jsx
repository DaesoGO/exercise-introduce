import React from 'react';
import * as D from "./DropDownMenu.style"
import More from "../../static/record/write/expandMore.svg";
import Less from "../../static/record/write/expandLess.svg";

/**
 * @ask 
 */
const DropDownMenu = ({
    title,

}) => {

    return (
        <D.Wrapper>
            <D.Title>
                <div>{title}</div>
                <img src={More} alt="더보기" />
            </D.Title>
            <D.Content>
                ㅂㅇ
            </D.Content>
        </D.Wrapper>
    );
};

export default DropDownMenu;