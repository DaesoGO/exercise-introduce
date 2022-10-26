import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import api from "../../../util/api";
import * as W from "./index.style";

const Write = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const [paper, setPaper] = useState("");
  const [title, setTitle] = useState("");
  const textRef = useRef();

  const [serverPaper, setServerPaper] = useState("");

  useEffect(() => {
    let textarea = document.getElementById("autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 96}px`;
    }
  }, [paper]);

  const sendData = () => {
    if (paper.length > 0 && title.length > 0) {
      api
        .post("exercise/squatting/board", {
          title: title,
          content: paper,
        })
        .then((res) => {
          console.log(res);
          navigate("/introduce/:id");
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const checkKey = (e) => {
    if (e.key === " ") {
      setServerPaper((serverPaper + "&nbsp;").replace(" ", ""));
    }
    if (e.key === "Enter") {
      setServerPaper(serverPaper + "\n");
    }
    serverPaper;
  };

  const changePaper = useCallback((e) => {
    setPaper(e.target.value);
    setServerPaper(e.target.value);
  }, []);

  const changeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const simpleStruct = useCallback(
    (type) => {
      switch (type) {
        case "h1":
          setPaper(paper.concat("\n\n# "));
          textRef.current.focus();
          return;
        case "h2":
          setPaper(paper.concat("\n\n## "));
          textRef.current.focus();
          return;
        case "h3":
          setPaper(paper.concat("\n\n### "));
          textRef.current.focus();
          return;
        case "h4":
          setPaper(paper.concat("\n\n#### "));
          textRef.current.focus();
          return;
        case "bold":
          setPaper(paper.concat("\n\n**텍스트**"));
          textRef.current.focus();
          return;
        case "italic":
          setPaper(paper.concat("\n\n_텍스트_ "));
          textRef.current.focus();
          return;
        case "pre":
          setPaper(paper.concat("\n\n> "));
          textRef.current.focus();
          return;
        case "link":
          setPaper(paper.concat("\n\n[링크텍스트](url) "));
          textRef.current.focus();
          return;
        case "img":
          setPaper(paper.concat("\n\n![]() "));
          textRef.current.focus();
          return;
        case "code":
          setPaper(paper.concat("\n\n```\n``` "));
          textRef.current.focus();
          return;
      }
    },
    [paper]
  );

  return (
    <W.WriteStyle>
      <div className="writing">
        <input
          className="title"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={changeTitle}
        />

        <div className="header">
          <div className="h1" onClick={() => simpleStruct("h1")}></div>
          <div className="h2" onClick={() => simpleStruct("h2")}></div>
          <div className="h3" onClick={() => simpleStruct("h3")}></div>
          <div className="h4" onClick={() => simpleStruct("h4")}></div>
          <div className="bold" onClick={() => simpleStruct("bold")}></div>
          <div className="italic" onClick={() => simpleStruct("italic")}></div>
          <div className="pre" onClick={() => simpleStruct("pre")}></div>
          <div className="link" onClick={() => simpleStruct("link")}></div>
          <div className="img" onClick={() => simpleStruct("img")}></div>
          <div className="code" onClick={() => simpleStruct("code")}></div>
        </div>
        <textarea
          id="autoTextarea"
          placeholder="끄적끄적..."
          onChange={changePaper}
          value={paper}
          ref={textRef}
          onKeyDown={checkKey}
        ></textarea>
        <W.WriteTable>
          <button onClick={sendData}>글 작성</button>
        </W.WriteTable>
      </div>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
    </W.WriteStyle>
  );
};

export default Write;
