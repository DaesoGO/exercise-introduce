import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  hr {
    height: 1px;
    background-color: #bdbebd;
    border: none;
    margin: none;
  }
`;


export const SearchWrapper = styled.div`
  position:relative;
  max-width: calc(85% + 20px);
  box-sizing:border-box;
  >img{
    position:absolute;
    right:5px;
    top:8px;
    height:24px;
    cursor:pointer;
  }
`
export const SearchInput = styled.input`
  padding:0px 0px 0px 15px;
  box-sizing:border-box;

  border-radius:15px;
  outline:none;
  border:1px solid #bdbebd;
  margin:0px 7px;

  width:100%;
  height:40px;

  ::placeholder{
    color:#bdbebd;
  }
`


const ItemWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
    height:10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e4e4e4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`
export const ItemRowWrapper = styled(ItemWrapper)`
  width:100%;
  overflow-x:auto;
  white-space: nowrap;
  height:auto;
`
export const ItemColWrapper = styled(ItemWrapper)`
  overflow-y: auto;
  height:30vw;
  max-height:200px;
`


export const Item = styled.div`
  cursor:pointer;
  margin:10px 7px;
  font-size: small;
  max-width: calc(85% - 10px);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  display:flex;
  justify-content:space-between;
  align-items:center;

  >span{
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0px 0px 0px 7px;
    background-color:silver;
    >img{
      height:14px;
    }
  } 
`;
export const rowItem = styled(Item)`
  /* display:inline-block; */
  display:inline-flex;
  margin:10px 7px;
  max-width:none;
`
