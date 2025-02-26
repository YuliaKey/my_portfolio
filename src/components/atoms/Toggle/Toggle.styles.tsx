import styled from "styled-components";

export const StyledToggle = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.easeInOut};
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.color.textPrimary};
    border: 1px solid ${({ theme }) => theme.color.textPrimary};
  }
`;
