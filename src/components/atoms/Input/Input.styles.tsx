import styled from "styled-components";

export type StyledInputProps = {
  hasError?: boolean;
};

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<StyledInputProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.color.error : theme.color.textSecondary};
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacing.xs};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.textPrimary};
    outline: 1px solid transparent;
  }
`;
