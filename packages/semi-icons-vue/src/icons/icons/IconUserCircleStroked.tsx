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
        d="M23.0283 12.0282C23.0283 18.1034 18.1035 23.0282 12.0283 23.0282C5.95319 23.0282 1.02832 18.1034 1.02832 12.0282C1.02832 5.9531 5.95319 1.02823 12.0283 1.02823C18.1035 1.02823 23.0283 5.9531 23.0283 12.0282ZM18.7229 18.0435C20.1562 16.4494 21.0283 14.3407 21.0283 12.0282C21.0283 7.05767 16.9989 3.02823 12.0283 3.02823C7.05776 3.02823 3.02832 7.05767 3.02832 12.0282C3.02832 14.3177 3.88319 16.4075 5.29113 17.9958C5.84737 16.1311 7.15981 14.5925 8.87267 13.7357C8.02627 12.9175 7.5 11.7702 7.5 10.5C7.5 8.01472 9.51472 6 12 6C14.4853 6 16.5 8.01472 16.5 10.5C16.5 11.7702 15.9737 12.9175 15.1273 13.7357C16.8548 14.5998 18.175 16.1574 18.7229 18.0435ZM16.9796 19.5451C16.7498 16.9968 14.6081 15 12 15C9.40404 15 7.27015 16.9783 7.02374 19.5096C8.45475 20.4688 10.1762 21.0282 12.0283 21.0282C13.8575 21.0282 15.5592 20.4825 16.9796 19.5451ZM12 13C13.3807 13 14.5 11.8807 14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserCircleStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_circle_stroked'} {...props}>
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
