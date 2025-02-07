import { StyledTag, StyledTagType } from "./Tag.styles";

export type TagType = {
  text: string;
  onClick?: () => void;
} & StyledTagType;

export const Tag: React.FC<TagType> = ({
  text,
  color,
  backgroundColor,
  padding,
  borderRadius,
  lineHeight,
  fontWeight,
  fontSize,
  onClick,
}) => {
  return (
    <StyledTag
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      fontSize={fontSize}
      onClick={onClick}
    >
      {text}
    </StyledTag>
  );
};
