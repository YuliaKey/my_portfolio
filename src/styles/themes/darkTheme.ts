import { Theme } from "./theme";
import { sharedTheme } from "./sharedTheme";

export const darkTheme: Theme = {
  ...sharedTheme,
  color: {
    backgroundPrimary: "#0F172A",
    backgroundPrimary75: "#0F172ABF",
    backgroundSecondary: "#1d4ed826",
    backgroundTertiary: "#5EEAD4",
    backgroundQuaternary: "#1E293B80",
    backgroundTag: "#2DD4BF19",
    textPrimary: "#E2E8F0",
    textPrimary30: "#E2E8F04D",
    textPrimary10: "#E2E8F01A",
    textSecondary: "#94A3B8",
    textSelected: "#154E5F",
    textTertiary: "#60CCD2",
    success: "#60CCD2",
    error: "#a32a2a",
  },
};
