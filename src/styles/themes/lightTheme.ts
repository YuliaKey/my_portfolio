import { Theme } from "./theme";
import { sharedTheme } from "./sharedTheme";

export const lightTheme: Theme = {
  ...sharedTheme,
  color: {
    backgroundPrimary: "#fdfcfc",
    backgroundSecondary: "#14eba34d",
    backgroundTertiary: "#5EEAD4",
    backgroundQuaternary: "#E2E8F080",
    backgroundTag: "#1fe2c852",
    textPrimary: "#223e44",
    textSecondary: "#2c5568",
    textSelected: "#154E5F",
    textTertiary: "#1e7e80",
    success: "#60CCD2",
    error: "#a32a2a",
  },
};
