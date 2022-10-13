import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as L from "./register.style";
import bodyImage from "../register/registerImage/body.png";
import womanBodyImage from "../register/registerImage/womanBody.png";
import register1 from "../register/registerImage/bodyImage2.png";
import register2 from "../register/registerImage/bodyImage3.png";
import register3 from "../register/registerImage/bodyImage4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {

  const [Stage, setStage] = useState(1);
  const [ChageCss1, setChangeCss1] = useState("true");
  const [ChageCss2, setChangeCss2] = useState("true");
  const [ChageCss3, setChangeCss3] = useState("true");
  const [ChageCss4, setChangeCss4] = useState("true");
  const [isIdGood, setisIdGood] = useState("true");
  const idRef = useRef([]);   // id
  const [id, setId] = useState('')
  const passwordRef = useRef([]);   //password
  const nicknameRef = useRef([]);
  const [password,setPassword] = useState('')
  const [nickname,setNickname] = useState('')
  
  // const [id, setId] = useState('');
  const [age,setAge]=useState(1);   // age
  const [sex, setSex] = useState(1);   // gender
  const [interest, setInterest] = useState(); // interest bu we namza
  const [interestWoman,setInterestWoman] = useState(); // interest bu we woman
  const onChangeHandler=(e)=>{
    setSex(e.currentTarget.value)
  }

  const Options =[
    {key:1, value:"남자"},
    {key:2, value:"여자"},
  ]

  const manSelect = [
    {key:"팔", name:"팔"},
    {key:"가슴", name:"가슴"},
    {key:"코어", name:"코어"},
    {key:"다리", name:"다리"},
  ]

  const womanSelect = [
    {name:"팔"},
    {name:"복근"},
    {name:"옆구리"},
    {name:"엉덩이"},
    {name:"허벅지"},
  ]

  


  const checkID = () => {
    console.log("checkcheck")
    let url = "/user/register/check/"+idRef.current[0].value
    console.log(url)
    axios.get(url)
    .then((result) => {
      console.log(result.data.message)
      if(result.data.message == '중복된 아이디 입니다.') {
        setChangeCss1("false");
        setisIdGood("false");
      }else{
        setChangeCss1("true");
        setisIdGood("true");
      }
    })
    .catch((err) => {
      console.log(err)
    })

  }

  const submit = () => {
    axios.post('/user/register', {
      id,
      nickname,
      password,
      sex: sex === 1 ? "남" : "여",
      age: age,
      interest: sex === 1 ? interest : interestWoman,
      diary_pu_yn: false
    })
    .then((res) => {
      window.location.href = "/"
    })
    .catch((err) => {
      alert("회원가입 오류")
      console.log(err)
    })
    // console.log()
    // console.log(id)
    // console.log(age)
    // console.log(sex)
    // console.log(interest)
    // console.log(password)
    // console.log(nickname)
  }

  const Handler=(e)=>{
    console.log(e.target.value);
    setInterest(e.target.value);
  }
  const womanHandler=(e) => {
    console.log(e.target.value);
    setInterestWoman(e.target.value);
  }
  const CheckPasswoard = () => {
    const idd = idRef.current[0].value
    setId(idd)
    let password1 = passwordRef.current[0].value;
    let password2 = passwordRef.current[1].value;

    if(idd == "") {
      setChangeCss1("false");
    }else {
      setChangeCss1("true");
    }
    if(password1 == "") {
      setChangeCss2("false");
    }else {
      setChangeCss2("true");
    }
    if(password2 == "") {
      setChangeCss3("false");
      return;
    }else {
      setChangeCss3("true");
    }
    if (password1 !== password2) {
      setChangeCss3("false");
      console.log("false");
    } else if (password1 === password2) {
      setPassword(password1);
      setStage(Stage + 1);
      
    }
  };

  const checkNickname = () => {
    let nick = nicknameRef.current[0].value;
    // console.log(nick);
    // console.log(Content);
    // console.log(value);

    if(nick == "") {
      setChangeCss4("false");
      return;
    }else {
      setChangeCss4("true");
      setNickname(nick);
      setStage(Stage + 1);
    }
  }

  const checkNumber = () => {
    let num = age;
    if(num>100) {
      setAge(100);
    }
  }


  const MakeStage = () => {
    
    if (Stage == 1) {
      return (
        <>
          <L.register>
            <div style={{marginLeft: "50px"}} data-aos="fade-left" data-aos-duration="800">
              <h3>어깨어때</h3>
              <p></p>
              <p>ID</p>
              <L.Input type="id" name="inputText" ref={(e) => (idRef.current[0] = e)} id={ChageCss1} onChange={checkID}></L.Input>
              <L.IdCheck id={isIdGood}>ID가 중복됩니다.</L.IdCheck>
              <p style={{ marginTop: "50px" }}>비밀번호</p>
              <L.Input type="password" name="inputText" ref={(e) => (passwordRef.current[0] = e)} id={ChageCss2}></L.Input>

              <p style={{ marginTop: "50px" }}>비밀번호 확인</p>
              <L.Input type="password" name="inputText" ref={(e) => (passwordRef.current[1] = e)} id={ChageCss3}></L.Input>
              <p></p>
              <L.Btn onClick={CheckPasswoard}>다음</L.Btn>  
            </div>         
           <div  data-aos="fade-left" data-aos-duration="800">
            <L.Img src={register1}>
            
            </L.Img> 
            </div>
            </L.register>     
        </>
        
      );
    } else if (Stage == 2) {
      return (
        <L.register>
          <div style={{marginLeft: "50px"}} data-aos="fade-left" data-aos-duration="800">
            <h3>어깨어때</h3>
            <p>닉네임</p>
            <input type="text" name="inputText" ref={(e) => (nicknameRef.current[0] = e)} id={ChageCss4}></input>

            <p >성별</p>
            <div >
            <L.Select style={{ marginTop : "25px", marginLeft : "15px"}} onChange={onChangeHandler} value={sex}>
              {Options.map((item)=>(
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </L.Select>
            </div>

            <p style={{ marginTop: "50px" }}>나이</p>
            <L.sliderDiv className="slider-parent">
              <div className="buble"> 
                <input type="number" value={age} min="1" max="99" maxLength="3" onInput={checkNumber()} onChange={({ target: { value: radius } }) => {setAge(radius);}}/>
              </div>
              <L.slider style={{ marginTop: "30px"}} type="range" min="1" max="100" value={age} 
                onChange={({ target: { value: radius } }) => {setAge(radius);}}
              />
            </L.sliderDiv>
            <L.Btn onClick={checkNickname}>다음</L.Btn>
          </div>
          
          <div  data-aos="fade-left" data-aos-duration="800">
            <L.Img src={register2}>
            
            </L.Img> 
            </div>
        </L.register>
      );
    } else if (Stage == 3) {

        if(sex == 1) {
          return (
            <L.register>
              
              <L.man style={{marginLeft:"100px"}}>
              <h3>어깨어때</h3>
                {manSelect.map((man)=>(
                    <L.CustomLable key={man.name} checked={interest === man.name}>
                      <input 
                        type="radio" 
                        style={{weidth:"500px"}}
                        key={man.key} 
                        className="manInput"
                        value={man.name}
                        checked={interest === `${man.name}`}
                        onChange={Handler}
                        id ={man.name}
                        
                        />{man.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    </L.CustomLable>
                ))}
                <L.Btn onClick={submit}>회원가입 하기</L.Btn>
              </L.man>
              <L.introduceImg src={bodyImage}></L.introduceImg>
            </L.register>
          );
        }else {
          return (
            <L.register>
              <L.man style={{marginLeft:"100px"}}>
              <h3>어깨어때</h3>
                {womanSelect.map((woman)=>(
                    <L.CustomLable key={woman.name} checked={interestWoman === woman.name} className="woman">
                      <input 
                        type="radio" 
                        style={{weidth:"100px"}}
                        key={woman.key} 
                        className="manInput"
                        value={woman.name}
                        checked={interestWoman === `${woman.name}`}
                        onChange={womanHandler}
                        id ={woman.name}
                        
                        />{woman.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    </L.CustomLable>
                ))}
                <L.Btn onClick={submit}>회원가입 하기</L.Btn>
              </L.man>
              <L.introduceImg src={womanBodyImage}></L.introduceImg>
            </L.register>
          );
        }

    }
  };

  useEffect(() => {
    MakeStage();
  }, [Stage]);
  
  useEffect(()=>{
  })
  useEffect(() => {
    AOS.init();
  })
  return <L.registerContainer>{MakeStage()}</L.registerContainer>;
};

export default App;
