import { ThemeToggleSwitch } from '@/components'
import { Text } from '@sxungchxn/dev-ui'

export default function Home() {
  return (
    <main>
      <Text as="h1" variant="logo" color="textPrimary">
        sxungchxn.dev
      </Text>
      <ThemeToggleSwitch />
    </main>
  )
}
