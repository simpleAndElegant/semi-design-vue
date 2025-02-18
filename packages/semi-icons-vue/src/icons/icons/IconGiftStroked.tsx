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
        d="M8 3C6.34315 3 5 4.34315 5 6C5 6.35064 5.06015 6.68722 5.17071 7H3C2.44772 7 2 7.44772 2 8V12C2 12.5523 2.44772 13 3 13H4V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V13H21C21.5523 13 22 12.5523 22 12V8C22 7.44772 21.5523 7 21 7H18.8293C18.9398 6.68722 19 6.35064 19 6C19 4.34315 17.6569 3 16 3H14C13.2316 3 12.5308 3.28885 12 3.7639C11.4692 3.28885 10.7684 3 10 3H8ZM13 9H16H20V11H19H13V9ZM11 9H8H4V11H5H11V9ZM11 13H6V20H11V13ZM13 20H18V13H13V20ZM11 6V7H8C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5H10C10.5523 5 11 5.44772 11 6ZM17 6C17 6.55228 16.5523 7 16 7H13V6C13 5.44772 13.4477 5 14 5H16C16.5523 5 17 5.44772 17 6Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGiftStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'gift_stroked'} {...props}>
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
