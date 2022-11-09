import styled from "styled-components";
import { useState, useLayoutEffect, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import modal from "../global/modal";
import { useRecoilState } from "recoil";
import userInfoAtom from "../global/user";

import NavBar from "../common/NavBar";
import Footer from "../common/footer";

import routes from "./routes";
import api from "../util/api";
const Main = styled.div`
  position: relative;
`;

const Core = styled.div`
  margin-top: ${(props) => (props.nav ? "0" : "0")}px;
  width: 100%;
  min-height: calc(100vh - ${(props) => (props.nav ? "50" : "0")}px);
  position: relative;
`;

const Router = () => {
  const location = useLocation();
  const [renderInfo, setRenderInfo] = useState({
    nav: false,
    footer: false,
  });
  const [getUserInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [getModal, setModal] = useRecoilState(modal);

  useLayoutEffect(
    (element) => {
      let temp = routes.find((element) => element.path.includes(location.pathname.split("/")[1]));
      console.log(temp);
      if (temp === undefined) {
        temp = routes.find((element) => element.path === "*");
      }
      setRenderInfo(temp);
    },
    [location.pathname]
  );

  // useLayoutEffect(() => {
  //   routes.find((e) => {
  //     console.log(location.pathname.split("/")[1]);
  //     console.log("PATH ", e.path.includes(location.pathname.split("/")[1]));
  //     if (e.path.includes(location.pathname.split("/")[1])) {
  //       setRenderInfo(e);
  //     }
  //   });
  // }, [location.pathname]);

  useEffect(() => {
    if (getUserInfo === null && localStorage.getItem("access_token")) {
      api
        .get("user/Decode")
        .then((result) => {
          // console.log(result.data)
          setUserInfo({
            user: result.data,
            token: localStorage.getItem("access_token"),
          });
          // localStorage.setItem("access_token", result.data.data.token)
          // console.log(result.data)
        })
        .catch(console.log);
    }
  }, []);

  return (
    <Main>
      {renderInfo.nav ? <NavBar /> : null}
      <Core nav={renderInfo.nav}>
        <Routes>
          {routes.map((element) => {
            return <Route path={element.path} element={element.component} key={element.path} />;
          })}
        </Routes>
      </Core>
      {renderInfo.footer ? <Footer /> : null}
    </Main>
  );
};

export default Router;
