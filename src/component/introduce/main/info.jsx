import Recommand from "./recommand";
import Star from "./star";
import Explanation from "./explanation";
import * as S from "./info.style";

const Render = () => {
  return (
    <S.MainContainer>
      <Star />
      <Explanation />
      <Recommand />
    </S.MainContainer>
  );
};
export default Render;
