'use strict';

module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['index.js'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/', '/__mocks__/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/fixtures/', '/__mocks__/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
