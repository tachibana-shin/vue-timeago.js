import { format, register } from "timeago.js";
import {
  // onUnmounted,
  onBeforeUnmount,
  h,
  ref,
  computed,
  watch,
  toRef,
  defineComponent,
} from "vue";
import type { PropType, App } from "vue";

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

    onBeforeUnmount(() => void clearInterval(interval));
    // onUnmounted(() => void clearInterval(interval));

    return () => h(props.tag, text.value);
  },
});

export { register };

export default {
  install(app: App) {
    app.component("vue-timeagojs", VueTimeoutJS);
  },
};
