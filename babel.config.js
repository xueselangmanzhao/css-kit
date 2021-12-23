module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true, // 支持所有文件扩展名
        useBuiltIns: 'entry',
        corejs: '3.6.4',
      },
    ],
  ],
  exclude: 'node_modules/**',
};
