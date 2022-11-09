import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const background = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: #0a1e40;
  justify-content: space-between;
`
export const logoContainer = styled.div`
  width: 100px;
  gap: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 150ms;
  color: #eee;
  &:hover {
    background-color: #6798e7;
  }
`
export const imgContainer = styled(Link)`
  width: 50px;
  aspect-ratio: 1 / 1;
`
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`
export const logoTitle = styled.span`
  color: ${(props) => (props.isvisible ? 'black' : '#f8f8f8')};
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
  user-select: none;
  transition: 0.15s ease-in-out;
  color: #eee;
`
export const navigator = styled.div`
  display: flex;
  width: 270px;
  height: 100%;
  justify-content: space-between;
`
export const container = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a1e40;
  transition: 0.15s ease-in-out;
  &:hover {
    background-color: #6798e7;
  }
`
export const menu = styled.span`
  color: #0a1240dd;
  font-size: 20px;
  font-weight: bold;
  user-select: none;
  color: #eee;
`
export const loginForm = styled.div`
  width: 15%;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 20px;
`
export const loginText = styled.span`
  color: #eee;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 150ms;
  &:hover {
    background-color: #6798e7;
  }
  font-size: 14px;
`
export const splitter = styled.div`
  height: 60%;
  border: 0.1rem solid #eee;
`

export const leftContainer = styled.div`
  width: 40%;
  display: flex;
  margin-left: 20px;
`

export const profileForm = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  gap: 20px;
`
export const profileName = styled.span`
  color: #eee;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
  display: flex;
  font-size: 14px;
`
export const profileImage = styled.img`
  height: 90%;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
`
