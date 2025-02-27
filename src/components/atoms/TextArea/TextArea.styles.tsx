import styled from "styled-components";

export type StyledTextAreaProps = {
  hasError?: boolean;
};

export const StyledTextArea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<StyledTextAreaProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.color.error : theme.color.textSecondary};
  border-radius: 3px;
  resize: none;
  min-height: 250px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacing.xxs};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.textPrimary};
    outline: 1px solid transparent;
  }
`;
