import React from "react";
import { ScoreContainer, P, H6 } from "../../BuildingBlocks";
const Score = (props) => {
  const { title, count } = props;
  return (
    <ScoreContainer>
      <P>{title}</P>
      <H6>{count}</H6>
    </ScoreContainer>
  );
};

export default Score;
