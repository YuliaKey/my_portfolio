import React from "react";
import { LinkType, StyledLink } from "./Link.styles";

const Link: React.FC<LinkType> = ({
  href,
  children,
  hoverColor,
  hoverWeight,
  color,
  padding,
  opacity,
  transition,
  ariaLabel,
  onClick,
}) => {
  return (
    <StyledLink
      href={href}
      ariaLabel={ariaLabel}
      hoverColor={hoverColor}
      hoverWeight={hoverWeight}
      color={color}
      padding={padding}
      opacity={opacity}
      transition={transition}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
