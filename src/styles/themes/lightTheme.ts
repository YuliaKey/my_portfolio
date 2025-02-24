import { Theme } from "./theme";
import { sharedTheme } from "./sharedTheme";

export const lightTheme: Theme = {
  ...sharedTheme,
  color: {
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#757575",
    backgroundTertiary: "#154E5F",
    backgroundQuaternary: "#F9FAFB",
    backgroundTag: "#2DD4BF19",
    textPrimary: "#333333",
    textSecondary: "#4F4F4F",
    textSelected: "#FFFFFF",
    textTertiary: "#154E5F",
    success: "#60CCD2",
    error: "#a32a2a",
  },
};
