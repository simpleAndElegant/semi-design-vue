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
        d="M3 2C2.44772 2 2 2.44772 2 3V8C2 8.55228 2.44772 9 3 9H12C12.5523 9 13 8.55228 13 8V3C13 2.44772 12.5523 2 12 2H3ZM4 7V4H11V7H4ZM12 15C11.4477 15 11 15.4477 11 16V21C11 21.5523 11.4477 22 12 22H21C21.5523 22 22 21.5523 22 21V16C22 15.4477 21.5523 15 21 15H12ZM13 20V17H20V20H13ZM15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3V12C22 12.5523 21.5523 13 21 13H16C15.4477 13 15 12.5523 15 12V3ZM17 4V11H20V4H17ZM3 11C2.44772 11 2 11.4477 2 12V21C2 21.5523 2.44772 22 3 22H8C8.55228 22 9 21.5523 9 21V12C9 11.4477 8.55228 11 8 11H3ZM4 20V13H7V20H4Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconComponentPlaceholderStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'component_placeholder_stroked'} {...props}>
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
