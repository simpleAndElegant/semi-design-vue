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
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 4C7.58172 4 4 7.58172 4 12H8.71429C11.0812 12 13 13.9188 13 16.2857C13 16.6802 12.6802 17 12.2857 17C12.2857 17 10.5 17 10 17C9.5 17 9.08907 17.5 9.08907 18.5C9.08907 19.5 10 20 10.5 20C11 20 11.3094 20 12 20C16.0015 20 19.3169 17.0621 19.9067 13.2256C19.2107 13.716 18.3852 14 17.5 14C15.6547 14 14.0688 12.7659 13.3744 11H10C9.44771 11 8.99034 10.5486 9.08907 10.0052C9.60145 7.18519 11.5 6 13.8669 6.0491C14.0571 5.76054 14.2744 5.49548 14.5147 5.25857C14.7976 4.97973 14.7477 4.47377 14.3682 4.35634C13.6199 4.12473 12.8245 4 12 4Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGlobe',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'globe'} {...props}>
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
