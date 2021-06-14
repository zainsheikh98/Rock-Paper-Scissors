import styled from "styled-components";
import background from "../../static/assets/bg-triangle.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(rgb(29, 52, 83), rgb(24, 35, 67));
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  width: 60%;
  padding: 0.1rem;
  margin: 1rem auto 0rem auto;
  height: 20vh;
  overflow: hidden;
  border: 0.1rem solid grey;
  border-radius: 1rem;

  @media all and (max-width: 500px) {
    width: 90vw;
    height: 10vh;
  }
  @media all and (min-width: 1440px) {
    width: 60vw;
    height: 20vh;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;

  @media all and (max-width: 500px) {
    width: 70px;
    height: 50px;
  }
`;

export const P = styled.p`
  color: hsl(229, 64%, 46%);
  margin: 0;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: sans-serif;
  @media all and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const H6 = styled.p`
  margin: 0;
  line-height: 0.5;
  color: rgb(80, 80, 80);
  font-size: 3rem;
  font-weight: bold;
  @media all and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  height: auto;
  overflow: hidden;
  padding: ${(props) => props.padding};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  max-width: 5rem;
  max-height: 5rem;
  margin-top: 0.1rem;
  @media all and (max-width: 500px) {
    width: 70px;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const RulesContainer = styled.div`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  position: absolute;
  overflow: hidden;
  z-index: 1000;
  background-color: white;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
  height: 400px;
  width: 400px;
  overflow: hidden;
  border: 0.1rem solid grey;
  border-radius: 1rem;

  @media all and (max-width: 500px) {
    top: 5vh;
    left: 5vw;
    width: 90vw;
    height: 90vh;
  }
`;

export const Heading = styled.p`
  color: ${(props) => props.color};
  font-size: 1.3rem;
  text-align: left;
  font-weight: bold;
  font-family: sans-serif;
  @media all and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.div`
  height: 1rem;
  width: 1rem;
`;

export const ImageContainer = styled.div`
  margin: auto;
  height: 300px;
  width: 300px;
  overflow: hidden;
  border: none;
  @media all and (max-width: 500px) {
    height: 50%;
    width: 90%;
    margin-top: 10vh;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: calc(100vw - 300px);
  width: 200px;
  padding: 0.7rem 0.3rem;
  background: none;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
  outline: none;
  cursor: pointer;

  :hover {
    color: hsl(229, 64%, 46%);
    background: white;
  }
  @media all and (max-width: 500px) {
    width: 200px;
    left: calc(50vw - 100px);
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  width: 100vw;
  height: 50vh;
  margin-top: 15vh;
`;
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 300px;
  height: 100%;
`;
export const Choice = styled.div`
  width: 50px;
  cursor: pointer;
  height: 50px;
  margin: ${(props) => props.margin};
  background: white;
  border: 0.3rem solid;
  border-radius: 50%;
  border-color: ${(props) => props.border};
  padding: 0.5rem;
  transition: padding 0.3s ease-in-out;

  :hover {
    padding: 1rem;
  }
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  order: ${(props) => props.order};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media all and (max-width: 768px) {
    order: 2;
    flex-direction: column-reverse;
  }
`;

export const MainDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 100%;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ResultContainer = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media all and (max-width: 768px) {
    order: 3;
    margin-top: 2rem;
    width: 100%;
  }
`;

export const PlayAgainButton = styled.button`
  width: 200px;
  padding: 0.7rem 0.3rem;
  background: white;
  color: rgb(29, 50, 81);
  border: 1px solid white;
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
  outline: none;
  cursor: pointer;

  :hover {
    color: white;
    background: rgb(29, 50, 81);
  }
`;
