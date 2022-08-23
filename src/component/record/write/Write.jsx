import React, { useState, useCallback, useEffect } from 'react';
import * as W from "./Write.style"

import DropBox from './DropBox';


const Write = () => {

    // 이미지 유무
    const [isExist,setIsExist] = useState(false)



    return (
        <W.Wrapper>
            <W.Menu>
                {isExist && <button>다음</button>}
            </W.Menu>
            <DropBox setIsExist={setIsExist}/>
        </W.Wrapper>
    );
};

export default Write;