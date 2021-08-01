import { format, register } from "timeago.js";
import {
  onUnmounted,
  h,
  ref,
  computed,
  watch,
  toRef,
  defineComponent,
  App,
} from "vue";
import type { PropType } from "vue";

export const VueTimeoutJS = defineComponent({
  props: {
    tag: {
      type: String as PropType<string>,
      default: "span",
    },
    time: {
      type: [String, Date, Number] as PropType<string | Date | number>,
      required: true,
    },
    locale: {
      type: String as PropType<string>,
      required: false,
      default: "en_US",
    },
    delay: {
      type: Number as PropType<number>,
      default: 1000,
    },
  },
  setup(props) {
    const now = ref<number>(Date.now());
    const text = computed<string>(() =>
      format(props.time, props.locale, {
        relativeDate: now.value,
      })
    );
    const delay = toRef(props, "delay");

    let interval: NodeJS.Timeout;
    watch(
      delay,
      (newValue) => {
        clearInterval(interval);
        if (newValue > 0) {
          interval = setInterval(() => {
            now.value = Date.now();
          }, newValue);
        }
      },
      {
        immediate: true,
      }
    );

    // onBeforeMount(() => void clearInterval(interval))
    onUnmounted(() => void clearInterval(interval));

    return {
      now,
      text,
    };
  },
  render() {
    return h(this.tag, this.text);
  },
});

export { register };

export default {
  install(app: App) {
    app.component("vue-timeagojs", VueTimeoutJS);
  },
};
