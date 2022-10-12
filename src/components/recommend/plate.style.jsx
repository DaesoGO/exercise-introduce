import styled from "styled-components";

export const Main = styled.div`
    width: 60%;
    height: 98%;
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Plate = styled.div`
    width: 80%;
    height: 90%;
    background-color: #666;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`
export const PlateInner = styled.div`
    height: 45%;
    border-radius: 15px;
    position: relative;
    background-color: #999;
    background-image: url('${({back}) => back}');
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 80%;
    box-shadow: inset 5px 5px 5px 5px #777;

`
export const PlateInnerTop = styled(PlateInner)`
    width: 30%;
`
export const PlateInnerBottom = styled(PlateInner)`
    width: 45%;
`
export const PlateContentContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    img {
        width: auto;
        height: 70%;
    }
    h4 {
        color: #222;
        font-weight: 500;
        transition: 200ms;
        opacity: ${({isHover}) => isHover ? 0 : 1};
    }
    div {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background-color: rgba(10, 10, 10, 0.5);
        transition: 200ms;
        opacity: ${({isHover}) => isHover ? 1 : 0};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        h2 {
            color: #eee;
            font-weight: 600;
            font-size: 14px;
        }
        h5 {
            color: #ccc;
            width: 50%;
            font-weight: 500;
            font-size: 12px;
            /* display: flex;
            align-items: center; */
        }
    }
    
`