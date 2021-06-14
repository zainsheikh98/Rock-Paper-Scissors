import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  GameContainer,
  MainDivWrapper,
  Choice,
  Image,
  ChoiceWrapper,
  Heading,
} from "../BuildingBlocks";
import Result from "../Result";
const CompareChoices = (props) => {
  const {
    AILogo,
    userLogo,
    playAgain,
    score,
    setScore,
    tryCounts,
    setTryCounts,
    myChoice,
    AIChoice,
  } = props;
  const [result, setResult] = useState("---");

  const calculateResult = () => {
    setTryCounts(tryCounts + 1);
    if (myChoice === AIChoice) {
      setResult("TIE");
    } else if (myChoice === "ROCK" && AIChoice === "SCISSORS") {
      setResult("You Win");
    } else if (myChoice === "PAPER" && AIChoice === "ROCK") {
      setResult("You Win");
    } else if (myChoice === "SCISSORS" && AIChoice === "PAPER") {
      setResult("You Win");
    } else {
      setResult("You Lose");
    }
  };

  const updateScore = () => {
    if (result === "You Win") {
      setScore(score + 1);
      localStorage.setItem("SCORE", score + 1);
    } else if (result === "You Lose") {
      localStorage.setItem("SCORE", score - 1);
      setScore(score - 1);
    }
  };

  useEffect(() => {
    calculateResult();
  }, []);

  useEffect(() => {
    updateScore();
  }, [result]);

  return (
    <GameContainer>
      <MainDivWrapper>
        <ChoiceWrapper order={"1"}>
          <Heading color={"white"}>You Picked</Heading>
          <Choice margin={"1rem"} border={"gold"}>
            <Image src={userLogo} alt="USER-CHOICE" />
          </Choice>
        </ChoiceWrapper>
        <Result playAgain={playAgain} result={result} />
        <ChoiceWrapper order={"3"}>
          <Heading color={"white"}>The House Picked</Heading>
          <Choice margin={"1rem"} border={"green"}>
            <Image src={AILogo} alt="AI-CHOICE" />
          </Choice>
        </ChoiceWrapper>
      </MainDivWrapper>
    </GameContainer>
  );
};

export default CompareChoices;
