const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  jest: {
    configure: {
        moduleNameMapper: {
          '^@components(.*)$': '<rootDir>/src/components$1',
          "^@atoms(.*)$": "<rootDir>/src/components/atoms$1",
          "^@styles(.*)$": "<rootDir>/src/styles$1",
          "^@utils(.*)$": "<rootDir>/src/utils$1",
          "^@hooks(.*)$": "<rootDir>/src/hooks$1",
        },
        testEnvironment: "jsdom",
        transform: {
          "^.+\\.tsx?$": "babel-jest",
        },
    },
  },
};
