import * as S from './history.style'
import dummyImage from '../../static/main/logo.png'
const dummys = [
    {
        src: dummyImage,
        name: "김건호"
    },
    {
        src: dummyImage,
        name: "박병관"
    },
    {
        src: dummyImage,
        name: "박종현"
    },
    {
        src: dummyImage,
        name: "오은지"
    },
    {
        src: dummyImage,
        name: "박지건"
    },
    {
        src: dummyImage,
        name: "손민"
    },
]
const Render = () => {
    return <S.Main>
        <S.Container>
            <S.ValueWrapper>
                {
                    dummys.map((element, idx) => {
                        return <Value
                                key={idx}
                                src={element.src}
                                name={element.name}/>
                    })
                }
            </S.ValueWrapper>
            <h3>
                {
                    "어제 한 운동"
                }
            </h3>
        </S.Container>
        <S.Container>
            <S.ValueWrapper>
                {
                    dummys.map((element, idx) => {
                        return <Value
                                key={idx}
                                src={element.src}
                                name={element.name}/>
                    })
                }
            </S.ValueWrapper>
            <h3>
                {
                    "어제 먹은 것"
                }
            </h3>
        </S.Container>
    </S.Main>
}
const Value = ({
    src,
    name
}) => {
    return <S.ValueContainer>
        <img src={src}/>
        <h5>{name}</h5>
    </S.ValueContainer>
}
export default Render