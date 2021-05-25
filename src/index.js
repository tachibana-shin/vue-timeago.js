import { format, register } from "timeago.js";

export const VueTimeagojs = {
  interval: null,
  props: {
    tag: {
      type: String,
      default: "span",
    },
    time: {
      type: [String, Date, Number],
      required: true,
    },
    locale: {
      type: String,
      required: false,
      default: "en_US",
    },
    delay: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      now: Date.now(),
    };
  },
  computed: {
    text() {
      return format(this.time, this.locale, this.now);
    },
  },
  watch: {
    delay: {
      handler(newValue) {
        clearInterval(this.$options.interval);
        if (newValue > 0) {
          this.$options.interval = setInterval(() => {
            this.now = Date.now();
          }, newValue);
        }
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  },
  destroyed() {
    clearInterval(this.$options.interval);
  },
  render(h) {
    return h(this.tag, this.text);
  },
};

export { register };

export default {
  install(Vue) {
    Vue.component("vue-timeagojs", VueTimeagojs);
  },
};
