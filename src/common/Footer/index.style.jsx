import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Main = styled.div`
  width: 100vw;
  height: 150px;
  background-color: #0A1E40;
  //border-top: solid 2px black;
`

export const SubMain = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #D9D9D9;
`

export const Linked = styled.div`
  width: 50%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #D9D9D9;
`

export const A = styled(Link)`
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
  &:hover{
    text-decoration:underline;
  }
  font-weight: bold;
  color: #D9D9D9;
`

export const FooterImgPart = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 56px;
  margin-left: 30px;
`

export const IntroduceBy = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SchoolText = styled.div`
  font-size: 14px;
  margin-left: 40px;
  margin-right: 40px;
  color: #D9D9D9;
  font-weight: bold;
`

export const DucamiText = styled.div`
  font-size: 14px;
  color: #D9D9D9;
  font-weight: bold;
`