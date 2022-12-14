import React, { useEffect, useRef, useState } from "react";
import * as R from "./RecordMain.style";
import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import Modal from "../../common/modal/Modal";
import Write from "./write/Write";
import api from "../../util/api";

import { useRecoilValue,useRecoilState } from "recoil";
import { creatingStep } from "../../stores/write/writeData";
import userInfoAtom from "../../global/user"

import config from "../../config/config.json"

const RecordMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [intersector, inView] = useInView();

  const userInfo = useRecoilValue(userInfoAtom)
  const [userName,setUserName] = useState()
  // const username = "tomato4116"

  const [step, setStep] = useRecoilState(creatingStep);


  const [modalVisible, setModalVisible] = useState(false);
  function openModal() {
    setModalVisible(true);
  }

  
  function closeModal() {
    setStep(0)
    setModalVisible(false);
  }

  const [post,setPost] = useState([]);

  function requestPost(reqUserName){
    api.get(`/diary/${reqUserName}`).then(
      (result) => {
         console.log(result)

         setPost(
           result.data.data.map(
            (i) => {
              return {
                photo:`${config.server}/upload/${i.photo}`,
                date:i.createdAt.split('T')[0].replaceAll('-','')
              }
            }
           )
         )

      }, (error) => {
       console.log(error)
      }
   )
  }


  // 오늘 일기를 썻는가
  const [writed, setWrited] = useState(false);
  const [showInfo, setShowInfo] = useState(-1);

  /** 날짜를 문자열로 받아서 년.월.일 의 형태로 반환하는 함수 */
  function makeDateForm(key) {
    return [Number(key.slice(0, 4)), Number(key.slice(4, 6)), Number(key.slice(6, 8))].join(" . ");
  }

  useEffect(() => {
    if (userInfo) {
      setUserName(userInfo.user.id)
    }
  },[userInfo])

  // 무한 스크롤
  useEffect(() => {
    if (inView && userName) {
      setIsLoading(true);
      requestPost(userName);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [inView,userName]);
  /**
   * @todo 아무 것도 선택되지 않았을 때 바깥에 드랍됐을 때도 인식
   */
  return (
    <R.Wrapper>
      {modalVisible && (
        <Modal
          name="hi"
          onClose={closeModal}
          maskCloseable={true}
          visible="true"
          checkClose={true}
        >
         <Write onClose={closeModal} />
        </Modal>
      )}

      <R.Content>
        <R.WriteB onClick={openModal}>
          <R.WirteBPlus>+</R.WirteBPlus>
          <R.WirteBComment >
            오늘 작성된 기록이 없습니다
          </R.WirteBComment>
          <R.WriteBSubComment>
            (정방형 사진을 추천합니다)
          </R.WriteBSubComment>
        </R.WriteB>
        {post.map((i, idx) => (
          <Link key={i.date} to={`${userName}/${i.date}`}>
            <R.PostWrapper
              onMouseOver={() => setShowInfo(idx)}
              onMouseLeave={() => setShowInfo(-1)}
            >
              <R.PostImg src={i.photo} />
              {showInfo === idx && <R.PostInfo>{makeDateForm(i.date)}</R.PostInfo>}
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
