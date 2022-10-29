# vue-parallax-wrapper
Vue component wrapper for parallax effect using vue slot that let you define parallax scenario for your components with desired each start and end value related to the scroll position.

## Install
```sh
# yarn
yarn add vue-component-wrapper

# npm
npm i vue-component-wrapper
```

## Usage
```vue
<template>
  <Parallax :configs="parallaxConfigs" v-slot="{ values: {
    contentOpacity,
    contentTranslateX,
  } }">
    <section
      class="fixed top-0">
      <div class="w-full" :style="{ opacity: contentOpacity, transform: `translateX(${contentTranslateX}px)`}">
        Parallax Content
      </div>
    </section>
  </Parallax>
</template>

<script setup lang="ts">
import { Parallax, Config } from './Parallax.vue';

const parallaxConfigs = [
  {
    start: 0,
    end: 300,
    variable: 'contentOpacity',
    startValue: 0,
    endValue: 1,
  },
  {
    start: 0,
    end: 300,
    variable: 'contentTranslateX',
    startValue: -80,
    endValue: 0,
  },
  {
    start: 500,
    end: 800,
    variable: 'contentTranslateX',
    startValue: 0,
    endValue: 80,
  },
] as Config[];
</script>
```

## Parallax Config
| Props      | Data type | Description                            |
| ---------- | --------- | -------------------------------------- |
| start      | `number`  | scrol start position                   |
| end        | `number`  | scroll end position                    |
| variable   | `string`  | variable to be exported in scoped slot |
| startValue | `number`  | parallax start value                   |
| endValue   | `number`  | parallax end value                     |

## License

MIT License.
