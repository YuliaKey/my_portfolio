import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media (min-width: 1024px),
    (min-device-width: 1024px) and (orientation: portrait) {
    width: 48%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6rem 0;
  }
`;
