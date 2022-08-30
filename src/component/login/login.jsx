import React from "react";
import * as L from "./login.style";
import tempImg from "../loginImage/temp.jpg";
const Login = () => {
  return (
    <L.Login>
      <L.Img src={tempImg}></L.Img>
      <L.LoginContainer>
        <h3>Exercise Introduce</h3>

        <p>ID</p>
        <L.Input type="id"></L.Input>

        <p style={{ marginTop: "50px" }}>비밀번호</p>
        <L.Input type="password"></L.Input>

        <div className="register">
          <a href="/register">회원가입하기</a>
        </div>

        <L.Btn>로그인</L.Btn>
      </L.LoginContainer>
    </L.Login>
  );
};

export default Login;
