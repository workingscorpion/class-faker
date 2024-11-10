module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "transform": {
    "^.+\\.ts$": "ts-jest",
  },
  "testMatch": ["**/**.*spec.ts"],
  "moduleNameMapper": {
    "^lib/(.*)$": "<rootDir>/lib/$1",
    "@app/(.*)": "<rootDir>/lib/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
  "coverageDirectory": "<rootDir>/coverage",
  "collectCoverageFrom": ["**/*.(t|j)s"],
};
