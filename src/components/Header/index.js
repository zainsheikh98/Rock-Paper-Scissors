import React from "react";
import { HeaderContainer, Row, LogoContainer, Image } from "../BuildingBlocks";
import Score from "./Score";
import logo from "../../static/assets/logo.svg";

const Header = (props) => {
  const { score, tryCounts } = props;

  return (
    <HeaderContainer>
      <Row>
        <LogoContainer>
          <Image src={logo} alt="LOGO" />
        </LogoContainer>{" "}
        <Score count={tryCounts} title={"Game"} />
        <Score count={score} title={"Score"} />
      </Row>
    </HeaderContainer>
  );
};

export default Header;
