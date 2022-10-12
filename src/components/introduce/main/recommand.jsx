import { useState } from "react";
import * as S from "./recommand.style";

const Render = () => {
    const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
    const [easy, setEasy] = useState(["스쿼트", "런지"]);
    return (
        <S.MainContainer>
            <S.upperContainer>
                <S.inputForm placeholder="Search"/>
                <S.buttonContainer>
                    <S.divButton>button</S.divButton>
                    <S.divButton>button</S.divButton>
                </S.buttonContainer>
            </S.upperContainer>
            <S.lowerContainer>
                {[0, 0, 0].map((element, idx) => {
                    return (
                        <S.postContainer>
                            <S.authContainer>
                                <S.writerName>박종현</S.writerName>
                                <S.postName>종박이는 스이세이를 사랑해</S.postName>
                            </S.authContainer>
                            <S.commentContainer>
                                <S.commentCount>123</S.commentCount>
                            </S.commentContainer>
                        </S.postContainer>
                    )
                })}
            </S.lowerContainer>
        </S.MainContainer>
    )
}

export default Render;
