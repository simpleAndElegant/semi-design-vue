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
        d="M6.22727 5C5.54947 5 5 5.54947 5 6.22727C5 7.20632 5.79368 8 6.77273 8H8V6.5C8 5.67157 7.32843 5 6.5 5H6.22727ZM11 8V6.5C11 4.01472 8.98528 2 6.5 2H6.22727C3.89261 2 2 3.89261 2 6.22727C2 8.86318 4.13682 11 6.77273 11H8V13H6.22727C3.89261 13 2 14.8926 2 17.2273V17.5C2 19.9853 4.01472 22 6.5 22C8.98528 22 11 19.9853 11 17.5V16H13V17.5C13 19.9853 15.0147 22 17.5 22C19.9853 22 22 19.9853 22 17.5V17.2273C22 14.8926 20.1074 13 17.7727 13H16V11H17.2273C19.8632 11 22 8.86318 22 6.22727C22 3.89261 20.1074 2 17.7727 2H17.5C15.0147 2 13 4.01472 13 6.5V8H11ZM11 11V13H13V11H11ZM16 8H17.2273C18.2063 8 19 7.20632 19 6.22727C19 5.54947 18.4505 5 17.7727 5H17.5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5V17.2273C19 16.5495 18.4505 16 17.7727 16H16ZM8 16H6.22727C5.54947 16 5 16.5495 5 17.2273V17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCommand',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'command'} {...props}>
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
