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
        d="M2 3C2 2.44772 2.44772 2 3 2H6C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3Z"
        fill="currentColor"
      />
      <path
        d="M9.5 3C9.5 2.44772 9.94771 2 10.5 2H13.5C14.0523 2 14.5 2.44772 14.5 3V6C14.5 6.55228 14.0523 7 13.5 7H10.5C9.94771 7 9.5 6.55228 9.5 6V3Z"
        fill="currentColor"
      />
      <path
        d="M10.5 17C9.94771 17 9.5 17.4477 9.5 18V21C9.5 21.5523 9.94771 22 10.5 22H13.5C14.0523 22 14.5 21.5523 14.5 21V18C14.5 17.4477 14.0523 17 13.5 17H10.5Z"
        fill="currentColor"
      />
      <path
        d="M2 10.5C2 9.94771 2.44772 9.5 3 9.5H6C6.55228 9.5 7 9.94771 7 10.5V13.5C7 14.0523 6.55228 14.5 6 14.5H3C2.44772 14.5 2 14.0523 2 13.5V10.5Z"
        fill="currentColor"
      />
      <path
        d="M18 9.5C17.4477 9.5 17 9.94771 17 10.5V13.5C17 14.0523 17.4477 14.5 18 14.5H21C21.5523 14.5 22 14.0523 22 13.5V10.5C22 9.94771 21.5523 9.5 21 9.5H18Z"
        fill="currentColor"
      />
      <path
        d="M9.5 10.5C9.5 9.94771 9.94771 9.5 10.5 9.5H13.5C14.0523 9.5 14.5 9.94771 14.5 10.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H10.5C9.94771 14.5 9.5 14.0523 9.5 13.5V10.5Z"
        fill="currentColor"
      />
      <path
        d="M3 17C2.44772 17 2 17.4477 2 18V21C2 21.5523 2.44772 22 3 22H6C6.55228 22 7 21.5523 7 21V18C7 17.4477 6.55228 17 6 17H3Z"
        fill="currentColor"
      />
      <path
        d="M17 3C17 2.44772 17.4477 2 18 2H21C21.5523 2 22 2.44772 22 3V6C22 6.55228 21.5523 7 21 7H18C17.4477 7 17 6.55228 17 6V3Z"
        fill="currentColor"
      />
      <path
        d="M18 17C17.4477 17 17 17.4477 17 18V21C17 21.5523 17.4477 22 18 22H21C21.5523 22 22 21.5523 22 21V18C22 17.4477 21.5523 17 21 17H18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconApps',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'apps'} {...props}>
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
