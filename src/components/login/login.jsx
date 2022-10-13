import React, { useState,useRef,useEffect } from "react";
import * as L from "./login.style";
import tempImg from "./loginImage/temp.jpg";
import axios from "axios";
import userInfoAtom from '../../global/user'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSetRecoilState } from "recoil";


const Login = () => {
  const idRef = useRef([]);
  const passwordRef = useRef([]);
  const [ChageCss1, setChangeCss1] = useState("true");
  const [ChageCss2, setChangeCss2] = useState("true");
  const navigate = useNavigate()
  const setUserInfo = useSetRecoilState(userInfoAtom);

  useEffect(() => {
    AOS.init();
  })

  const submit = () => {
    const idd = idRef.current[0].value
    const passwordd = passwordRef.current[0].value;
    if(passwordd == "") {
      setChangeCss2("false");
    }else setChangeCss2("true");
    
    if(idd != "" && passwordd != "") {
      axios.post('/user/login', {
        id: idRef.current[0].value,
        password: passwordRef.current[0].value
      })
      .then((result) => {
        navigate("/")
        setUserInfo(result.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  return (
    <L.Login>
      <div data-aos="fade-right" data-aos-duration="800">
        <L.Img src={tempImg}></L.Img>
      </div>
      <L.LoginContainer data-aos="fade-right" data-aos-duration="800">
        <h3>어깨 어때</h3>

        <p>ID</p>
        <L.Input type="id" ref={(e) => (idRef.current[0] = e)} id={ChageCss1}></L.Input>

        <p style={{ marginTop: "50px" }}>비밀번호</p>
        <L.Input type="password" ref={(e) => (passwordRef.current[0] = e)} id={ChageCss2}></L.Input>

        <div className="register">
          <a href="/register">회원가입하기</a>
        </div>

        <L.Btn onClick={submit}>로그인</L.Btn>
      </L.LoginContainer>
    </L.Login>
  );
};

export default Login;
