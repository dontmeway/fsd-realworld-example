export default {
  collectCoverage: false,
  coverageDirectory: "coverage",
  preset: "vite-jest",
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  roots: [
    './src'
  ] ,
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@widgets/(.*)": "<rootDir>/src/widgets/$1",
    "@features/(.*)": "<rootDir>/src/features/$1",
    "@entities/(.*)": "<rootDir>/src/entities/$1",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ]
};
