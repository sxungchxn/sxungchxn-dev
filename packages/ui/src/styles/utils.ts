// convert given token path value to css var name
// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/
export const getVarName = (_value: string | null, path: string[]) =>
  path.join('-').replace('.', '_').replace('/', '__')
