import { TitleSectionContainer } from "./TitleSection.styles";

type TitleSectionType = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const TitleSection: React.FC<TitleSectionType> = ({
  title,
  description,
  children,
}) => {
  return (
    <TitleSectionContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </TitleSectionContainer>
  );
};

export default TitleSection;
