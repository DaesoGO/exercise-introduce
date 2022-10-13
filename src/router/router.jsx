import styled from "styled-components";
import { useState, useLayoutEffect, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import modal from '../global/modal'
import { useRecoilState } from 'recoil';

import NavBar from '../common/NavBar'
import Footer from '../common/footer'

import routes from './routes'

const Main = styled.div`
  position: relative;
`

const Core = styled.div`
  margin-top: ${props => props.nav ? "0" : "0"}px;
  width: 100%;
  min-height: calc(100vh -  ${props => props.nav ? "50" : "0"}px);
  position: relative;
`

const Router = () => {
  const location = useLocation()
  const [renderInfo, setRenderInfo] = useState({
    nav: false,
    footer: false
  })
  
  const [getModal, setModal] = useRecoilState(modal)
  useLayoutEffect((element) => {
      let temp = routes.find(element => element.path === location.pathname.split('/')[1])
      if(temp === undefined) {
          temp = routes.find(element => element.path === "*")
      }
      setRenderInfo(temp)
  }, [location.pathname])
  
  return (
    <Main>
    { renderInfo.nav ? <NavBar/> : null}
        <Core nav={renderInfo.nav}>
            <Routes>
                {
                    routes.map(element => {
                      return <Route
                        path={element.path}
                        element={element.component}
                        key={element.path}/>
                    })
                }
            </Routes>
        </Core>
        { renderInfo.footer ? <Footer/> : null }
    </Main>
  )
}

export default Router;