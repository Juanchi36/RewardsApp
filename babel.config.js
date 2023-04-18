module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@routing': './src/routing',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
