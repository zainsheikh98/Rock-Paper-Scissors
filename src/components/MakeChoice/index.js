import React from "react";
import {
  GameContainer,
  ChoiceContainer,
  Choice,
  Image,
} from "../BuildingBlocks";
const MakeChoices = (props) => {
  const { displayGame, rock, paper, scissors } = props;
  return (
    <GameContainer>
      <ChoiceContainer>
        <Choice
          margin={"-20px 50px 0px -10px"}
          border={"gold"}
          onClick={() => displayGame("ROCK")}
        >
          <Image src={rock} alt="ROCK-ICON" />
        </Choice>
        <Choice
          margin={"-20px -10px 0px 50px"}
          border={"green"}
          onClick={() => displayGame("PAPER")}
        >
          <Image src={paper} alt="PAPER-ICON" />
        </Choice>
        <Choice
          margin={"30vh 100px 0px 110px"}
          border={"blue"}
          onClick={() => displayGame("SCISSORS")}
        >
          <Image src={scissors} alt="SCISSORS-ICON" />
        </Choice>
      </ChoiceContainer>
    </GameContainer>
  );
};

export default React.memo(MakeChoices);
