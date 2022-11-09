import Main from '../components/main'
import Test from '../components/test'
import NotFound from '../common/notfound'
import Record from '../components/record'
import Introduce from '../components/introduce'
import Bulletin from '../components/bulletin'
import Write from '../components/introduce/write'
import Recommend from '../components/recommend/Recommend'
import Read from '../components/record/read/Read'
import Recommand from '../components/recommend'
import Login from '../components/login/login'
import Register from '../components/register/register'

export default [
  { path: '', component: <Main />, nav: true, footer: true },
  { path: '*', component: <NotFound />, nav: false, footer: false },
  { path: 'test', component: <Test />, nav: true, footer: true },
  { path: 'record', component: <Record />, nav: true, footer: true },
  { path: 'record/:user/:id', component: <Read />, nav: true, footer: true },
  { path: 'introduce/:id', component: <Introduce />, nav: true, footer: true },
  {
    path: 'introduce/:id/:boardid',
    component: <Bulletin />,
    nav: true,
    footer: true,
  },
  { path: ':id/write', component: <Write />, nav: true, footer: true },
  { path: 'recommend', component: <Recommand />, nav: true, footer: true },
  { path: 'recommand', component: <Recommand />, nav: true, footer: true },
  { path: 'login', component: <Login />, nav: false, footer: false },
  { path: 'register', component: <Register />, nav: false, footer: false },
]
// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지
