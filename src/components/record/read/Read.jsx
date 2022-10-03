import React from 'react';
import * as R from "./Read.style"
import dumImg from "../testimgs/220804.jpg"

const Read = () => {
    // 이미지, 운동 종류, 운동 부위, 글
    const post = {
        title:"밥 먹기",
        content:"밥을 어떻게 먹나요?"
    }

    return (
        <R.Wrapper>
            <R.Content>
                <R.Header>
                    <R.Title>{post.title}</R.Title>
                </R.Header>
                <R.Article>
                    
                </R.Article>
            </R.Content>
        </R.Wrapper>
    );
};

export default Read;