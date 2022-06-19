module.exports = {
  verbose: true,
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["js", "vue"],
  setupFilesAfterEnv: ["<rootDir>/tests/testSetUp.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
  ],
  testEnvironment: "jsdom",
}
