export type Theme = {
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    small: string;
  };
  fontWeight: {
    bold: number;
    semiBold: number;
    regular: number;
  };
  lineHeight: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  letterSpacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  transition: {
    default: string;
    fast: string;
    slow: string;
    all: string;
    easeInOut: string;
  };
  backgroundPrimary: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecondary: string;
};
