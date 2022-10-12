import styled from "styled-components";

export const BulletinContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  //제목
  h1 {
    color: black;
    font-size: 60px;
  }
  //운동 종목
  h3 {
  }

  .markdown--container {
    background: rgba(54, 121, 253, 0.05);
    width: 80%;
    height: auto;

    .markdown {
      padding: 50px;

      font-weight: 400;
      font-size: 20px;

      h1 {
        font-size: 60px;
      }
    }
  }
`;

export const Write = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  width: 80%;

  textarea {
    width: 87%;
    height: 45px;

    resize: none;
    outline: none;

    box-sizing: border-box;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    font-size: 20px;

    border: 2px solid #0a1e40;
    border-radius: 10px;
  }

  button {
    width: 10%;
    height: 45px;
    margin-left: 3%;

    background-color: #0a1e40;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #233c68;
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Bulletin = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
  background-color: white;
  //작성자
  a {
    margin-left: 20px;
    /* color: #a4a4a4; */
    color: black;
  }

  //댓글내용
  p {
    margin-left: 30px;
    /* color: #f1f1f1; */
    color: blue;
  }
`;
