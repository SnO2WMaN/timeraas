/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', {ssr: true, displayName: true, preprocess: false}],
  ],
};
