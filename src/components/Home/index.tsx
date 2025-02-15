import React from "react";

import { StyledHomeCt, StyledSpliceBorder, StyledSpliceBorderGame } from "./styles";
import Footer from "./component/Footer";
import Title from "./component/Title";
import Circle from "./component/Circle";
import TopLogo from "./component/TopLogo";

const Home = () => {
  return (
    <StyledHomeCt>
      <TopLogo />
      <Title />
      <StyledSpliceBorder />
      <Circle />
      <StyledSpliceBorderGame />
      <Footer />
    </StyledHomeCt>
  );
};
export default Home;
