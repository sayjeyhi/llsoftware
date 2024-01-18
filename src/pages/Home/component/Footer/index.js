import React from "react";
import { StFooterContainer } from "./styles";

const Footer = () => {
  return (
    <StFooterContainer>
      <h4> © Magical UI</h4>
      <span>2019 - {new Date().getFullYear()} </span>
    </StFooterContainer>
  );
};

export default Footer;
