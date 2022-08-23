## 개발 환경
node 버전: 16.16.0

react 버전: 18

## 실행
    npm run dev
localhost:3000에 개발 서버를 연다

    npm run build
dist 폴더에 빌드한다


## 폴더 구조
* common: 네브바와 같이 모든 컴포넌트에서 사용하는 컴포넌트
* component: 메인페이지와 같이 한 페이지를 담당하는 컴포넌트가 들어있는 폴더
* router: 라우팅을 하는 폴더
* store: 상테관리 라이브러리 Recoil의 atom을 담는 폴더

## 작성 규칙
* 한 컴포넌트의 최종 결과물은 index.jsx 에 담아서 사용할 때 index.jsx를 import 하여 사용할 수 있도록 한다