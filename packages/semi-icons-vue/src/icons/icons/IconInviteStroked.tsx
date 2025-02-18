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
        d="M22 8.8C22 8.7 22 8.6 21.9 8.6C21.9 8.5 21.8 8.5 21.8 8.4C21.8 8.4 21.8 8.3 21.7 8.3C21.7 8.3 21.6 8.2 21.5 8.2L19 6.5V4C19 3.5 18.5 3 18 3H13.8L12.6 2.2C12.3 2 11.8 2 11.5 2.2L10.2 3H6C5.5 3 5 3.5 5 4V6.5L2.5 8.1C2.5 8.1 2.4 8.2 2.3 8.2C2.3 8.2 2.3 8.3 2.2 8.3C2.2 8.3 2.1 8.4 2.1 8.5C2.1 8.6 2 8.7 2 8.8C2 8.8 2 8.9 2 9V21C2 21.5 2.5 22 3 22H21C21.5 22 22 21.5 22 21V9C22 8.9 22 8.8 22 8.8ZM7 5H17V10.1L12 12.9L7 10.1V5ZM20 20H4V10.7L5 11.3L7 12.4L11.5 14.9C11.8 15.1 12.2 15.1 12.5 14.9L17 12.4L19 11.3L20 10.7V20Z"
        fill="currentColor"
      />
      <path
        d="M15 9C15 9.5 14.5 10 14 10H13V11C13 11.5 12.5 12 12 12C11.5 12 11 11.6 11 11V10H10C9.5 10 9 9.6 9 9C9 8.4 9.5 8 10 8H11V7C11 6.5 11.5 6 12 6C12.5 6 13 6.5 13 7V8H14C14.5 8 15 8.5 15 9Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconInviteStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'invite_stroked'} {...props}>
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
