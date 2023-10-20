import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: false,
  rules: {
    'vue/first-attribute-linebreak': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
  },
});
