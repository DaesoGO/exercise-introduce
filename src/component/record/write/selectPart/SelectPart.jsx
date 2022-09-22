import React from 'react';
import DropDownMenu from '../../../../common/dropDownMenu/DropDownMenu';
import ExePart from './exePart/ExePart';
import * as S from "./SelectPart.style"

const selectPart = ({part,setPart}) => {

    const exeKinds = [
    {
        id:1,
        name:"팔굽혀펴기"
    },{
        id:2,
        name:"스쿼트"
    },{
        id:3,
        name:"윗몸일으키기"
    },{
        id:4,
        name:"턱걸이"
    },{
        id:5,
        name:"기뮤띠"
    },{
        id:6,
        name:"코딩하기"
    },
]

    return (
        <S.Wrapper>
            <DropDownMenu title="운동종류" >
                {
                    exeKinds.map((i) => {
                        <S.ExeKind key={i.id}>
                            
                        </S.ExeKind>
                    })
                }
            </DropDownMenu>
            <DropDownMenu title="운동부위" defaultOpen="open">
                
                
                {/* exepart는 일단은 글로만, 시간되면 svg까지 쫌 ㄱㄱ */}
                <ExePart part={part} /> 

            </DropDownMenu>
            <hr />
        </S.Wrapper>
    );
};

export default selectPart;