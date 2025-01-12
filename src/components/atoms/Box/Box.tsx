import StyledBox, { BoxType } from "./Box.styles";

const Box: React.FC<BoxType> = ({
  children,
  margin,
  padding,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  background,
  role,
  tabIndex,
  ariaLabel,
}) => {
  return (
    <StyledBox
      ariaLabel={ariaLabel}
      role={role}
      tabIndex={tabIndex}
      margin={margin}
      padding={padding}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      background={background}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
