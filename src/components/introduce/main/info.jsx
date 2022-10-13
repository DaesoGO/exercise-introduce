import Star from "./star/index";
import Explanation from "./explanation";
import Recommand from "./recommand";
import * as S from "./info.style";

const Render = ({ info }) => {
  // console.log(info.readiness)
  return (
    <S.MainContainer>
      <Star readiness={info.readiness} difficulty={info.difficulty} risk={info.risk} />
      <Explanation explanation={info.explanation} precautions={info.precautions} />
      <Recommand />
    </S.MainContainer>
  );
};
export default Render;
