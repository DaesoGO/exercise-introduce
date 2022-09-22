import React from "react";
import * as E from "./ExePart.style";

const ExePart = ({ part }) => {
  console.log(part);

  return (
    <E.Wrapper>
      {part.map((i) => (<E.Item key={i.id}>{i.name}
      <E.Number></E.Number>
      </E.Item>))}
    </E.Wrapper>
  );
};

export default ExePart;
