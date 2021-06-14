import React from "react";
import {
  RulesContainer,
  Row,
  Heading,
  Icon,
  ImageContainer,
  Image,
} from "../BuildingBlocks";
import rules from "../../static/assets/image-rules.svg";
import close from "../../static/assets/icon-close.svg";
const Rules = (props) => {
  const { isVisible, toggleVisibility } = props;
  return (
    <RulesContainer isVisible={isVisible}>
      <Row padding={"1rem"}>
        <Heading color={"rgb(80, 80, 80)"}>RULES</Heading>
        <Icon onClick={toggleVisibility}>
          <Image src={close} alt="CLOSE-ICON" />
        </Icon>
      </Row>
      <ImageContainer>
        <Image src={rules} alt="RULES-IMAGE" />
      </ImageContainer>
    </RulesContainer>
  );
};

export default React.memo(Rules);
