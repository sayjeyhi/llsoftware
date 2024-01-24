import React from "react";
import { StFooterContainer } from "./styles";

const Footer = () => {
  return (
    <StFooterContainer>
      <h4> © Long Lasting Software</h4>
      <span>2019 - {new Date().getFullYear()} </span>
    </StFooterContainer>
  );
};

export default Footer;
