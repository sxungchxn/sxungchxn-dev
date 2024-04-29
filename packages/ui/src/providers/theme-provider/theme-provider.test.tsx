import { THEME_ATTR_SELECTOR, ThemeProvider } from './theme-provider'
import { useTheme } from '@/hooks/use-theme'
import { act, renderHook } from '@/tests/test-utils'
import { expect } from 'vitest'

describe('ThemeProvider, useTheme 테스트', () => {
  test('useTheme - 초기 theme는 localStorage에 의해 결정된다', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'dark')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(localStorage.getItem(THEME_ATTR_SELECTOR)).toBe('dark')
    expect(result.current.mode).toBe('dark')

    spy.mockRestore()
  })

  test('useTheme - localStorage에 저장된 값이 없다면 prefers-color-scheme에 의해 결정된다', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null)
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })
    const isMediaMatch = window.matchMedia('(prefers-color-scheme: dark)').matches
    expect(isMediaMatch).toBe(false)
    expect(localStorage.getItem(THEME_ATTR_SELECTOR)).toBeNull()
    expect(result.current.mode).toBe('light')

    spy.mockRestore()
  })

  test('useTheme - setMode를 호출하여 원하는 형태의 theme로 변경할 수 있다', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem')
    Storage.prototype.setItem = vi.fn()

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })
    // 초기값은 light
    expect(result.current.mode).toBe('light')

    act(() => {
      result.current.setMode('dark')
    })
    // setMode 호출 시 localStorage에도 반영하는지 확인
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(localStorage.setItem).toHaveBeenCalled()
    // data-theme에도 반영되는지 확인
    const $root = document.querySelector(':root')
    expect($root?.getAttribute(THEME_ATTR_SELECTOR)).toBe('dark')
    // dark 인지
    expect(result.current.mode).toBe('dark')

    spy.mockRestore()
  })
})
