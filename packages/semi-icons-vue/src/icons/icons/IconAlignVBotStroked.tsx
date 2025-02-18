import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 25 24"
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
        d="M18.5 3C19.0523 3 19.5 3.44771 19.5 4V17C19.5 17.5523 19.0523 18 18.5 18H14.5C13.9477 18 13.5 17.5523 13.5 17V4C13.5 3.44772 13.9477 3 14.5 3H18.5ZM17.5 5H15.5V16H17.5V5ZM21.5 20C22.0523 20 22.5 20.4477 22.5 21C22.5 21.5523 22.0523 22 21.5 22H3.5C2.94772 22 2.5 21.5523 2.5 21C2.5 20.4477 2.94772 20 3.5 20H21.5ZM11.5 9C11.5 8.44772 11.0523 8 10.5 8H6.5C5.94772 8 5.5 8.44772 5.5 9V17C5.5 17.5523 5.94772 18 6.5 18H10.5C11.0523 18 11.5 17.5523 11.5 17V9ZM7.5 10H9.5V16H7.5V10Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconAlignVBotStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'align_v_bot_stroked'} {...props}>
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
