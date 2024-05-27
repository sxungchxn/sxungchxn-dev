import { useCallback, useMemo, useState } from 'react'

export const useBooleanState = (initialState: boolean = false) => {
  const [bool, setBool] = useState<boolean>(initialState)

  const setTrue = useCallback(() => {
    setBool(true)
  }, [])

  const setFalse = useCallback(() => {
    setBool(false)
  }, [])

  const toggle = useCallback(() => {
    setBool(b => !b)
  }, [])

  return useMemo(
    () => [bool, toggle, setTrue, setFalse] as const,
    [bool, toggle, setTrue, setFalse],
  )
}
