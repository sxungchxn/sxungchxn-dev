// 테스트 환경에서 컴포넌트를 렌더링할때 사용되는 공통 provider를 세팅
// reference : https://testing-library.com/docs/react-testing-library/setup/
/* eslint-disable react-refresh/only-export-components */
import {
  render,
  renderHook,
  type RenderHookOptions,
  type RenderHookResult,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
import { type ReactElement, type ReactNode, Suspense } from 'react'
import { ThemeProvider } from '@/providers/theme-provider'

export const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <Suspense>{children}</Suspense>
    </ThemeProvider>
  )
}

type CustomRenderer = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => RenderResult

// render 함수 override
const customRender: CustomRenderer = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options })

type CustomHookRenderer = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps> | undefined,
) => RenderHookResult<TResult, TProps>

// renderHook 함수 override
export const customRenderHook: CustomHookRenderer = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  { wrapper, ...options }: RenderHookOptions<TProps> | undefined = {},
) => {
  const wrapperOption = wrapper ?? AllProviders
  return renderHook<TResult, TProps>(hook, { wrapper: wrapperOption, ...options })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
export { customRenderHook as renderHook }
