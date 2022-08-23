import React, { useEffect, useRef, useState } from "react";
import * as R from "./RecordMain.style";
import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import Modal from "../../common/Modal/Modal";
import Write from "./write/Write";

const RecordMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [intersector, inView] = useInView();

  const [modalVisible, setModalVisible] = useState(true);
  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  useEffect(() => {
    console.log(inView);
  }, [inView]);

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

  /** 날짜를 문자열로 받아서 년.월.일 의 형태로 반환하는 함수 */
  function makeDateForm(key) {
    return [
      Number(key.slice(0, 2)),
      Number(key.slice(2, 4)),
      Number(key.slice(4, 6)),
    ].join(" . ");
  }

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      console.log("서버 요청");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [inView]);
  /**
   * @todo 아무 것도 선택되지 않았을 때 바깥에 드랍됐을 때도 인식
   * @todo 선택된게  있으면 바탕을 눌렀을 때 삭제 확인 뛰우기
   */
  return (
    <R.Wrapper>
      {modalVisible && (
        <Modal
          name="hi"
          onClose={closeModal}
          maskCloseable={true}
          visible="true"
          menu="안녕"
        >
         <Write/>
        </Modal>
      )}

      <R.Content>
        <R.WriteB onClick={openModal}>
          <R.WirteBPlus>+</R.WirteBPlus>
          <R.WirteBComment >
            오늘 작성된 기록이 없습니다
          </R.WirteBComment>
        </R.WriteB>
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
      {isLoading && <R.Loading />}
    </R.Wrapper>
  );
};

export default RecordMain;

// 두가지
// 1 = 엘리먼트 요소의 height구해서 현재 스크롤 위치까지 계산
// 성능상으로 안좋음
// 2. intersection 옵져버 = 특정요소에 옵저버 걸어놓기
