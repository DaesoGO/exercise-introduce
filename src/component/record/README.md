# 운동을 하루하루 기록하는 부분

운동은 어떻게 보면 모든 사람에게 필요한 것이다, 나도 매일 기본적으로 팔굽혀펴기를 하며 멸치 탈출을 꿈꾼다, 또 이렇게 근력 운동을 하고나서 뻠핑이 된 나의 몸을 보고 뿌듯함을 느낀다, 그래서 나는 매일 뿌듯함 + 달라지는 내 모습을 확인하기 위해 운동 후 사진을 찍었다

그래서 **실제로 내가 사용하고 싶은 기능을 맡았고, 운동 기록을 하게됐다**, 운동 기록은 어떻게 보면 그냥 CRUD이기 때문에 자료도 많고 쉽게 만드려면 쉽게 만들 수 있을 거다, 그래서 **나는 추가적인 기능들을 사용하고, 구현해보기로 했다**, 예를 들면 

* [grid 사용해 레이아웃 구성](https://studiomeal.com/archives/533)

* [새로운 방법으로 모달 만들기](https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d) + 가능하면 학교 선배들이 사용하는 내가 이해 못한 방식ㅋㅋ

* [무한 스크롤](https://slog.website/post/8)

* [리액트에서 이미지 Drag & Drop 으로 받기](https://www.youtube.com/watch?v=cejXT8aAVQg&t=882s)

* 받은 이미지 수정하기(자르기 + 확대)

> 사실 지금 글 쓰는 시점에서는 `리액트에서 이미지 Drag & Drop 으로 받기` 까지는 구현이 됐다, 글과 함께 링크된 링크는 구현할 때 도움이 된 자료들이다, "그러면 다 구현했으니 기록 할 것도 없겠네" 할 수 있겠지만, `받은 이미지 수정` 에서는 큰 벽을 만난 느낌이다ㅋㅋ

![현재까지구현된상황](https://user-images.githubusercontent.com/85085375/187586229-c0515d50-5316-4842-951f-db452da42ccc.gif)

> 구현된 상황을 보면 그냥 인스타그램이다ㅋㅋ, 인스타그램이 기록하는 용도의 ui/ux로 좋다고 느꼇고, 생각이 났다, 인스타그램에서는 **모달에서 글을 올리는 기능을 모두 수행하기 때문에 모달 안에서 이 모든걸 처리하는게 나에게는 조금 어려울 것 같다**, 그래도 최대한 기능을 지원하도록 할 것이다

## 이미지 자르기 고민(220831)
이미지자르기를 인스타그램에서는 `확대, 축소` + `사진 비율` + `이미지 끌기` 를 통해 지원한다, 나는 canvas를 사용하는 능력이 조금 부족하다 느끼기 때문에 감도 잘 못잡겠다, 

감을 못 잡으니 컴포넌트를 나눌지 말지도 고민이 된다, 위의 **사진을 그저 좌우로 넘기는 컴포넌트**는 사진 수정과 글 작성에도 모두 사용되기 때문에 하나의 컴포넌트로 만들어 사용하면 좋겠지만, **사진 수정에 사용할 수 있을지가 고민이다**, 결론은 **일단 하나의 컴포넌트로 나누지 말자**이다

![진짜인스타](https://user-images.githubusercontent.com/85085375/187588238-a4d954fe-2553-4b58-a124-a329dc254f2a.gif)

> 위는 진짜 인스타그램이다, 사진을 좌 우로 넘기는 부분이 중복되는 것을 확인할 수 있다, 이건 구현 하려면 자르기, 드래그로 수정, 확대 까지 canvas를 그냥 마스터 해야 할 수 있는 부분이라 생각됐다

그래서 [React-Easy-Crop](https://www.npmjs.com/package/react-easy-crop)이라는 라이브러리를 사용하기로 했다, 이미지를 자르는 방식이나, 비율, 지원하는 기능들이 모두 필요한 것들이였고, 많이 사용되는 라이브러리였다

![reactEasyCrop](https://user-images.githubusercontent.com/85085375/187944081-93d91cba-4afe-4159-af7c-d2d8ef338b67.png)

## 이미지 자르기(220902)
```
npm i react-easy-crop
```
으로 라이브러리를 설치해준다
사용할 부분에 아래와 같이 `import` 해서 사용하면 된다고 한다

```js
import Cropper from "react-easy-crop";

  const [crop, setCrop] = useState({x:0,y:0})
  const [zoom, setZoom] = useState(5)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels)
    }, [])
...
    <Cropper
        image={imgURL[currentIndex]}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
    />
```
> `Cropper` 는 기본적으로 absolute가 적용되어서 부모에 relative를 줘야한다, 예제에서는 `image` 속성에 파일의 기본적인 경로를 줬는데, 전에 `URL.createObjectURL` 을 활용해 이미지 미리보기를 만들었었기 때문에 imgURL을 `image` 속성에 줬다, 다행이 잘 작동했다

이렇게 쉽게 이미지 자르기 기능을 구현했다, 사실 이렇게 이미지를 자를 때 마다 잘린 x,y좌표 등이 저장되긴 하는데, **이 자른 이미지를 어떻게 저장하는지, 서버와 통신하는지는 아직 이해하지 못했다 더 알아보자**, 아래처럼 Image Crop이 잘 작동하는 것을 확인할 수 있다

![crop적용](https://user-images.githubusercontent.com/85085375/187954805-8cc919fc-4609-4a85-bdab-ddb302a55f07.gif)

라이브러리의 기능들을 활용해 확대, 축소, 비율(미정) 기능을 쉽게 제공할 수 있을 것 같다



## ViewImg와 EditImg컴포넌트
이미지 수정부분에서 감을 못잡아서 컴포넌트를 어떻게 나눌지 엄청 고민됐었는데 구현하니 결정할 수 있었다(이미지 수정과 보는 컴포넌트를 어떻게 나눌지)

![현재까지구현된상황](https://user-images.githubusercontent.com/85085375/187586229-c0515d50-5316-4842-951f-db452da42ccc.gif)

**ViewImg 라는 위와 같이 생긴 컴포넌트에 그냥 EditMode를 추가하기로 결정했다**, 왜냐하면 
1. editMode를 따로 한다고 해도 ViewImg기능만을 하는 컴포넌트를 재활용 하지 못할 것 같다
2. ViewImg가 필요한 곳에는 Edit도 대부분 필요할 것이다(프로필 수정 등)
3. ViewImg의 EditMode를 켰다 껏다 함으로써 Edit할 수 있게 하면 편리하게 위의 기능을 제공할 수 있을것이다
4. 사실, 컴포넌트를 이렇게 조밀조밀하게 나누는게 쉽지 않다ㅋㅋ

## 옵션 버튼 컴포넌트 만들기(220903)
자를 비율, 줌, 사진 선택 옵션 버튼들은 모두 같은 역할을 한다, 버튼이 눌리면 그 버튼에 혜당하는 툴팁형태의 옵션을 띄우는 것이다,

![옵션버튼](https://user-images.githubusercontent.com/85085375/188266708-508bb1e0-da19-47ff-959d-3941f802c11b.png)

이런 옵션 버튼들을 위한 [헤드리스 컴포넌트](https://www.howdy-mj.me/design/headless-components/)를 만든다

```js
/**
 * @param position 옵션 전체의 absolute적 위치(left또는 right 과 값을 문자열로)
 * @param src 이미지 소스
 * @param alt 이미지 이름, handler에 넣어줄 이름
 * @param buttonPosition 툴팁과 버튼의 상대적 위치(툴팁을 기준으로 left또는 right문자열)
 * @param handler 클릭 했을 때 실행될 함수
 * @param children 툴팁, 열리고 닫히는 상황이 포함된 jsx형태를 받는다
 */
<OptionButton
position={"left:15px"}
src={fitSize}
alt={"fitSize"}
buttonPosition={"left"}
handler={clickOption}
>
{selectedOption === "fitSize" && <FitSize setAspect={setAspect} />}
</OptionButton>
```

위의 방법으로 사용할 수 있는 버튼을 만들었다
children으로 클릭했을 때 사용할 버튼을 만들어 준다

`selectedOption` 비교를 버튼 컴포넌트 밖에서 하는게 맞는건진 모르겠는데, 일단 변경하기 쉽게 밖에서 뺏다

버튼을 사용하면 아래처럼 작동이 된다

![버튼 시연](https://user-images.githubusercontent.com/85085375/188348234-511f9ba1-ffab-46b9-9d9f-41f4407348a4.gif)

`Zoom` 컴포넌트는 `input range` 를 사용했다

## EditMode만들기(220905)
editMode를 줬을 때 이미지를 수정할 수 있고, 수정하는 기능들을 사용할 수 있도록 mode에 따른 변경을 해주면 된다

```js
const ImgHolder = ({ mode = "view" }) => {
```

컴포넌트에 모드를 선택할 수 있도록 했다

> 아래는 컴포넌트 모드에 따른 변화다

![view모드](https://user-images.githubusercontent.com/85085375/188401810-c2033c35-b7b5-4ee5-b33d-1785e890a419.png)

![edit모드](https://user-images.githubusercontent.com/85085375/188401724-0396b104-913a-43e9-90fa-ae7fc285c15e.png)

## 자르는 비율에 따른 옆 빈 공백 채워주기
비율을 선택했을 때 옆 부분(잘릴 부분)이 보여지는게 조금 신경쓰였다, 사실 아얘 인스타처럼 따라하기 시작한 이상, 기술때문에 구현 못하는걸 최대한 줄이고 싶어서 괜히 빈 공백이 싫어 보이기도 했다, 그래서 빈 공백을 채워주자

![공백 채우기 전](https://user-images.githubusercontent.com/85085375/188348566-a00aa1bd-3685-416d-890c-2351fb65655b.gif)

> 위는 공백을 채우기 전이다

```js
<E.ImgContainer>
{/* <E.Img src={imgURL[currentIndex]}/> */}
<Cropper
    image={imgURL[currentIndex]}
    crop={crop}
    zoom={zoom}
    aspect={aspect}
    onCropChange={setCrop}
    onCropComplete={onCropComplete}
    onZoomChange={setZoom}
    />
    -----------
    <E.ContainerSupporter aspect={aspect} >
    <div/><div/>
    </E.ContainerSupporter>
    -----------
</E.ImgContainer>
```

> 빈 공백을 채워줄 div를 만들어 준다, 1 / 1 비율이 아닐 때 좌 우 두개의 빈 공간이 생기기 때문에 div 2개를 넣어준다, 16 / 9 비율에서는 `flex-direction` 만 바꿔준다(`width` 랑 `height` 도..)

**채워줄 비율은 CSS로 채워준다, 자르는 비율이기 때문에 계산이 가능하다**

```js
export const ContainerSupporter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // 가로 세로가 똑같으니 그냥 계산
  display: flex;
  flex-direction: ${(props) => (props.aspect === 16 / 9 ? "column" : "row")};
  justify-content:space-between;

  > div {
    background-color:white;

    // 1/1 비율일 땐 없어야 하기 때문에
    width: ${(props) => {
      switch (props.aspect) {
        case 16 / 9:
          return "100%";
        case 4 / 5:
            return "10%";
        default:
          return "0px";
      }
    }};
    height: ${(props) => {
        switch (props.aspect) {
            case 16 / 9:
                return "21.875%";
            case 4 / 5:
                return "100%";
            default:
                return "0px";
        }
    }};

  }
`;
```

> 뿌듯한 내 css다, 설명을 조금 하자면,
`flex-direction` 은 위에서 말했듯 3 /4 , 16 / 9 에 따라 흰 부분이 생기는 부분이 달라지기 때문에 `column` 과 `row` 로 바꿔준다
`width` 와 `height` 는 일단 1 / 1 비율일 땐 없다, `0px` 로 설정, 16 / 9 와 4 / 5 둘 다 height 또는 width 가 100%인 경우가 생긴다
![16x9일때예](https://user-images.githubusercontent.com/85085375/188349452-4f91dcc9-394d-4e49-abfb-f24a1afd29fd.png)
예시로 위처럼 16 / 9일 때 width가 100%이다
<br/>
16 / 9 일 때 하나의 `div` height 는 `(100 - ((100 / 16) * 9)) / 2` 일 것이다
4 / 5 일 때 하나의 `div` width 는 `(100 - ((100 / 5) * 4)) / 2` 일 것이다

암튼 머 이렇게 했습니다
아래는 빈 공간을 채운 후 이다

![공간을 채운 후](https://user-images.githubusercontent.com/85085375/188350853-093754ba-b6a9-4a1a-b7e8-8145d3a20a61.gif)

**하지만 이 채우는 `div` 때문에 Cropper가 선택이 안된다**

**바로 찾아보니 `pointer-events` 를 추가하면 된다고 한다!**

## Cropper의 마우스 이동시 분할선 생기게 하기
