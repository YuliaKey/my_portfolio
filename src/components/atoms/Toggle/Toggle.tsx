import { StyledToggle } from "./Toggle.styles";

type ToggleProps = {
  activeState: boolean;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
  ariaLabel: string;
  onToggle: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  activeState,
  activeIcon,
  inactiveIcon,
  ariaLabel,
}) => {
  return (
    <StyledToggle onClick={onToggle} aria-label={ariaLabel}>
      {activeState ? activeIcon : inactiveIcon}
    </StyledToggle>
  );
};
