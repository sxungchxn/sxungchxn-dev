import { IconProps } from '@/components/icon/icon.types'
import { useIconProps } from '@/components/icon/hooks/use-icon-props'

describe('useIconProps 테스트', () => {
  test('size가 설정되면 width, height 값은 무시된다', () => {
    const sizeValue = 16
    const { width, height } = useIconProps({
      width: '24px',
      height: '32px',
      size: sizeValue,
    } as IconProps)

    expect(width).toBe(sizeValue)
    expect(height).toBe(sizeValue)
  })
  test('size가 설정되지 않으면 width, height는 각자의 값을 가진다', () => {
    const widthValue = '24px'
    const heightValue = '32px'
    const { width, height } = useIconProps({
      width: widthValue,
      height: heightValue,
    } as IconProps)

    expect(width).toBe(widthValue)
    expect(height).toBe(heightValue)
  })
})
