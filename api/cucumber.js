module.exports = {
  default: {
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    require: ['**/test/features/**/*.ts'],
    format: ['pretty'],
    paths: ['**/test/features/**/*.feature']
  }
};