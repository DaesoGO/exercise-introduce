import Router from "./router/router.jsx"
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'InfinitySans-RegularA1';
	src: url('~/static/fonts/InfinitySans-RegularA1.woff') format('woff');
	font-weight: normal;
	font-style: normal;
  }
`;
const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}
export default App