import { colorProperties, responsiveProperties, unresponsiveProperties } from '@/styles/properties'
import { ShorthandsProperties } from '@/styles/sprinkles.css'

type ShorthandsProps = {
  [key in keyof ShorthandsProperties]?: keyof ShorthandsProperties[key]
}

export type ResponsiveProperties = typeof responsiveProperties

export type ResponsiveProps = {
  [key in keyof ResponsiveProperties]?: ResponsiveProperties[key] extends readonly (
    | string
    | number
  )[]
    ? ResponsiveProperties[key][number]
    : keyof ResponsiveProperties[key]
}

export type UnresponsiveProperties = typeof unresponsiveProperties

export type UnresponsiveProps = {
  [key in keyof UnresponsiveProperties]?: UnresponsiveProperties[key] extends readonly (
    | string
    | number
  )[]
    ? UnresponsiveProperties[key][number]
    : keyof UnresponsiveProperties[key]
}

export type ColorProps = {
  [key in keyof typeof colorProperties]?: keyof (typeof colorProperties)[key]
}

export type AtomicProps = ResponsiveProps & UnresponsiveProps & ColorProps & ShorthandsProps

export interface InlineStyleProps {
  /** inline css width property */
  width?: string
  /** inline css height property */
  height?: string
  /** inline css min-width property */
  minWidth?: string
  /** inline css min-height property */
  minHeight?: string
  /** inline css max-width property */
  maxWidth?: string
  /** inline css max-height property */
  maxHeight?: string
}

export const inlineStylePropsSet = new Set([
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
] as const)

export interface SpaceProps {
  /** css width property */
  width?: AtomicProps['width']
  /** css height property */
  height?: AtomicProps['height']

  /** css margin-left property */
  marginLeft?: AtomicProps['marginLeft']
  /** css margin-right property */
  marginRight?: AtomicProps['marginRight']
  /** css margin-top property */
  marginTop?: AtomicProps['marginTop']
  /** css margin-bottom property */
  marginBottom?: AtomicProps['marginBottom']
  /** css padding-top property */
  paddingTop?: AtomicProps['paddingTop']
  /** css padding-bottom property */
  paddingBottom?: AtomicProps['paddingBottom']
  /** css padding-left property */
  paddingLeft?: AtomicProps['paddingLeft']
  /** css padding-right property */
  paddingRight?: AtomicProps['paddingRight']
}

export type LayoutProps = SpaceProps & InlineStyleProps
