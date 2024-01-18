import styled from "styled-components";

export const StyledHomeTitle = styled.div`
  width: 100%;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10vw 4vw;
  border-radius: 30px 30px 0 0;
  background: #fff;
  position: relative;
  top: -20px;
  box-shadow: 0 -22px 30px -5px rgb(123 83 103 / 9%);
  
  & h2 {
    font-size: 3.2rem;
    text-align: center;
    width: 32rem;
    line-height: 66px;
    position: relative;
    top: -28px;
    margin-bottom: 30px;
  }
  & p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 26px;
  }
  
  .rocket, .tada {
    position: absolute;
    top: 4vw;
    left: 4vw;
    font-size: 4.2rem;
    opacity: 0.87;
  }
  .tada {
    top: -8vw;
    right: 4vw;
    left: unset;
    transform: rotate(266deg);
  }

  .rainbow-text {
    background: #CA4246;
    background-color: #CA4246;
    background: conic-gradient(
            #CA4246 16.666%,
            #E16541 16.666%,
            #E16541 33.333%,
            #F18F43 33.333%,
            #F18F43 50%,
            #8B9862 50%,
            #8B9862 66.666%,
            #476098 66.666%,
            #476098 83.333%,
            #A7489B 83.333%);
    background-size: 57%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-text-animation-rev 0.5s ease-in-out forwards;
    cursor: pointer;
  }

  /* Add animation on hover. */
  .rainbow-text:hover {
    animation: rainbow-text-animation 0.5s ease forwards;
  }
  
  @keyframes rainbow-text-animation {
    0% {
      background-size: 57%;
      background-position: 0 0;
    }
    100% {
      background-size: 80%;
      background-position: -2em 1em;
    }
  }

  @keyframes rainbow-text-animation-rev {
    0% {
      background-size: 80%;
      background-position: -2em 1em;
    }
    
    100% {
      background-size: 57%;
      background-position: 0 0;
    }
  }

  @media (max-width: 600px) {
    padding: 0;
    & h2 {
      width: 100%;
      text-align: center;
      font-size: 1.3rem;
      top: 0;
    }
    & a {
      margin-top: 10px;
    }
    .rocket, .tada {
      font-size: 2.4rem;
    }
    .tada {
      top: -14vw;
      right: 6vw;
    }
    .rocket {
      top: -12vw;
      left: 6vw;
    }
  }
`;
