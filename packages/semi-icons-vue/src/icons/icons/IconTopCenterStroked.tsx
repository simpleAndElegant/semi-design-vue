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
        d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4L21 4C21.5523 4 22 3.55229 22 3C22 2.44772 21.5523 2 21 2H3ZM7 10C6.44772 10 6 10.4477 6 11V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V11C18 10.4477 17.5523 10 17 10H7ZM8 20V12H16V20H8Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTopCenterStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'top_center_stroked'} {...props}>
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
