import styled from "styled-components";
import AOS from "aos";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Img = styled.img`
    margin-top: 40px;
    margin-left: 50px;
  height: 800px;
  width: 720px;
`;


export const LoginContainer = styled.div`
  width: 720px;

font-family: "Arial";
font-style: normal;
font-weight: 400;
color: #000000;
margin-left: 100px;
justify-content: center;
align-items: center;
text-align: center;

h3 {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;

  text-align: left;
  margin-left: 120px;
  margin-top: 90px;
  margin-bottom: 100px;
}

a {
  font-size: 16px;
  line-height: 18px;

  color: #0a1e40;

  text-decoration: none;

  font-size: 16px;
}

p {
  font-size: 30px;
  line-height: 34px;

  text-align: left;
  margin-left: 80px;
}

  input[id="false"] {
    border: red solid 2px;
  }
  input[name="inputText"] {
    width: 554px;
    height: 69px;

    background: #ffffff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    outline: none;

    font-size: 35px;

    padding-left: 20px;
  }
  
  .register {
    margin-top: 30px;
  }

  .register a {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 554px;
  height: 69px;

  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  outline: none;
  border: none;

  font-size: 35px;

  padding-left: 20px;
`;

export const Btn = styled.button`
  width: 554px;
  height: 69px;

  color: white;

  background: #6798E7;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  border: none;

  margin-top: 110px;

  font-size: 25px;

  :hover {
    cursor: pointer;

    transition: 0.5s;
    background-color: #1F1F1F
  }
`;
