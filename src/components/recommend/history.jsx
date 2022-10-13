import * as S from './history.style'
import dummyImage from '../../static/main/logo.png'

import Banana from '../../static/recommand/food/banana.png'
import Chicken from '../../static/recommand/food/chicken.png'
import Apple from '../../static/recommand/food/apple.png'
import Avodado from '../../static/recommand/food/avocado.png'
import Juice from '../../static/recommand/food/juice.png'
import Ginger from '../../static/recommand/food/ginger.png'

import Dumbbell from '../../static/recommend/exercise/dumbbell.png'
import Hulahoop from '../../static/recommend/exercise/hulahoop.png'
import Jumpping from '../../static/recommend/exercise/jumpping.png'
import Pushup from '../../static/recommend/exercise/pushup.png'
import RunningMachine from '../../static/recommend/exercise/runningmachine.png'
import SitUP from '../../static/recommend/exercise/sit_up.png'

const dummysExercise = [
    {
        src: Dumbbell,
        name: "팔운동"
    },
    {
        src: Hulahoop,
        name: "훌라후프"
    },
    {
        src: Jumpping,
        name: "줄넘기"
    },
    {
        src: Pushup,
        name: "팔굽혀펴기"
    },
    {
        src: RunningMachine,
        name: "런닝머신"
    },
    {
        src: SitUP,
        name: "윗몸일으키기"
    }
]

const dummysFood = [
    {
        src: Banana,
        name: "바나나"
    },
    {
        src: Chicken,
        name: "닭가슴살"
    },
    {
        src: Apple,
        name: "사과"
    },
    {
        src: Avodado,
        name: "아보카도"
    },
    {
        src: Juice,
        name: "비트주스"
    },
    {
        src: Ginger,
        name: "생강"
    }
]

const Render = () => {

    return <S.Main>
        <S.Container>
            <S.ValueWrapper>
                {
                    dummysExercise.map((element, idx) => {
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
                    dummysFood.map((element, idx) => {
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