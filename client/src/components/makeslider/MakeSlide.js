import React from "react";
import styled from "styled-components";

export default function MakeSlide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  //width: 100%;
  //height: 70vh;
  width: 18.85%;
  margin: 0.5rem;
`;
