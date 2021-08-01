import { register } from "timeago.js";
import { App } from "vue";
import type { PropType } from "vue";
export declare const VueTimeoutJS: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    time: {
        type: PropType<string | number | Date>;
        required: true;
    };
    locale: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
}, {
    now: import("vue").Ref<number>;
    text: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag?: unknown;
    time?: unknown;
    locale?: unknown;
    delay?: unknown;
} & {
    tag: string;
    time: string | number | Date;
    locale: string;
    delay: number;
} & {}>, {
    tag: string;
    locale: string;
    delay: number;
}>;
export { register };
declare const _default: {
    install(app: App): void;
};
export default _default;
