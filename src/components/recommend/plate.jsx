import * as S from './plate.style'
import Banana from '../../static/recommand/food/banana.png'
import Chicken from '../../static/recommand/food/chicken.png'
import Apple from '../../static/recommand/food/apple.png'
import Avodado from '../../static/recommand/food/avocado.png'
import Juice from '../../static/recommand/food/juice.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Render = ({
    foods
}) => {

    let [img, setImg] = useState()
    let [amount, setAmount] = useState()
    let [name, setName] = useState()
    let [info, setInfo] = useState()

    // console.log(foods.length)
    return (
        <S.Main>
            <S.Plate>
                <S.PlateInnerTop>
                    <PlateContent 
                        // img={Banana} 
                        // amount={"1개"}
                        // name={"바나나"}
                        // info={"바나나는 칼륨, 마그네슘 등의 무기질이 풍부하므로 근육경련을 예방할 수 있습니다."}
                    />
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    <PlateContent
                        // img={Chicken} 
                        // amount={"200g"}
                        // name={"닭가슴살"}
                        // info={"닭가슴살은 고단백 음식이라 근육을 재합성하는 데 도움을 줍니다."}
                    />
                </S.PlateInnerTop>

                <S.PlateInnerTop>
                    {
                        foods.length >= 3 ?
                        <PlateContent
                            img={Juice} 
                            amount={""}
                            name={foods[0].name}
                            info={foods[0].content}
                        /> : 
                        <PlateContent/>
                    }
                </S.PlateInnerTop>

                <S.PlateInnerBottom>
                    {
                        foods.length >= 3 ?
                        <PlateContent
                            img={Chicken} 
                            amount={""}
                            name={foods[1].name}
                            info={foods[1].content}
                        /> : 
                        <PlateContent/>
                    }
                </S.PlateInnerBottom>

                <S.PlateInnerBottom>
                        {
                            foods.length >= 3 ?
                            <PlateContent
                                img={Avodado} 
                                amount={""}
                                name={foods[2].name}
                                info={foods[2].content}
                            /> : 
                            <PlateContent/>
                        }
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