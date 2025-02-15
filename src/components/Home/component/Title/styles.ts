import styled from "styled-components";

export const StyledHomeTitle = styled.div`
  width: 100%;
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


  @media (max-width: 600px) {
    padding: 0;

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
