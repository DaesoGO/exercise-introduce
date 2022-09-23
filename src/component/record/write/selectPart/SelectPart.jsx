import React from 'react';
import DropDownMenu from '../../../../common/dropDownMenu/DropDownMenu';
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

    /**
     * @todo ExeKind, ExePart컴포넌트로 안나누기
     */
    return (
        <S.Wrapper>
            <DropDownMenu title="운동종류" defaultOpen="open">
                <S.ItemWrapper>
                {
                    exeKinds.map((i) => (
                        <S.Item key={i.id}>
                            {i.name}
                        </S.Item>
                    ))
                }
                </S.ItemWrapper>
            </DropDownMenu>
            <DropDownMenu title="운동부위" defaultOpen="open">
                

                <S.ItemWrapper>
                    {
                        part.map((i) => (
                            <S.Item key={i.id} >{i.name}</S.Item>
                        ))
                    }
                </S.ItemWrapper>
                
                {/* exepart는 일단은 글로만, 시간되면 svg까지 쫌 ㄱㄱ */}
                {/* <ExePart part={part} />  */}

            </DropDownMenu>
            <hr />
        </S.Wrapper>
    );
};

export default selectPart;