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
        d="M2 4C2 2.89543 2.89543 2 4 2H7H12H14.9608C15.4912 2 15.9999 2.21071 16.375 2.58579L21.4142 7.625C21.7893 8.00007 22 8.50878 22 9.03921V20C22 21.1046 21.1046 22 20 22H17H7H4C2.89543 22 2 21.1046 2 20V4ZM11 4H8V7H11V4ZM6 4V8C6 8.55228 6.44772 9 7 9H12C12.5523 9 13 8.55228 13 8V4H14.9608L20 9.03921V20H18V15C18 14.4477 17.5523 14 17 14H7C6.44772 14 6 14.4477 6 15V20H4V4H6ZM16 16V20H8V16H16Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSaveStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'save_stroked'} {...props}>
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
