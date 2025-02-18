import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4.15622C11.0091 2.88867 9.61824 2.22282 8.1766 2.08357C6.31414 1.90368 4.36427 2.59816 3.04873 3.94814C1.6489 5.38462 0.968851 7.13942 1.00109 9.02554C1.03296 10.8897 1.75737 12.8138 3.03631 14.6511C5.05479 17.551 9.25556 21.0323 10.7729 22.2494C11.4924 22.8265 12.5076 22.8265 13.2271 22.2494C14.7444 21.0323 18.9452 17.551 20.9637 14.6511C22.2426 12.8138 22.967 10.8897 22.9989 9.02555C23.0312 7.13942 22.3511 5.38463 20.9513 3.94814C19.6358 2.59816 17.6859 1.90368 15.8234 2.08357C14.3818 2.22282 12.9908 2.88866 12 4.15622ZM7.98432 4.07431C6.7137 3.95158 5.36504 4.43688 4.4811 5.34396C3.44916 6.40293 2.97778 7.64465 3.0008 8.99136C3.0242 10.36 3.56175 11.9052 4.6778 13.5085C6.49479 16.1189 10.4282 19.4076 12 20.6697C13.5718 19.4076 17.5052 16.1189 19.3222 13.5085C20.4382 11.9052 20.9758 10.36 20.9992 8.99135C21.0222 7.64464 20.5509 6.40292 19.5189 5.34396C18.635 4.43688 17.2863 3.95158 16.0157 4.07431C14.7891 4.19278 13.6393 4.87262 13.0227 6.3452C12.6441 7.24958 11.3559 7.2496 10.9772 6.3452C10.3607 4.87261 9.21086 4.19278 7.98432 4.07431Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHeartStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'heart_stroked'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
