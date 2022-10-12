import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import * as B from "./index.style";

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
      writer: "박성한",
      comment: "나는 돼지야",
    },
  ]);

  const [content, setContent] = useState("");

  let makeComment = comment.map((comment, i) => {
    return (
      <B.Bulletin key={i}>
        <a>{comment.writer}</a>
        <p>{comment.comment}</p>
      </B.Bulletin>
    );
  });

  const [paper, setPaper] = useState(
    "dfas&nbsp;&nbsp;&nbsp;dfsafdasdfsafsafsadf\n ## fsadf\n### fsadfsadf\n#### fsadfasd\n# adfsadfasdfsdfadfsad"
  );

  const [title, setTitle] = useState("asdasdadasdasd");

  return (
    <B.BulletinContainer>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <br />
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
      <B.Write>
        <textarea></textarea>
        <button>글 작성</button>
      </B.Write>
      {/* <B.Comment>{makeComment}</B.Comment> */}
    </B.BulletinContainer>
  );
};

export default Render;
