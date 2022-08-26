import Main from '../component/main'
import Test from '../component/test'
import NotFound from "../common/NotFound"
import Record from '../component/record'
import Introduce from "../component/introduce"
import Login from '../component/login/login'
import Register from '../component/register/register'

export default [
    { path: "", component: <Main />, nav: true, footer: true },
    { path: "*", component: <NotFound />, nav: false, footer: false },
    { path: "test", component: <Test />, nav: true, footer: true },
    { path: "record", component: <Record />, nav: true, footer: true },
    { path: "introduce", component:<Introduce/>, nav:true, footer:true },
    { path: "login", component:<Login/>, nav:false, footer:false },
    { path: "register", component:<Register/>, nav:false, footer:false },
]

// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지
