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
        d="M14.9541 16.2969C14.9541 17.7871 15.3232 19.0586 16.0205 19.9062C16.7178 20.7607 17.7363 21.2051 18.9805 21.2051C21.1816 21.2051 22.6719 19.8516 22.6719 17.8008C22.6719 16.0303 21.4961 14.7998 19.8076 14.7998C18.8369 14.7998 17.9961 15.3057 17.6611 16.0918H17.5996C17.5996 14.5264 18.1328 13.6514 19.1719 13.6514C19.5547 13.6514 19.8486 13.7471 20.2793 14.0205C20.7236 14.3008 20.9902 14.3965 21.3389 14.3965C21.9609 14.3965 22.3848 14.0137 22.3848 13.4395C22.3848 12.9814 22.0703 12.4961 21.5439 12.1406C20.9287 11.7305 20.0879 11.5117 19.1377 11.5117C16.4717 11.5117 14.9541 13.248 14.9541 16.2969ZM17.8936 17.9033C17.8936 17.2402 18.3516 16.748 18.96 16.748C19.5615 16.748 19.999 17.2334 19.999 17.9033C19.999 18.6006 19.5615 19.0791 18.96 19.0791C18.3516 19.0791 17.8936 18.5938 17.8936 17.9033Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH6',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h6'} {...props}>
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
