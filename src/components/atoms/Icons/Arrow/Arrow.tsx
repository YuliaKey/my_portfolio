import { StyledArrow } from "./Arrow.styles";

export type ArrowProps = {
  ariaHidden?: boolean;
  className?: string;
};

export const Arrow: React.FC<ArrowProps> = ({
  ariaHidden = true,
  className,
}) => {
  return (
    <StyledArrow
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden={ariaHidden}
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V7.5a.75.75 0 00-.75-.75H7.5a.75.75 0 000 1.5h5.69L7.22 14.78a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </StyledArrow>
  );
};
