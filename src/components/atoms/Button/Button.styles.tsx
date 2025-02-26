import styled from "styled-components";

type StyledButtonProps = {
  disabled?: boolean;
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "disabled",
})<StyledButtonProps>`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.textSecondary : theme.color.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacing.xs};
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.color.textSecondary : theme.color.textPrimary};
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: ${({ theme }) => theme.transition.smooth};
  background-color: transparent;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  ${({ disabled }) => disabled && "tabindex: -1;"}

  &:hover {
    border: 1px solid
      ${({ theme, disabled }) =>
        disabled ? theme.color.textSecondary : theme.color.textTertiary};
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.textSecondary : theme.color.textTertiary};
  }
`;
