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
        d="M3.5 2.5C4.32843 2.5 5 3.17157 5 4V10.5H11V4C11 3.17157 11.6716 2.5 12.5 2.5C13.3284 2.5 14 3.17157 14 4V20C14 20.8284 13.3284 21.5 12.5 21.5C11.6716 21.5 11 20.8284 11 20V13.5H5V20C5 20.8284 4.32843 21.5 3.5 21.5C2.67157 21.5 2 20.8284 2 20V4C2 3.17157 2.67157 2.5 3.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M18.6182 19.3457C17.9004 19.3457 17.3877 18.8672 17.3877 18.2041C17.3877 17.5342 17.9004 17.0557 18.6182 17.0557C19.3359 17.0557 19.8555 17.541 19.8555 18.2041C19.8555 18.8672 19.3359 19.3457 18.6182 19.3457ZM18.6182 15.2988C18.0371 15.2988 17.6133 14.8887 17.6133 14.335C17.6133 13.7812 18.0371 13.3711 18.6182 13.3711C19.1992 13.3711 19.6299 13.7812 19.6299 14.335C19.6299 14.8887 19.1992 15.2988 18.6182 15.2988ZM18.6182 21.2051C21.127 21.2051 22.7266 20.1318 22.7266 18.4502C22.7266 17.2402 21.9268 16.3584 20.6553 16.167V16.0098C21.7969 15.6885 22.3506 15.0049 22.3506 13.9453C22.3506 12.4824 20.8604 11.5117 18.6182 11.5117C16.376 11.5117 14.8857 12.4824 14.8857 13.9453C14.8857 15.0049 15.4395 15.6885 16.5811 16.0098V16.167C15.3096 16.3584 14.5098 17.2402 14.5098 18.4502C14.5098 20.1318 16.1094 21.2051 18.6182 21.2051Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH8',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h8'} {...props}>
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
