import React from 'react';
import * as F from "./FitSize.style"

import size1x1 from "../../../../../static/record/size1x1.svg";
import size4x5 from "../../../../../static/record/size4x5.svg";
import size16x9 from "../../../../../static/record/size16x9.svg";

/**
 * @ask 이것도 map쓰면 안됨? ㅜㅜ
 */
const FitSize = ({setAspect}) => {
    return (
        <F.Wrapper>
            <F.AspectOption onClick={() => setAspect(1 / 1)}>
                <div>1 : 1</div><img src={size1x1} alt="size1:1" />
            </F.AspectOption>
            <hr/>
            <F.AspectOption onClick={() => setAspect(4 / 5)}>
                <div>4 : 5</div><img src={size4x5} alt="size4:5" />
            </F.AspectOption>
            <hr/>
            <F.AspectOption onClick={() => setAspect(16 / 9)}>
            <div>16 : 9</div><img src={size16x9} alt="size16:9" />
            </F.AspectOption>
        </F.Wrapper>
    );
};

export default FitSize;