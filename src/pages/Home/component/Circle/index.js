import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { StCirCleContainer, StCirCleContent } from "./styles";

const Circle = () => {
  return (
    <StCirCleContainer id="Circle">
      <a href="mailto:sayjeyhi@gamil.com" target="_blank" rel="noreferrer">
        <StCirCleContent>
          <p>Call us for support</p>
          <h2>Contact Us!</h2>
          <ImArrowUpRight2 />
        </StCirCleContent>
      </a>
    </StCirCleContainer>
  );
};

export default Circle;
