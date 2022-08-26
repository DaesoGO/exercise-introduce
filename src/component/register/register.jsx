import React from "react";
import * as L from "./register.style";
const register = () => {
  return (
    <L.Login>
        
      <L.LoginContainer>
        <h3>Exercise Introduce</h3>

        <p>email</p>
        <L.Input type="email"></L.Input>

        <p style={{ marginTop: "50px" }}>passwoard</p>
        <L.Input type="password"></L.Input>

        <div className="register">
          <a href="/register">회원가입하기</a>
        </div>

        <L.Btn>다음</L.Btn>
      </L.LoginContainer>
    </L.Login>
  );
};

export default register;
