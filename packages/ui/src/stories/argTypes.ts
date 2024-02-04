export const spaceArgTypes = [
  'margin',
  'marginX',
  'marginY',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingX',
  'paddingY',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
].reduce((acc, prop) => {
  return {
    ...acc,
    [prop]: {
      table: {
        category: 'Space Props',
      },
    },
  }
}, {})

export const LayoutArgTypes = [
  'margin',
  'marginX',
  'marginY',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingX',
  'paddingY',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
].reduce((acc, prop) => {
  return {
    ...acc,
    [prop]: {
      table: {
        category: 'Layout Props',
      },
    },
  }
}, {})
