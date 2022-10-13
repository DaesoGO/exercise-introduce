import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalStyle from './index.globalstyle'
import logo from './navlogo.png'
import profileImage from './profileImage.png'
import * as S from './index.style'
import { useRecoilValue } from 'recoil'
import userInfoAtom from '../../global/user'
const Render = () => {
    const userInfo = useRecoilValue(userInfoAtom)
    const navToggling = () => {
        return 0;
    }
    const contents = [
        { title: '운동', param: '/introduce' },
        { title: '추천', param: '/recommend' },
        { title: '기록', param: '/record' },
    ]
    return (
        <>
            <GlobalStyle/>
            <S.background>
                <S.leftContainer>
                    <S.logoContainer>
                        <S.imgContainer to='/'>
                            <S.Logo src={logo}/>
                        </S.imgContainer>
                    </S.logoContainer>
                    <S.navigator>
                        {
                            contents.map((item, idx) => {
                                return (
                                    <S.container key={idx} onClick={navToggling}>
                                        <Link to={item.param}>
                                            <S.menu>{item.title}</S.menu>
                                        </Link>
                                    </S.container>
                                )
                            })
                        }
                    </S.navigator>
                </S.leftContainer>
                {
                    userInfo === null ?
                        <S.loginForm>
                            <Link to={'/login'}>
                                <S.loginText>로그인</S.loginText>
                            </Link>
                            <S.splitter/>
                            <Link to={'/login'}>
                                <S.loginText>회원가입</S.loginText>
                            </Link>
                        </S.loginForm> :
                        <S.profileForm>
                            <S.profileName>{userInfo.user.nickname}</S.profileName>
                            <S.profileImage src={profileImage}/>
                        </S.profileForm>

                }
            </S.background>
        </>
    )
}
export default Render