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
        d="M5.00002 4.99872C5.00003 3.89388 5.89382 3 6.99805 3L18.9996 3L19 17H6C5.64937 17 5.31278 17.0602 5 17.1707L5.00002 4.99872ZM3 20L3.00002 4.9987C3.00004 2.78991 4.78865 1 6.99805 1L18.9996 1C20.1038 1 21 1.89497 21 3V18V22C21 22.5523 20.5523 23 20 23H6C4.34314 23 3 21.6568 3 20ZM5 20C5 19.4477 5.44772 19 6 19H19V21H6C5.44772 21 5 20.5523 5 20Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBookStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'book_stroked'} {...props}>
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
