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
                        info={"바나나는 맛있어"}/>
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    <PlateContent
                        img={Chicken} 
                        amount={"200g"}
                        name={"닭가슴살"}
                        info={"닭가슴살은 맛있어"}/>
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    <PlateContent
                        img={Apple} 
                        amount={"1개"}
                        name={"사과"}
                        info={"사과는 맛있어"}/>
                </S.PlateInnerTop>

                <S.PlateInnerBottom>
                    <PlateContent
                        img={Avodado} 
                        amount={"1개"}
                        name={"아보카도"}
                        info={"아보카도는 맛있어"}/>
                </S.PlateInnerBottom>

                <S.PlateInnerBottom>
                    <PlateContent 
                        img={Juice} 
                        amount={"1잔"}
                        name={"음료수"}
                        info={"음료수는 맛있어"}/>
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