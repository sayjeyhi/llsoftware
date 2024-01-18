import React from "react";
import projectLogo from "../../../../assets/Logo_Full_BG.png";
import {
  StyledHomeUserDetail,
  StyledHomeUserDetailSinglePart,
  StyledHomeUserDetailSinglePartDetail,
} from "./styles";

const index = () => {
  return (
    <StyledHomeUserDetail>
      <StyledHomeUserDetailSinglePart>

        <StyledHomeUserDetailSinglePartDetail>
          <h5>Tiny</h5>
          <p>
            It is all 25Kb minimized and gzipped. <br />
            Nothing fancy, just a simple and clever design.
          </p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail>
          <h5>Smart</h5>
          <p>
            We do smart memoization and don't allow your app to re-render
          </p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail>
          <h5>Robust</h5>
          <p>
            We have a strong type system and we don't allow you to make mistakes
          </p>
        </StyledHomeUserDetailSinglePartDetail>
      </StyledHomeUserDetailSinglePart>
      <span>
        <img src={projectLogo} alt="eisa_rezaei" />
      </span>
      <StyledHomeUserDetailSinglePart>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>Live for</h5>
          <p>{(new Date().getFullYear()) - 2019} years</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>Customer Satisfaction</h5>
          <p>100%</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>Integrations</h5>
          <p>+10</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>Helped Projects</h5>
          <p>+20</p>
        </StyledHomeUserDetailSinglePartDetail>
      </StyledHomeUserDetailSinglePart>
    </StyledHomeUserDetail>
  );
};

export default index;
