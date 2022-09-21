import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalStyle from './index.globalstyle'
import logo from './navlogo.png'
import * as S from './index.style'
const Render = () => {
    const [logohover, setLogohover] = useState(false)
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
                <div>
                    <Link to='/'>
                        <S.Logo
                        src={logo}
                        onMouseEnter={() => {setLogohover(true)}}
                        onMouseLeave={() => {setLogohover(false)}}
                        />
                    </Link>
                </div>
                <S.logoTitle isvisible={logohover}>어깨어때</S.logoTitle>
            </S.logoContainer>
            <S.navigator>
                {
                    contents.map((item, idx) => {
                        return (
                            <S.container key={idx}>
                                <Link to={item.param}>
                                    <S.menu>{item.title}</S.menu>
                                </Link>
                            </S.container>
                        )
                    })
                }
            </S.navigator>
            <S.loginForm>
                
                <S.loginText>로그인</S.loginText>
                &nbsp;
                <S.loginText>회원가입</S.loginText>
            </S.loginForm>
            </S.background>
        </>
    )
}
export default Render