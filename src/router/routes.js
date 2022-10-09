import Main from "../components/main";
import Test from "../components/test";
import NotFound from "../common/notfound";
import Record from "../components/record";
import Introduce from "../components/introduce";
import Bulletin from "../components/bulletin";
import Write from "../components/introduce/write";
import Recommend from '../components/recommend/Recommend'
import Recommand from '../components/recommend'

export default [
  { path: "", component: <Main />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "test", component: <Test />, nav: true, footer: true },
  { path: "record", component: <Record />, nav: true, footer: true },
  { path: "introduce", component: <Introduce />, nav: true, footer: true },
  { path: "introduce/:id", component: <Bulletin />, nav: true, footer: true },
  { path: "write", component: <Write />, nav: true, footer: true },
  { path: "recommend", component:<Recommend/>, nav:true, footer:true },
  { path: "recommand", component: <Recommand/>, nav: true, footer: true}
]