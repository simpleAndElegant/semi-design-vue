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
        d="M2.02949 4.67856C2.7593 4.28654 3.66871 4.56038 4.06073 5.29018C6.21313 9.29726 8.83179 11.5 12.0001 11.5C15.1685 11.5 17.7871 9.29726 19.9395 5.29018C20.3315 4.56038 21.241 4.28655 21.9708 4.67856C22.7006 5.07058 22.9744 5.97999 22.5824 6.7098C21.9049 7.97104 21.1385 9.15419 20.2743 10.199L23.2001 14.1C23.6971 14.7627 23.5628 15.7029 22.9001 16.2C22.2373 16.697 21.2971 16.5627 20.8001 15.9L18.1186 12.3246C17.448 12.8501 16.7322 13.2957 15.9687 13.6441L17.4046 17.4733C17.6955 18.249 17.3025 19.1136 16.5268 19.4045C15.7511 19.6954 14.8865 19.3024 14.5956 18.5267L13.0956 14.5267C13.0852 14.4988 13.0756 14.4709 13.0669 14.4428C12.7193 14.4806 12.3638 14.5 12.0001 14.5C11.6365 14.5 11.281 14.4806 10.9333 14.4428C10.9246 14.4709 10.9151 14.4988 10.9046 14.5267L9.40463 18.5267C9.11375 19.3024 8.24913 19.6954 7.47345 19.4045C6.69777 19.1136 6.30476 18.249 6.59564 17.4733L8.03159 13.6441C7.26806 13.2957 6.55223 12.8501 5.88163 12.3246L3.20009 15.9C2.70303 16.5627 1.76283 16.697 1.10009 16.2C0.437347 15.7029 0.303032 14.7627 0.800088 14.1L3.72589 10.1989C2.86177 9.15415 2.09533 7.97101 1.41787 6.70979C1.02585 5.97999 1.29969 5.07057 2.02949 4.67856Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconEyeClosed',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'eye_closed'} {...props}>
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
