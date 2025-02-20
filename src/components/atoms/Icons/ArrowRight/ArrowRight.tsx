import React from "react";

import { StyledArrowRight } from "./ArrowRight.styles";

export type ArrowRightProps = {
  ariaHidden?: boolean;
  className?: string;
};

export const ArrowRight: React.FC<ArrowRightProps> = ({
  ariaHidden = true,
  className,
}) => {
  return (
    <StyledArrowRight
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden={ariaHidden}
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-5.29-5.29a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l5.29-5.29H3.75A.75.75 0 0 1 3 10z"
        clipRule="evenodd"
      />
    </StyledArrowRight>
  );
};
