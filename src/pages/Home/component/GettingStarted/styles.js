import styled from "styled-components";

export const StyledHomeMyAdvantage = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 0;

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 20px 0;
  }

  table {
    width: calc(100% - 20vw);
    margin: 20px 0;
    border-radius: 10px;
    font-weight: 400;
  }

  table {
    border-collapse: separate;
    border-spacing: 0 5px !important;

    th {
      text-align: left;
      background: #efefef;
      height: 5rem;
      padding: 0 24px;
      border: none !important;
      font-weight: 700;
      font-size: 18px;
    }

    td, th {
      &:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }

    tr {
      border-bottom: 1px solid #efefef;
    }

    td {
      height: 5rem;
      padding: 0 24px;
      border: 1px solid #efefef !important;
      border-left: 0 !important;
      border-right: 0 !important;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      text-transform: lowercase;

      &:first-child {
        border-left: 1px solid #efefef !important;
      }

      &:last-child {
        border-right: 1px solid #efefef !important;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 40px 0;
    font-size: 1rem;
    table {
      width: calc(100% - 10vw);
    }
    p {
      margin: 20px 38px;
      font-size: 1rem;
      text-align: center;
    }
  }
`;
