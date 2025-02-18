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
        d="M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6ZM21 6L3 6V18H21V6ZM5 9C5 8.44772 5.44772 8 6 8H7.5C8.05228 8 8.5 8.44772 8.5 9V15C8.5 15.5523 8.05228 16 7.5 16C6.94772 16 6.5 15.5523 6.5 15V10H6C5.44772 10 5 9.55228 5 9ZM16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10H16.5V15C16.5 15.5523 16.9477 16 17.5 16C18.0523 16 18.5 15.5523 18.5 15V9C18.5 8.44772 18.0523 8 17.5 8H16ZM13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRealSizeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'real_size_stroked'} {...props}>
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
