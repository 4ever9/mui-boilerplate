module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'comma-dangle': 2,
  },
}
