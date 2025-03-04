import styled from "styled-components";

export const StyledToggle = styled.button`
  width: 1.7rem;
  height: 1.7rem;
  min-width: 1.7rem;
  min-height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  border-radius: 50%;

  cursor: pointer;
  transition: ${({ theme }) => theme.transition.easeInOut};
  opacity: 0.5;

  &:hover {
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.color.textPrimary};
  }
`;
