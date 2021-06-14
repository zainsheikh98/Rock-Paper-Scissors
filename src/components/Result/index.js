import React from "react";
import { ResultContainer, PlayAgainButton, Heading } from "../BuildingBlocks";
const Result = (props) => {
  const { playAgain, result } = props;
  return (
    <ResultContainer>
      <Heading color={"white"}>{result}</Heading>
      <PlayAgainButton onClick={playAgain}>Play Again</PlayAgainButton>
    </ResultContainer>
  );
};

export default React.memo(Result);
