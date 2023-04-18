module.exports = {
  preset: './jest/jest.preset.js',
  transformIgnorePatterns: ['/node_modules/(?!native-base)/', 'jest-runner'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/assets/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
  ],
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFilesAfterEnv: ['./jest/jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/__tests__/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg-mock/svgMock.js',
  },
  reporters: ['default'],
  testEnvironment: 'jsdom',
  coverageReporters: ['text'],
};
