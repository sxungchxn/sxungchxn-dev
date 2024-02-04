import { vars } from '@/styles/vars.css'
import { breakpoints } from '@/styles/tokens/breakpoints'

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const flexibility = [0, 1, 2, 3, 4] as const

const space = vars.space

const extendedSpace = {
  '448px': '28rem',
  '512px': '32rem',
  '576px': '36rem',
  '672px': '42rem',
  '720px': '45rem',
  '768px': '48rem',
  '896px': '56rem',
  '976px': '61rem',
  '1024px': '64rem',
  '1152px': '72rem',
  '1280px': '80rem',
  '1/4': '25%',
  '1/3': '33.333333%',
  '1/2': '50%',
  '2/3': '66.666667%',
  '3/4': '75%',
  screenMd: breakpoints.md,
  screenLg: breakpoints.lg,
}

export const responsiveProperties = {
  alignItems: [...flexAlignment, 'baseline'],
  alignSelf: [...flexAlignment, 'baseline'],
  borderWidth: vars.borderWidths,
  borderBottomWidth: vars.borderWidths,
  borderLeftWidth: vars.borderWidths,
  borderRightWidth: vars.borderWidths,
  borderTopWidth: vars.borderWidths,
  borderRadius: vars.radius,
  borderBottomLeftRadius: vars.radius,
  borderBottomRightRadius: vars.radius,
  borderTopLeftRadius: vars.radius,
  borderTopRightRadius: vars.radius,
  bottom: space,
  display: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none',
  },
  flexBasis: {
    ...space,
    ...extendedSpace,
  },
  flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
  flexGrow: flexibility,
  flexShrink: flexibility,
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  fontSize: {
    ...vars.fontSizes,
    inherit: 'inherit',
  },
  fontWeight: vars.fontWeights,
  gap: space,
  inset: space,
  justifyContent: [...flexAlignment, 'space-between', 'space-around'],
  justifySelf: flexAlignment,
  left: space,
  letterSpacing: vars.letterSpacings,
  lineHeight: vars.lineHeights,
  marginBottom: space,
  marginLeft: space,
  marginRight: space,
  marginTop: space,
  overflow: ['auto', 'hidden', 'visible', 'scroll'],
  paddingBottom: space,
  paddingLeft: space,
  paddingRight: space,
  paddingTop: space,
  position: ['absolute', 'relative', 'fixed', 'sticky'],
  right: space,
  textAlign: ['left', 'center', 'right'],
  top: space,
} as const

export const unresponsiveProperties = {
  aspectRatio: {
    auto: 'auto',
    '1/1': '1 / 1',
    '2/1': '2 / 1',
    '4/1': '4 / 1',
    '4/3': '4 / 3',
    '16/9': '16 / 9',
  },
  cursor: ['pointer', 'default', 'not-allowed'],
  fontFamily: vars.fonts,
  isolation: ['isolate'],
  objectFit: ['contain', 'cover'],
  opacity: vars.opacity,
  pointerEvents: ['none'],
  strokeWidth: vars.borderWidths,
  textTransform: ['capitalize', 'lowercase', 'uppercase'],
  transitionProperty: {
    none: 'none',
    all: 'all',
    default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  },
  visibility: ['hidden', 'visible'],
  whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
  wordBreak: ['normal', 'break-all', 'keep-all', 'break-word'],
  wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
  zIndex: vars.zIndex,
} as const

export const colorProperties = {
  backgroundColor: vars.colors,
  borderColor: vars.colors,
  color: vars.colors,
  outlineColor: vars.colors,
} as const

export const allProperties = {
  ...responsiveProperties,
  ...unresponsiveProperties,
  ...colorProperties,
}
