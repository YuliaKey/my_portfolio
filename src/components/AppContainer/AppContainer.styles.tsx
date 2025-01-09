import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0rem 5rem;

  @media (max-width: 1024px),
    (max-device-width: 1024px) and (orientation: portrait) {
    flex-direction: column;
    height: auto;
    padding: 3rem 1.5rem;
  }
`;
