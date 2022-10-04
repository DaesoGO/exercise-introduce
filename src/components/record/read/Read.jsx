import React from "react";
import * as R from "./Read.style";
// import dumImg from "../testimgs/220804.jpg";
import dumImg from "../testimgs/220803.jpg";

const Read = () => {
  // 이미지, 운동 종류, 운동 부위, 글
  const post = {
    img: dumImg,
    exe: "밥 먹기",
    part: ["팔", "입"],
    content: "밥먹기 운동을 했따",
  };

  return (
    <R.Wrapper>
      <R.Section>
        <R.ImgWrapper>
          <R.Img src={post.img} />
        </R.ImgWrapper>
        <R.Article></R.Article>

        {/* <R.Header>
                    <R.Title>{post.title}</R.Title>
                </R.Header>
                <R.Article>
                
                </R.Article> */}
      </R.Section>
    </R.Wrapper>
  );
};

export default Read;
