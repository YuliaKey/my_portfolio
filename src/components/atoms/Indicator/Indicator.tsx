import React from "react";
import StyledIndicator, { IndicatorType } from "./Indicator.styles";

const Indicator: React.FC<IndicatorType> = ({ selected }) => {
  return <StyledIndicator selected={selected} />;
};

export default Indicator;
