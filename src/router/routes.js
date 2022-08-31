import Main from '../component/main'
import Test from '../component/test'
import NotFound from "../common/NotFound"
import Record from '../component/record'
import Introduce from "../component/introduce"
import Recommend from '../component/recommend/Recommend'

export default [
    { path: "", component: <Main />, nav: true, footer: true },
    { path: "*", component: <NotFound />, nav: false, footer: false },
    { path: "test", component: <Test />, nav: true, footer: true },
    { path: "record", component: <Record />, nav: true, footer: true },
    { path: "introduce", component:<Introduce/>, nav:true, footer:true },
    { path: "recommend", component:<Recommend/>, nav:true, footer:true }
]

// �̰��� ������Ʈ�� ����ϸ� �˴ϴ�
// path: ������Ʈ�� ���� url
// component: ����� ������Ʈ
// nav: �׺�ٸ� �������
// footer: Ǫ�͸� �������
