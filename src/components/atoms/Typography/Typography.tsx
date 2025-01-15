import { StyledTypography, TypographyType } from "./Typography.styles";

const Typography: React.FC<TypographyType> = ({
  as = "p",
  children,
  fontSize,
  letterSpacing,
  fontWeight = "regular",
  lineHeight,
  margin,
  padding,
  color,
  maxWidth,
  opacity,
  role,
  tabIndex,
}) => {
  return (
    <StyledTypography
      as={as}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      color={color}
      margin={margin}
      padding={padding}
      maxWidth={maxWidth}
      opacity={opacity}
      role={role}
      tabIndex={tabIndex}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
