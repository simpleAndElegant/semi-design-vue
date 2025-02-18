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
        d="M13.2878 20.0869L12.0021 17.86L10.7043 20.1078C10 21.5 8.41879 23 6.5 23C4.01472 23 2 20.9853 2 18.5C2 16.0147 4.01472 14 6.5 14C7.47939 14 8.38571 14.3129 9.12445 14.8441L9.69266 13.86L6.00001 6.4641C5.07192 4.8566 5.38641 2.87268 6.64546 1.62455C7.04654 1.22694 7.6849 1.41219 7.95156 1.91004L14.8785 14.842C15.6167 14.3121 16.5219 14 17.5 14C19.9853 14 22 16.0147 22 18.5C22 20.9853 19.9853 23 17.5 23C15.5733 23 14 21.5 13.2878 20.0869ZM6.5 17C6.93543 17 7.32754 17.1855 7.60156 17.4819C7.84888 17.7493 8.00001 18.107 8.00001 18.5C8.00001 18.8449 7.88357 19.1627 7.68786 19.4161C7.41354 19.7713 6.98348 20 6.5 20C5.67157 20 5 19.3284 5 18.5C5 17.6716 5.67157 17 6.5 17ZM16.4293 19.5505C16.7015 19.8279 17.0807 20 17.5 20C18.3284 20 19 19.3284 19 18.5C19 17.6716 18.3284 17 17.5 17C17.0659 17 16.6749 17.1844 16.401 17.4791C16.1522 17.7469 16 18.1057 16 18.5C16 18.9091 16.1638 19.2799 16.4293 19.5505ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
        fill="currentColor"
      />
      <path
        d="M15.3684 12.0293L18.0041 6.4641C18.9263 4.86677 18.6216 2.89775 17.3824 1.64831C16.9759 1.23838 16.3232 1.43781 16.067 1.9552L13.059 8.02927L15.3684 12.0293Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconScissors',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'scissors'} {...props}>
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
