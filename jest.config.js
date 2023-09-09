const nextJest = require('next/jest');

const createJestConfig = nextJest();

module.exports = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^queries/(.*)$': '<rootDir>/src/queries/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1'
  },
});
