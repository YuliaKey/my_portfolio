import { StyledSectionHeader } from "./SectionHeader.styles";

export type SectionHeaderProps = {
  ariaLabel: string;
  title?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  ariaLabel,
  title,
}) => {
  return (
    <StyledSectionHeader aria-label={ariaLabel}>{title}</StyledSectionHeader>
  );
};
