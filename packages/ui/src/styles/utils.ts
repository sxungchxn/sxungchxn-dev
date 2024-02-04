// convert given token path value to css var name
// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/
import { InlineStyleProps, SpaceProps } from '@/types'
import { LayoutProps } from '@/types/css-prop'

export const getVarName = (_value: string | null, path: string[]) =>
  path.join('-').replace('.', '_').replace('/', '__')

/** extract space props from given props */
export const getSpaceProps = (props: Record<string, unknown>) => {
  const {
    // margin
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginX,
    marginY,
    margin,
    // padding
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingX,
    paddingY,
    padding,
    ...rest
  } = props

  return {
    spaceProps: {
      marginX,
      marginY,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      paddingX,
      paddingY,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    } as SpaceProps,
    ...rest,
  } as const
}

/** extract inline props from given props */
export const getInlineProps = (props: Record<string, unknown>) => {
  const { width, height, minWidth, maxWidth, minHeight, maxHeight, ...notLayoutProps } = props
  return {
    inlineProps: {
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
    } as InlineStyleProps,
    ...notLayoutProps,
  } as const
}

/** extract layout(space + inline) props from given props */
export const getLayoutProps = (props: Record<string, unknown>) => {
  const { spaceProps, ...notSpaceProps } = getSpaceProps(props)
  const { inlineProps, ...restProps } = getInlineProps(notSpaceProps)

  return {
    layoutProps: {
      ...spaceProps,
      ...inlineProps,
    } as LayoutProps,
    ...restProps,
  } as const
}
