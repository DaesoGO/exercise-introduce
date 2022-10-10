import * as S from './plate.style'
import Banana from '../../static/recommand/food/banana.png'
import Chicken from '../../static/recommand/food/chicken.png'
import { useState } from 'react'
const Render = () => {
    return <S.Main>
        <S.Plate>
            <S.PlateInnerTop>
                <PlateContent 
                    img={Banana} 
                    amount={"1개"}
                    name={"바나나"}
                    info={"바나나는 맛있어"}/>
            </S.PlateInnerTop>
            <S.PlateInnerTop>
                <PlateContent/>
            </S.PlateInnerTop>
            <S.PlateInnerTop>
                <PlateContent/>
            </S.PlateInnerTop>
            <S.PlateInnerBottom>
                <PlateContent/>
            </S.PlateInnerBottom>
            <S.PlateInnerBottom>
                <PlateContent 
                    img={Chicken} 
                    amount={"200g"}
                    name={"닭가슴살"}
                    info={"닭찌찌 먹기 시러잉... 다리만 먹구 싶어"}/>
            </S.PlateInnerBottom>
        </S.Plate>
    </S.Main>
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