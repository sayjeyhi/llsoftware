import React from "react";
import { Education } from "../../../../data/data";

import {
  StyledHomeEducation,
  StyledHomeEducationArticle,
  StyledHomeEducationSection,
} from "./styles";

const Item = ({ version, date, changes }) => (
  <>
    <header>{date}</header>
    <span>
      <h5>{version}</h5>
      <p>{changes.join("\n")}</p>
    </span>
  </>
)

const index = () => {
  return (
    <StyledHomeEducation>
      <h2>Changes History</h2>
      <StyledHomeEducationSection>
        <StyledHomeEducationArticle>
          {Education.first_part.map(({ version, date, changes }, index) => (
            <Item version={version} date={date} changes={changes} key={index} />
          ))}
        </StyledHomeEducationArticle>
        <StyledHomeEducationArticle>
          {Education.secound_part.map(({ version, date, changes }, index) => (
            <Item version={version} date={date} changes={changes} key={index} />
          ))}
        </StyledHomeEducationArticle>
        <StyledHomeEducationArticle>
          {Education.third_part.map(({ version, date, changes }, index) => (
            <Item version={version} date={date} changes={changes} key={index} />
          ))}
        </StyledHomeEducationArticle>
      </StyledHomeEducationSection>
    </StyledHomeEducation>
  );
};

export default index;
