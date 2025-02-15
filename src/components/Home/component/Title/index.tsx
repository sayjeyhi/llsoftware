import React from "react";
import { StyledHomeTitle } from "./styles";

const index = () => {
  return (
    <StyledHomeTitle>
      <span className="rocket">🚀</span>
      <span className="tada">🎉</span>

      <h2 className="mt-12 text-center text-gray-700 text-lg">
        We are a team of <strong>fast</strong>, <strong>passionate</strong> and <strong>dedicated</strong> software engineers <br/>who are passionate about creating
        long-lasting software solutions.
        <br />
        <br />
        <div className="flex align-center justify-center mb-3">
          <img src="Winking Face 256x256.png" alt="gif" className="w-16"/>
        </div>
        We have it proven!
      </h2>
    </StyledHomeTitle>
  );
};

export default index;
