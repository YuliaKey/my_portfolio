import styled from "styled-components";
import { keyframes } from "styled-components";

type LoaderProps = {
  size?: number;
  borderWidth?: number;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "borderWidth",
})<LoaderProps>`
  border: ${({ borderWidth }) => borderWidth || "2px"} solid
    ${({ theme }) => theme.color.textPrimary};
  border-top: ${({ borderWidth }) => borderWidth || "2px"} solid transparent;
  border-radius: 50%;
  width: ${({ size }) => size || "18px"};
  height: ${({ size }) => size || "18px"};
  animation: ${spin} 0.6s linear infinite;
`;
