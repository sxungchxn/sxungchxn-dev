# @sxungchxn/dev-icons

> shared react icons component library which is tree-shakable

<br/>

## Install

`npm install @sxungchxn/dev-icons`

`yarn add @sxungchxn/dev-icons`

`pnpm add @sxungchxn/dev-icons`

<br/>

## Usage

import icon source as react component.

```tsx
import { IconX } from '@sxungchxn/dev-icons'

const Component = () => {
  return <IconX />
}
```

⚠️ it is not recommended to import `icons` object like below as it is not tree-shakable.

```tsx
import { icons } from '@sxungchxn/dev-icons'

const Icon = icons.IconX // ❌
```

<br/>

## Stacks

- `rollup` - for the tree-shakable bundling
- `babel` - for the transpiling js code
- `svgr` - for transform svg into react component
