# @sxungchxn/dev-icons

> tree-shakable 한 공통 아이콘 에셋 라이브러리

<br/>

## Usage

아이콘 에셋을 리액트 컴포넌트로 import 해올 수 있습니다.

```tsx
import { IconX } from '@sxungchxn/dev-icons'

const Component = () => {
  return <IconX />
}
```

⚠️ `icons` 오브젝트 자체를 import 하는 것은 트리셰이킹 되지 않기 때문에 권장되지 않습니다

```tsx
import { icons } from '@sxungchxn/dev-icons'

const Icon = icons.IconX // ❌
```

<br/>

## 사용 패키지

- `rollup` - for the tree-shakable bundling
- `babel` - for the transpiling js code
- `svgr` - for transform svg into react component
