// jest.config.js
// Sync object
const config = {
  testMatch: ['**/tests/**/*.spec.js'], // 只测试后缀为 .spec.js 的文件
  runner: 'jest-electron/runner', // 指定测试的 runner
  testEnvironment: 'jest-electron/environment', //  制定测试的环境
};

module.exports = config;
