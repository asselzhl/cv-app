module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/index.js'],
  coverageReporters: ["json", "lcov", "text", "clover"],
};
