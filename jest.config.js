/** @type {import('ts-jest').InitialOptionsTsJest} */

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/data-structures/**', '<rootDir>/src/algorithms/**'],
  coveragePathIgnorePatterns: ['index.ts'],
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '@shared/(.*)$': '<rootDir>/src/shared/$1'
  },
  modulePathIgnorePatterns: ['./js/*'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true
};
