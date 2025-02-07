import styled from "styled-components";

export type StyledTagType = {
  color?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  lineHeight?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const StyledTag = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "backgroundColor",
      "padding",
      "borderRadius",
      "color",
      "lineHeight",
      "fontSize",
      "fontWeight",
    ].includes(prop),
})<StyledTagType>`
  display: flex;
  align-items: center;
  padding: ${({ padding, theme }) =>
    padding || `${theme.spacing.xxs} ${theme.spacing.xs}`};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.backgroundTag};
  border-radius: ${({ borderRadius }) => borderRadius || "9999px"};
  color: ${({ color, theme }) => color || theme.textTertiary};
  line-height: ${({ lineHeight, theme }) => lineHeight || theme.lineHeight.sm};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeight.semiBold};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.small};
`;
