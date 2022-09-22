import styled from "styled-components"

export const Wrapper = styled.div`
    height:30vw;
    max-height:150px;
    overflow-y:auto;
    ::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
    /* height: 17%; */
    background: #e4e4e4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`

export const Item = styled.div`
    font-size:small;
    /* max-width:75%; */
    max-width:calc(85% - 10px);
    padding:15px 15px;
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    margin:10px 0px;
`
export const Number = styled.div`

`