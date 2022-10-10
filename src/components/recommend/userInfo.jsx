import * as S from './userInfo.style'
const dummy = [
    ["나이", "17"],
    ["BMI", "19"],
    ["기초대사량", "1500kcal"],
    ["권장섭취량", "2000kcal"],
    ["이태융", "박성한"],
    ["박종현", "스이세이"],
    ["박병관", "박성한"]
]
const Render = () => {
    return <S.Main>
        <S.Container>
            <S.HumanContainer>
                <h5 className='weight'>
                    100kg
                </h5>
                <h5 className='height'>
                    170cm
                </h5>   
            </S.HumanContainer>
            <S.Name>
                김건호
            </S.Name>
        </S.Container>
        <S.Container>
            <S.InfoContainer>
                {
                    dummy.map((element, idx) => {
                        return <Info
                            key={idx}
                            title={element[0]}
                            value={element[1]}/>
                    })
                }
            </S.InfoContainer>
        </S.Container>
    </S.Main>
}
const Info = ({
    title,
    value
}) => {
    return <S.InfoMain>
        <h2>
            {
                title
            }
        </h2>
        <h5>
            {
                value
            }
        </h5>
    </S.InfoMain>
}
export default Render