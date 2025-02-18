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
        d="M19.4316 19.585C19.4316 20.5557 19.9443 21.1025 20.8604 21.1025C21.7695 21.1025 22.2754 20.5625 22.2754 19.585V13.3096C22.2754 12.2705 21.6191 11.6006 20.6074 11.6006C20.04 11.6006 19.4111 11.792 18.8232 12.1475L17.8594 12.7285C17.3809 13.0156 17.1348 13.3779 17.1348 13.7949C17.1348 14.3555 17.5312 14.752 18.0918 14.752C18.3652 14.752 18.584 14.6699 19.0352 14.4033L19.418 14.1777H19.4316V19.585Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH1',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h1'} {...props}>
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
