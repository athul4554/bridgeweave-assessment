module.exports = {
  roots: [""],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};
