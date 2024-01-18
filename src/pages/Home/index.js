import React from "react";
import { Suspense } from "react";

import Loading from "../Loading";

import { StyledHomeCt, StyledSpliceBorder, StyledSpliceBorderGame } from "./styles";
import Footer from "./component/Footer";
import Title from "./component/Title";
import UserDetail from "./component/UserDetail";
import Advantage from "./component/Advantage";
import Education from "./component/Education";
import Circle from "./component/Circle";
import TopLogo from "./component/TopLogo";
import GettingStarted from "./component/GettingStarted";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <StyledHomeCt>
        <TopLogo />
        <Title />
        <StyledSpliceBorder />
        <UserDetail />
        <StyledSpliceBorder />
        <Advantage />
        <StyledSpliceBorder />
        <GettingStarted />
        <StyledSpliceBorder />
        <Education />
        <StyledSpliceBorderGame />
        <Circle />
        <Footer />
      </StyledHomeCt>
    </Suspense>
  );
};
export default Home;
