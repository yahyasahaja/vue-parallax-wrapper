import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';
import type { VNodeProps } from 'vue';

export declare type Config = {
    start: number;
    end: number;
    variable: string;
    startValue: number;
    endValue: number;
};

export declare const Parallax: DefineComponent<{
    configs: {
        type: PropType<Config[]>;
        default: never[];
    };
}, unknown, {
    state: State;
}, {}, {
    calculateConfigActive({ config, scrollPosition }: {
        config: Config;
        scrollPosition: number;
    }): boolean;
    handleScroll(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    configs: {
        type: PropType<Config[]>;
        default: never[];
    };
}>>, {
    configs: Config[];
}>;

export declare type State = {
    values: Values;
};

export declare type Values = {
    [name: string]: number;
};

export { }
