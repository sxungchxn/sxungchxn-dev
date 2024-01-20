import baseConfig from '../../.lintstagedrc.mjs'

export default {
  ...baseConfig,
  '*.*js': ['prettier --write', 'eslint --report-unused-disable-directives --max-warnings 0 --fix'],
  '*.ts*': ['prettier --write', 'eslint --report-unused-disable-directives --max-warnings 0 --fix'],
}
