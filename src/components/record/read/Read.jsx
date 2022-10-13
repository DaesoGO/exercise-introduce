import React, { useState } from "react";
import * as R from "./Read.style";
import dumImg from "../testimgs/221015.jpg";
// import dumImg from "../testimgs/220803.jpg";
import DropDownMenu from "../../../common/dropDownMenu/DropDownMenu";
import { useEffect } from "react";
import api from "../../../util/api";

const Read = () => {
  //이미지, 운동 종류, 운동 부위, 글
  const post = {
    username: "김병관",
    date: "221004",
    img: dumImg,
    exe: ["밥", "먹기"],
    part: ["팔", "입"],
    content: "밥먹기 운동을 했따",
  };

  useEffect(() => {
    api.get('/diary/tomato4116/20220904').then(
      (result) => console.log(result),
      (error) => console.log(error)
    )
  },[])

  return (
    <R.Wrapper>
      <R.Section>
        <R.ImgWrapper>
          <R.Img src={post.img} />
        </R.ImgWrapper>
        <R.Article>
          <R.Header>
            <R.UserName>{post.username}</R.UserName>
            <R.Date>{post.date}</R.Date>
          </R.Header>
          <R.Comment>{post.content}</R.Comment>

          <R.Content>
            <hr />

            <DropDownMenu title="운동 종류" defaultOpen={true}>
              <R.ItemRowWrapper>
                {post.exe.map((i) => (
                  <R.rowItem key={i}>{i}</R.rowItem>
                ))}
              </R.ItemRowWrapper>
            </DropDownMenu>
            <hr />
            <DropDownMenu title="운동 부위" defaultOpen={true}>
              <R.ItemRowWrapper>
                {post.part.map((i) => (
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
