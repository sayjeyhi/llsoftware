import React from "react";
import { ArrowRight } from "lucide-react";

import { StCirCleContainer, StCirCleContent } from "./styles";

const Circle = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 ">
      <StCirCleContainer id="Circle">
        <a href="mailto:hi@llsoftware.co" target="_blank" rel="noreferrer">
          <StCirCleContent>
            <div className="flex align-center justify-center mb-5 w-full">
              <img src="Handshake 256x256.png" alt="gif" className="w-16"/>
            </div>
            <p className="text-sm mb-2">Call us for support</p>
            <h3 className="font-bold text-2xl">Contact Us!</h3>

          </StCirCleContent>
        </a>
      </StCirCleContainer>
      <span>We are here to answer your questions, contact us for support.</span>

    </div>
  );
};

export default Circle;
