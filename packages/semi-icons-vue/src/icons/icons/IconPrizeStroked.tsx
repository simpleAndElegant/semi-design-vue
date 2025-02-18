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
        d="M4 1C3.44772 1 3 1.44772 3 2V7C3 7.31476 3.14819 7.61115 3.4 7.8L7 10.5V11.1011C5.76392 12.3626 5 14.0926 5 16C5 19.866 8.13402 23 12 23C15.866 23 19 19.866 19 16C19 14.0926 18.2361 12.3626 17 11.1011V10.5L20.6 7.8C20.8518 7.61115 21 7.31476 21 7V2C21 1.44772 20.5523 1 20 1H16H8H4ZM7 3V8L5 6.5V3H7ZM7 16C7 14.5195 7.64219 13.1904 8.66641 12.2734L8.66693 12.2729C9.55216 11.4806 10.7188 11 12 11C13.2812 11 14.4478 11.4806 15.3331 12.2729L15.3331 12.2729C16.3576 13.1899 17 14.5193 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16ZM19 6.5L17 8V3H19V6.5ZM9 9.67391C9.90944 9.24194 10.9269 9 12 9C13.0731 9 14.0906 9.24194 15 9.67391V3H9V9.67391ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconPrizeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'prize_stroked'} {...props}>
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
