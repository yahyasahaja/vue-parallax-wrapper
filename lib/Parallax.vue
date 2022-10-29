<template>
  <slot ref="child" :values="state.values" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Config, State } from './types';

export default defineComponent({
  name: 'Parallax',
  props: {
    configs: {
      type: Array as PropType<Config[]>,
      default: [],
    },
  },
  data() {
    return {
      state: {
        values: {},
      } as State,
    };
  },
  mounted() {
    [...this.configs].reverse().forEach((config) => {
      this.state.values[config.variable] = config.startValue;
    });
    if (typeof window !== "undefined")
      window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    if (typeof window !== "undefined")
      window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    calculateConfigActive({ config, scrollPosition }: { config: Config, scrollPosition: number }) {
      return scrollPosition >= config.start && scrollPosition <= config.end;
    },
    handleScroll() {
      if (typeof window === "undefined") return;
      const scrollPosition = window.scrollY;
      const variableCount = {} as {
        [name: string]: number
      };

      const finalValues = { ...this.state.values };

      this.configs.forEach((config, i) => {
        const isConfigActive = this.calculateConfigActive({ config, scrollPosition });
        const { variable, start, end, startValue, endValue } = config;
        if (!variableCount[variable]) variableCount[variable] = 0;
        variableCount[variable]++;

        if (isConfigActive) {
          const endPoint = end - start;
          const currentPoint = scrollPosition - start;
          const valueSize = endValue - startValue;
          // 25% of 100 = 25;
          // if starting from 200 then end result should be 225;
          finalValues[variable] = (currentPoint / endPoint) * valueSize + startValue;
        } else if (scrollPosition > end) {
          finalValues[variable] = endValue;
        } else if (variableCount[variable] === 1 && scrollPosition < start) {
          finalValues[variable] = startValue;
        }
      });

      this.state.values = finalValues;
    },
  },
});
</script>
