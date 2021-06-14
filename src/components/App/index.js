import React, { useState, useEffect, useCallback } from "react";
import { Container, Button, Row } from "../BuildingBlocks";
import "../../static/css/app.css";
import rockIcon from "../../static/assets/icon-rock.svg";
import paperIcon from "../../static/assets/icon-paper.svg";
import scissorsIcon from "../../static/assets/icon-scissors.svg";
import Header from "../Header";
import MakeChoices from "../MakeChoice";
import Rules from "../Rules";
import CompareChoices from "../CompareChoices";
const App = () => {
  const [showRules, setShowRules] = useState(true);
  const [showGame, setShowGame] = useState(true);
  const [AILogo, setAILogo] = useState({});
  const [userLogo, setuserLogo] = useState({});
  const [score, setScore] = useState(parseInt(localStorage.getItem("SCORE")));
  const [tryCounts, setTryCounts] = useState(
    parseInt(localStorage.getItem("TRYCOUNTS"))
  );
  const [myChoice, setMyChoice] = useState("");
  const [AIChoice, setAIChoice] = useState("");

  useEffect(() => {
    localStorage.setItem("SCORE", parseInt(0));
    localStorage.setItem("TRYCOUNTS", parseInt(0));
  }, []);
  const toggleVisibility = () => {
    setShowRules(!showRules);
  };

  const displayGame = useCallback((choice) => {
    setShowGame(false);
    setMyChoice(choice);
    setuserLogo(() =>
      choice === "ROCK"
        ? rock
        : choice === "PAPER"
        ? paper
        : choice === "SCISSORS"
        ? scissors
        : null
    );
    const randomChoice = Math.floor(Math.random() * 3 + 1);
    setAILogo(() =>
      randomChoice === 1
        ? rock
        : randomChoice === 2
        ? paper
        : randomChoice === 3
        ? scissors
        : null
    );
    setAIChoice(() =>
      randomChoice === 1
        ? "ROCK"
        : randomChoice === 2
        ? "PAPER"
        : randomChoice === 3
        ? "SCISSORS"
        : null
    );
  }, []);

  const playAgain = React.useCallback(() => {
    setShowGame(true);
  }, []);

  const rock = React.useMemo(() => {
    return rockIcon;
  }, []);

  const paper = React.useMemo(() => {
    return paperIcon;
  }, []);

  const scissors = React.useMemo(() => {
    return scissorsIcon;
  }, []);

  return (
    <div className="App">
      <Container>
        <Header score={score} tryCounts={tryCounts} />
        {showGame && (
          <MakeChoices
            rock={rock}
            paper={paper}
            scissors={scissors}
            displayGame={displayGame}
          />
        )}
        {!showGame && (
          <CompareChoices
            score={score}
            setScore={setScore}
            tryCounts={tryCounts}
            setTryCounts={setTryCounts}
            myChoice={myChoice}
            AIChoice={AIChoice}
            AILogo={AILogo}
            userLogo={userLogo}
            playAgain={playAgain}
          />
        )}
        <Rules isVisible={showRules} toggleVisibility={toggleVisibility} />
        <Row>
          <Button type="button" onClick={toggleVisibility}>
            RULES
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default App;
