import Star from "./star/index";
import api from '../../../util/api/index'
import Explanation from "./explanation";
import Recommand from "./recommand";
import * as S from "./info.style";
import { useState, useEffect } from "react";

const Render = ({ info, comment }) => {
    return (
        <S.MainContainer>
            <Star info={info}/>
            <Explanation info={info.precautions} />
            <Recommand comment={comment}/>
        </S.MainContainer>
    );
};
export default Render;
