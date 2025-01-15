import StyledList, { ListType } from "./List.styles";

const List: React.FC<ListType> = ({ children, margin, width }) => {
  return (
    <StyledList margin={margin} width={width}>
      {children}
    </StyledList>
  );
};

export default List;
