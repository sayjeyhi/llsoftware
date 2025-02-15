import styled, {keyframes} from "styled-components";

const fade = keyframes`
from {transform:translateX(-100%);}
to {transform:translateX(100%);}
`;

export const StCirCleContainer = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
`;
export const StCirCleContent = styled.div`
  width: 250px;
  height: 250px;
  padding: 42px 57px;
  font-size: 1.5rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: #f0f0f0;
  border: 2px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ::after {
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    top: 0;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
    animation: ${fade} 1.5s infinite;
  }

  & p {
    width: 135px;
    color: #a0a0a0;
    z-index: 2;
    font-weight: 400;
  }
  & h2 {
    margin-top: 10px;
    line-height: 2.2rem;
    z-index: 2;
  }
  & svg {
    font-size: 2rem;
    margin-top: 12px;
    z-index: 2;
  }
`;
