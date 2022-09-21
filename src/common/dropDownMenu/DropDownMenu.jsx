import React,{ useState } from 'react';
import * as D from "./DropDownMenu.style"
import More from "../../static/record/write/expandMore.svg";
import Less from "../../static/record/write/expandLess.svg";

/**
 * @ask 
 */
const DropDownMenu = ({
    title,
    defaultOpen=false,
    children,
}) => {

    /**
     * @ask 이거 img때문에 한 건데 useState로 관리하는거 맞죠?
     * render가 되니깐?
     */
    const [isOpen,setIsOpen] = useState(defaultOpen)

    return (
        // <D.Wrapper open={defaultOpen} >
        <D.Wrapper open={defaultOpen} >
            <D.Title>
                <div>{title}</div>
                {
                    isOpen ? 
                    <img src={More} alt="더보기" onClick={() => setIsOpen((prev) => !prev)} />:   
                    <img src={Less} alt="더보기 닫기" onClick={() => setIsOpen((prev) => !prev)} />
                }
            </D.Title>
            <D.Content>
                {children}
            </D.Content>
        </D.Wrapper>
    );
};

export default DropDownMenu;