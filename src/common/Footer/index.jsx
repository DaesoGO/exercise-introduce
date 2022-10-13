import { useState } from 'react'
import * as I from './index.style'

import footerImg from './footerImg.png';
import schoolImg from './schoolImg.png';
import DUCAMIImg from './DUCAMIImg.png';

const Render = () => {
    
    const[footerLink, setFooterLink] = useState([
        {
            name: 'home', link: ''
        },
        {
            name: 'introduce', link: 'introduce'
        },
        {
            name: 'recommend', link: 'recommend'
        },
        {
            name: 'record', link: 'record'
        }
    ])
    
    return (
        <I.Main>

            <I.SubMain>
                <I.Linked>
                    <I.FooterImgPart src={footerImg}></I.FooterImgPart>
                    {
                        footerLink.map((a, i)=>{
                            return(
                                <I.A to={a.link} key={i}>{a.name}</I.A>
                            )
                        })
                    }
                </I.Linked>

            </I.SubMain>

                <I.IntroduceBy>
                    <img src={schoolImg} width="23px" height="20px"></img>
                    <I.SchoolText>대구소프트웨어마이스터고등학교</I.SchoolText>
                    {/* <img src={DUCAMIImg} width="17px" height="20px"></img> */}
                    <I.DucamiText>DUCAMI</I.DucamiText>
                </I.IntroduceBy>
            
        </I.Main>
    )

}

export default Render