import * as S from './history.style'
import dummyImage from '../../static/main/logo.png'
const dummys = [
    {
        src: dummyImage,
        name: "팔굽혀펴기"
    },
    {
        src: dummyImage,
        name: "줄넘기"
    },
    {
        src: dummyImage,
        name: "윗몸일으키기"
    },
    {
        src: dummyImage,
        name: "훌라후프"
    },
    {
        src: dummyImage,
        name: "요가"
    },
    {
        src: dummyImage,
        name: "수영"
    }
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
                    "어제 먹은 음식"
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