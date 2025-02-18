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
        d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V3ZM11 4V20H13V4H11ZM2 8C2 7.44772 2.44772 7 3 7H7C7.55228 7 8 7.44772 8 8V21C8 21.5523 7.55228 22 7 22H3C2.44772 22 2 21.5523 2 21V8ZM4 9V20H6V9H4ZM17 10C16.4477 10 16 10.4477 16 11V21C16 21.5523 16.4477 22 17 22H21C21.5523 22 22 21.5523 22 21V11C22 10.4477 21.5523 10 21 10H17ZM18 20V12H20V20H18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBarChartVStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'bar_chart_v_stroked'} {...props}>
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
