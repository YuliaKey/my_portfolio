export type Theme = {
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    small: string;
    medium: string;
  };
  fontWeight: {
    bold: string;
    semiBold: string;
    regular: string;
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
    smooth: string;
  };
  shadow: {
    sm: string;
  };
  color: {
    textPrimary: string;
    textPrimary30: string;
    textPrimary10: string;
    textSecondary: string;
    textTertiary: string;
    textSelected: string;
    backgroundPrimary: string;
    backgroundPrimary75: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundQuaternary: string;
    backgroundTag: string;
    success: string;
    error: string;
  };
};
