import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import * as B from "./index.style";
import api from "../../util/api";

const Render = () => {
  window.scrollTo(0, 0);

  const [comment, SetCommnet] = useState([
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한",
      comment: "나는 돼지야",
    },
    {
      writer: "박성한박성한",
      comment:
        "나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야나는 돼지야",
    },
  ]);

  const [paper, setPaper] = useState(
    "dfas&nbsp;&nbsp;&nbsp;dfsafdasdfsafsafsadf\n ## fsadf\n### fsadfsadf\n#### fsadfasd\n# adfsadfasdfsdfadfsad"
  );

  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    var decodeStr = decodeURI(window.location.href);
    let boardid = decodeStr.split("/")[5];
    let id = decodeStr.split("/")[4];
    console.log(id, boardid);
    //execrcise/id 운동/comment/boardid 댓글 번째 `exercise/${스쿼트}/comment/${1}`
    api.get(`exercise/2/board/${boardid}`).then(
      (res) => {
        const d = res.data.data;
        // console.log(d);
        // console.log(d[boardid - 1]);

        setPaper(d.content);
        setTitle(d.title);

        console.log(d);
        console.log("end");
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const [content, setContent] = useState("");
  // const [title, setTitle] = useState("asdasdadasdasd");

  let makeComment = comment.map((comment, i) => {
    return (
      <B.Bulletin key={i}>
        <h4>{comment.writer}</h4>
        <p>{comment.comment}</p>
      </B.Bulletin>
    );
  });

  const textArea = (e) => {
    setContent(e.target.value);
  };

  const sendContent = () => {
    // console.log(content);
  };

  return (
    <B.BulletinContainer>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <br />
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
      {/* <B.Write>
        <textarea onChange={textArea} value={content}></textarea>
        <button onClick={sendContent}>글 작성</button>
      </B.Write> */}
      {/* <B.Comment>{makeComment}</B.Comment> */}
    </B.BulletinContainer>
  );
};

export default Render;
