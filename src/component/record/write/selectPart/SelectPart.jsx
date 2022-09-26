import React from 'react';
import DropDownMenu from '../../../../common/dropDownMenu/DropDownMenu';
import * as S from "./SelectPart.style"

import search from "../../../../static/record/write/search.svg"
import { useState } from 'react';

const selectPart = ({part,setPart}) => {

    // 서버한테 받아올 운동 목록
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

    const selectedExe = [
        {
            id:2,
            name:"스쿼트 스쿼트 스쿼트스쿼트스쿼트스쿼트스쿼트 스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트스쿼트",
        },{
            id:4,
            name:"턱걸이"
        },{
            id:6,
            name:"코딩하기"
        },{
            id:12,
            name:"코딩하기"
        },{
            id:13,
            name:"코딩하기"
        },{
            id:14,
            name:"코딩하기"
        },{
            id:15,
            name:"코딩하기"
        }
        
    ]

    const [searchValue,setSearchValue] = useState("");

    
    function searchExe(){
        console.log(searchValue,"를 서버에 검색")
    }


    /**
     * @todo ExeKind, ExePart컴포넌트로 안나누기
     */
    return (
        <S.Wrapper>
            <DropDownMenu title="운동 선택" defaultOpen="open">
                <S.ItemColWrapper>
                <S.SearchWrapper>
                    <S.SearchInput>
                        
                    </S.SearchInput>
                    <img src={search} alt="검색" onClick={searchExe} />
                </S.SearchWrapper>
                {
                    exeKinds.map((i) => (
                        <S.Item key={i.id}>
                            {i.name}
                        </S.Item>
                    ))
                }
                </S.ItemColWrapper>
            </DropDownMenu>
            <DropDownMenu title="선택된 운동" defaultOpen="open">
                <S.ItemRowWrapper>
                {
                    selectedExe.map((i) => (
                        <S.rowItem key={i.id}>
                            {i.name}
                        </S.rowItem>
                    ))
                }
                </S.ItemRowWrapper>
            </DropDownMenu>
            <DropDownMenu title="운동 부위" defaultOpen="open">
                

                <S.ItemColWrapper>
                    {
                        part.map((i) => (
                            <S.Item key={i.id} >{i.name}</S.Item>
                        ))
                    }
                </S.ItemColWrapper>
                
                {/* exepart는 일단은 글로만, 시간되면 svg까지 쫌 ㄱㄱ */}
                {/* <ExePart part={part} />  */}

            </DropDownMenu>
            <hr />
        </S.Wrapper>
    );
};

export default selectPart;