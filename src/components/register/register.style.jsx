import styled, { css } from "styled-components";



export const register = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IdCheck = styled.p`
  color: red;
  display: none;
`

export const registerContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  color: #000000;

  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    display: block;
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
    margin-left: 30px;
  }

  input[id="false"] {
    border: red solid 2px;
  }

  p[id="false"] {
    display: block;
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
  
  
`;

export const Btn = styled.button`
  width: 575px;
  height: 69px;

  color: white;

  background: #6798E7;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  border: none;

  margin-top: 50px;

  font-size: 25px;

  :hover {
    cursor: pointer;

    transition: 0.5s;
    background-color: #1F1F1F;
  }
`;


export const Select = styled.select`
  width: 554px;
  font-size: 2rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
`;

export const sliderDiv = styled.div`
  .slider-parent{
  position:relative;
  }
  .buble{
    position:flex;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    font-size: 50px;
    input {
      width: 80%;
      font-size: 2rem;
    }
  }
`

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

export const slider = styled.input`
    width: 90%;
    margin-left: 5%;
    height: 5px;
    cursor: pointer;
    background: #2497E3;
`

export const man = styled.div`
  label[id="팔"]{
    background-color: black;
  }
  label {
    display: flex;
    font-size: 50px;
  }
  .manInput {
    visibility: hidden;
    text-align: center;
  }
  label>input:checked + div{
    border-color: red;
  }
`
export const CustomLable = styled.label`
  margin-top: 50px;
  border: 3px solid gray;
  border-radius: 10px;
  border-color:${(props) => props.checked ? props.className == "woman" ? "pink"  : "blue" : "black"};
`
export const Img = styled.img`
    margin-top: 40px;
    margin-left: 150px;
  height: 800px;
  width: 720px;
`;

export const introduceImg = styled.img`
    margin-top: 40px;
    margin-left: 120px;
  height: 600px;
  width: 750px;
`;

export const div = styled.div`
  display: flex;
  margin-left: 30px;
`