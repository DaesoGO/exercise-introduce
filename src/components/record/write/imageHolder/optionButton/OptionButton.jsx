import React from 'react';
import * as O from "./OptionButton.style"

import {Button} from "../ImgHolder.style"

/** 
 * @ask 이거 조금 더 확실하게 props값 하나 있으면 다른 거 없게 할 수 있는방법?
 * 이런 구조 괜찮은거 같음? 리뷰
 * 지금은 false로 해놨는데 props값 의문일 때 머 연산자 없음?
*/

/**
 * 
 * @param position 옵션 전체의 absolute적 위치(left또는 right 과 값을 문자열로)
 * @ask 문자열로 받는거 괜찮음?
 * @param src 이미지 소스
 * @param alt 이미지 이름, handler에 넣어줄 이름
 * @param buttonPosition 툴팁과 버튼의 상대적 위치(툴팁을 기준으로 left또는 right문자열)
 * @param handler 클릭 했을 때 실행될 함수
 * @ask handler를 props로 받음? 컴포넌트 안에 넣음? 
 * 컴포넌트에 넣는거면 저번에 물어봤던,
 * 컴포넌트를 사용해서 함수가 여러 번 선언된걸로 되는거 아님?
 * @param children 툴팁, 열리고 닫히는 상황이 포함된 jsx형태를 받는다
 */
const OptionButton = ({
    position,
    src,
    alt,
    buttonPosition,
    handler,
    children,
}) => {
    return (
        <O.Wrapper position={position} buttonPosition={buttonPosition}>
           {children} 
            <Button onClick={() => handler(`${alt}`)}>
                <img src={src} alt={alt} />
            </Button>
        </O.Wrapper>
    );
};

export default OptionButton;