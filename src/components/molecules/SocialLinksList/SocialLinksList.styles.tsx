import styled from "styled-components";

export const SocialLinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transition.fast};

    &:hover {
      color: ${({ theme }) => theme.textPrimary};
    }

    svg {
      fill: currentColor;
      transition: transform ${({ theme }) => theme.transition.fast};
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
