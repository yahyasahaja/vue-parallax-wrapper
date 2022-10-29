import { defineComponent as h, renderSlot as p } from "vue";
const w = h({
  name: "Parallax",
  props: {
    configs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      state: {
        values: {}
      }
    };
  },
  mounted() {
    [...this.configs].reverse().forEach((e) => {
      this.state.values[e.variable] = e.startValue;
    }), typeof window < "u" && window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    typeof window < "u" && window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    calculateConfigActive({ config: e, scrollPosition: t }) {
      return t >= e.start && t <= e.end;
    },
    handleScroll() {
      if (typeof window > "u")
        return;
      const e = window.scrollY, t = {}, n = { ...this.state.values };
      this.configs.forEach((a, o) => {
        const l = this.calculateConfigActive({ config: a, scrollPosition: e }), { variable: s, start: r, end: c, startValue: i, endValue: d } = a;
        if (t[s] || (t[s] = 0), t[s]++, l) {
          const f = c - r, u = e - r, v = d - i;
          n[s] = u / f * v + i;
        } else
          e > c ? n[s] = d : t[s] === 1 && e < r && (n[s] = i);
      }), this.state.values = n;
    }
  }
}), m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
function _(e, t, n, a, o, l) {
  return p(e.$slots, "default", {
    ref: "child",
    values: e.state.values
  });
}
const C = /* @__PURE__ */ m(w, [["render", _]]);
export {
  C as Parallax
};
