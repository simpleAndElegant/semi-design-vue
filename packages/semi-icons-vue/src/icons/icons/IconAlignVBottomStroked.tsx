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
        d="M18 3C18.5523 3 19 3.44771 19 4L19 17C19 17.5523 18.5523 18 18 18H14C13.4477 18 13 17.5523 13 17L13 4C13 3.44772 13.4477 3 14 3H18ZM17 5L15 5L15 16H17L17 5ZM21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22L3 22C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20L21 20ZM11 9C11 8.44772 10.5523 8 10 8L6 8C5.44772 8 5 8.44772 5 9L5 17C5 17.5523 5.44772 18 6 18L10 18C10.5523 18 11 17.5523 11 17L11 9ZM7 10H9L9 16L7 16L7 10Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconAlignVBottomStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'align_v_bottom_stroked'} {...props}>
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
