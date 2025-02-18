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
        d="M12 4.49985C8.72614 4.49985 5.93858 6.59842 4.91651 9.52827C4.64365 10.3104 3.78838 10.7233 3.0062 10.4505C2.22403 10.1776 1.81115 9.32232 2.08401 8.54015C3.51328 4.44305 7.411 1.49995 12 1.49995C15.5766 1.49995 18.7333 3.28778 20.6287 6.0163L21.063 4.56882C21.301 3.77536 22.1372 3.3251 22.9307 3.56314C23.7241 3.80119 24.1744 4.63739 23.9363 5.43085L22.4364 10.4307C22.214 11.1719 21.4643 11.6223 20.7055 11.4705L15.7057 10.4705C14.8934 10.3081 14.3665 9.51785 14.529 8.70554C14.6915 7.89322 15.4817 7.36642 16.294 7.52888L18.3013 7.93034C16.9646 5.86494 14.6404 4.49985 12 4.49985ZM5.69868 16.0689L7.70596 16.4703C8.51828 16.6328 9.30849 16.106 9.47095 15.2937C9.63342 14.4814 9.10661 13.6911 8.2943 13.5287L3.29449 12.5287C2.53569 12.377 1.78599 12.8273 1.56363 13.5685L0.0636552 18.5684C-0.174387 19.3618 0.27587 20.198 1.06933 20.4361C1.86279 20.6741 2.69899 20.2239 2.93704 19.4304L3.37128 17.9829C5.26668 20.7115 8.42338 22.4993 12 22.4993C16.5739 22.4993 20.4611 19.5754 21.9018 15.4994C22.1779 14.7183 21.7685 13.8614 20.9874 13.5853C20.2064 13.3092 19.3494 13.7186 19.0734 14.4997C18.0431 17.4146 15.2631 19.4994 12 19.4994C9.35951 19.4994 7.03536 18.1342 5.69868 16.0689Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSync',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'sync'} {...props}>
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
