module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "transform": {
    "^.+\\.ts$": "ts-jest",
  },
  "testMatch": ["**/**.*spec.ts"],
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/src/$1",
    "@app/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
  "coverageDirectory": "<rootDir>/coverage",
  "collectCoverageFrom": ["**/*.(t|j)s"],
};
