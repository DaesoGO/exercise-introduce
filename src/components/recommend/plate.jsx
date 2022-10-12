import * as S from './plate.style'
import Banana from '../../static/recommand/food/banana.png'
import Chicken from '../../static/recommand/food/chicken.png'
import Apple from '../../static/recommand/food/apple.png'
import Avodado from '../../static/recommand/food/avocado.png'
import Juice from '../../static/recommand/food/juice.png'

import { useState } from 'react'

const Render = () => {

    let [img, setImg] = useState()
    let [amount, setAmount] = useState()
    let [name, setName] = useState()
    let [info, setInfo] = useState()

    // useEffect(()=>{
    //     axios.get('')
    //     .then((result)=>{})
    // })

    return (
        <S.Main>
            <S.Plate>
                <S.PlateInnerTop>
                    <PlateContent 
                        img={Banana} 
                        amount={"1개"}
                        name={"바나나"}
                        info={"바나나는 칼륨, 마그네슘 등의 무기질이 풍부하므로 근육경련을 예방할 수 있습니다."}/>
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    <PlateContent
                        img={Chicken} 
                        amount={"200g"}
                        name={"닭가슴살"}
                        info={"닭가슴살은 고단백 음식이라 근육을 재합성하는 데 도움을 줍니다."}/>
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    <PlateContent
                        img={Apple} 
                        amount={"1개"}
                        name={"사과"}
                        info={"사과는 양질의 영양분과 포도당이 함유되어 있기 때문에 운동 전에 먹으면 도움이 됩니다."}/>
                </S.PlateInnerTop>

                <S.PlateInnerBottom>
                    <PlateContent
                        img={Avodado} 
                        amount={"1개"}
                        name={"아보카도"}
                        info={"아보카도는 손상된 근육을 재생하는 불포화 지방을 생성하는 데 도움을 줍니다."}/>
                </S.PlateInnerBottom>

                <S.PlateInnerBottom>
                    <PlateContent 
                        img={Juice} 
                        amount={"1잔"}
                        name={"비트주스"}
                        info={"비트는 성능을 향상시키고 혈압을 낮추고 혈류를 증가시킵니다."}/>
                </S.PlateInnerBottom>

            </S.Plate>
        </S.Main>
    )
}

const PlateContent = ({
    img,
    amount,
    name,
    info
}) => {
    const [getHover, setHover] = useState(false)
    return <S.PlateContentContainer
            onMouseEnter={() => { if(amount != undefined) setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            isHover={getHover}
        >
            <img src={img}/>
            <h4>{amount}</h4>
            <div>
                <h2>{name}</h2>
                <h5>{info}</h5>
            </div>
    </S.PlateContentContainer>
}
export default Render