import styled from "styled-components";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const StyledForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
