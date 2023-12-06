// eslint-disable-next-line no-undef
export const presets = ['@babel/preset-env', '@babel/preset-react'];
export const plugins = [
  '@babel/plugin-transform-runtime',
  [
    'module-resolver',
    'babel-plugin-module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src'
      }
    }
  ]
];

