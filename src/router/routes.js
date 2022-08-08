import Main from '../component/main'
import Test from '../component/test'
import NotFound from "../common/NotFound"
export default [
    { path: "", component: <Main/>, nav: true, footer: true },
    { path: "test", component: <Test/>, nav: true, footer: true },
    { path: "*", component: <NotFound/>, nav: false, footer: false }

]

// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지