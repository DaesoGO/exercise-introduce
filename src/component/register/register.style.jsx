import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: white;
`;


export const registerContainer1 = styled.div`
  width: 720px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  color: #000000;

  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;

    text-align: left;
    margin-left: 80px;
    margin-top: 90spx;
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

  .register {
    text-align: end;

    margin-top: 26px;
    margin-right: 80px;
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

  background: #0a1e40;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  border: none;

  margin-top: 110px;

  font-size: 25px;

  :hover {
    cursor: pointer;

    transition: 0.5s;
    background-color: #5077de;
  }
`;
