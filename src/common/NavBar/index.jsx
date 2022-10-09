import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalStyle from './index.globalstyle'
import logo from './navlogo.png'
import * as S from './index.style'
const Render = () => {
    const navToggling = () => {
        return 0;
    }
    const contents = [
        { title: '운동 소개', param: '/introduce' },
        { title: '추천', param: '/recommend' },
        { title: '기록', param: '/record' },
    ]
    return (
        <>
            <GlobalStyle/>
            <S.background>
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
                <S.loginForm>
                    <Link to={'/login'}>
                        <S.loginText>로그인</S.loginText>
                    </Link>
                    <S.splitter/>
                    <Link to={'/login'}>
                        <S.loginText>회원가입</S.loginText>
                    </Link>
                </S.loginForm>
            </S.background>
        </>
    )
}
export default Render