import React, { useState } from "react";
import * as R from "./Read.style";

import dumImg from "../testimgs/dum.jpeg";

// import dumImg from "../testimgs/220803.jpg";
import DropDownMenu from "../../../common/dropDownMenu/DropDownMenu";
import { useEffect } from "react";
import api from "../../../util/api";
import {useLocation } from "react-router-dom"

import config from "../../../config/config.json"

const Read = () => {
  //이미지, 운동 종류, 운동 부위, 글

  const location = useLocation()
  const splitedPath = location.pathname.split("/")
  console.log(`/diary/${splitedPath[splitedPath.length - 2]}/${splitedPath[splitedPath.length - 1]}`)

  const [content,setContent] = useState({
    username: "불러오는중입니다",
    date: "불러오는중입니다",
    img:undefined,
    exe: ["불러오는중입니다"],
    part: ["불러오는중입니다"],
    content: "불러오는중입니다",
  })

  
  useEffect(() => {
    api.get(`/diary/${splitedPath[splitedPath.length - 2]}/${splitedPath[splitedPath.length - 1]}`).then(
      (result) => {
        const resultData = result.data.data
        console.log(resultData);
        setContent({
          username:resultData.user.nickname,
          date:resultData.createdAt,
          img:`${config.server}/upload/${resultData.photo}`,
          exe:resultData.exercise.split("/"),
          part:resultData.part.split("/"),
          content:resultData.content
        })
      },
      (error) => console.log(error)
    )
  },[])

  return (
    <R.Wrapper>
      <R.Section>
        <R.ImgWrapper>
          <R.Img src={content.img} />
        </R.ImgWrapper>
        <R.Article>
          <R.Header>
            <R.UserName>{content.username}</R.UserName>
            <R.Date>{content.date}</R.Date>
          </R.Header>
          <R.Comment>{content.content}</R.Comment>

          <R.Content>
            <hr />

            <DropDownMenu title="운동 종류" defaultOpen={true}>
              <R.ItemRowWrapper>
                {content.exe.map((i) => (
                  <R.rowItem key={i}>{i}</R.rowItem>
                ))}
              </R.ItemRowWrapper>
            </DropDownMenu>
            <hr />
            <DropDownMenu title="운동 부위" defaultOpen={true}>
              <R.ItemRowWrapper>
                {content.part.map((i) => (
                  <R.rowItem key={i}>{i}</R.rowItem>
                ))}
              </R.ItemRowWrapper>
            </DropDownMenu>
            <hr />
          </R.Content>
        </R.Article>
      </R.Section>
    </R.Wrapper>
  );
};

export default Read;
