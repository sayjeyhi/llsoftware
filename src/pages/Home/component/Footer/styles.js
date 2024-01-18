import styled from "styled-components";

export const StFooterContainer = styled.main`
  height: auto;
  font-size: 12p;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  justify-content: center;
  margin: 80px 0;
  
  h4, span {
    font-weight: 400;
  }
  span {
    margin-top: 10px;
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    padding: 15px;
    font-size: 0.6rem;
    & h4:first-child {
      display: NONE;
    }
  }
`;
