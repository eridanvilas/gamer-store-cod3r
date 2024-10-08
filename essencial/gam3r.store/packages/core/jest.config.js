module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    collectCoveage: true,
    collectCoveageFrom: [
        '<rootDir>/src/**/*.ts',
    ]
}