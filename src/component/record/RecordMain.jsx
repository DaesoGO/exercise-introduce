import React, { useEffect, useRef, useState } from "react";
import * as R from "./RecordMain.style";
import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

const RecordMain = () => {

  const [isLoading,setIsLoading] = useState(false)
  const [intersector, inView] = useInView();

  useEffect(() => {
      console.log(inView)
  },[inView])

  // 정방형 사진이여야만 한다
  const dum = [
    "220805",
    "220806",
    "220807",
    "220808",
    "220809",
    "220810",
    "220811",
    "220812",
    "220813",
    "220814",
    "220815",
  ];
  const username = "codingbotPark";

  // 오늘 일기를 썻는가
  const [writed, setWrited] = useState(false);

  const [showInfo, setShowInfo] = useState(-1);

  function makeDateForm(key) {
    return [
      Number(key.slice(0, 2)),
      Number(key.slice(2, 4)),
      Number(key.slice(4, 6)),
    ].join(" . ");
  }


  useEffect(() => {
    if (inView) {
      setIsLoading(true)
      console.log("서버 요청")
      setTimeout(() => {
        setIsLoading(false)
      },2000)
    }
  },[inView])


  return (
    <R.Wrapper>
      <R.Content>
        <Link to={`${username}/write`}>
          <R.WriteB>
            <R.WirteBPlus>+</R.WirteBPlus>
            <R.WirteBComment>오늘 작성된 기록이 없습니다</R.WirteBComment>
          </R.WriteB>
        </Link>
        {dum.map((i, idx) => (
          <Link key={i} to={`${username}/${i}`}>
            <R.PostWrapper
              onMouseOver={() => setShowInfo(idx)}
              onMouseLeave={() => setShowInfo(-1)}
            >
              <R.PostImg src={require(`./testimgs/${i}.jpg`).default} />
              {showInfo === idx && <R.PostInfo>{makeDateForm(i)}</R.PostInfo>}
            </R.PostWrapper>
          </Link>
        ))}

        <div ref={intersector} />
      </R.Content>
      {isLoading && <R.Loading/>}
    </R.Wrapper>
  );
};

export default RecordMain;

// 두가지
// 1 = 엘리먼트 요소의 height구해서 현재 스크롤 위치까지 계산
// 성능상으로 안좋음
// 2. intersection 옵져버 = 특정요소에 옵저버 걸어놓기
