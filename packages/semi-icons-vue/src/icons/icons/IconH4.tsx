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
        d="M19.083 19.6807C19.083 20.5488 19.5957 21.1025 20.4023 21.1025C21.2158 21.1025 21.7422 20.542 21.7422 19.6807V19.5986H21.7969C22.4736 19.5986 22.8906 19.1816 22.8906 18.5186C22.8906 17.8486 22.46 17.3838 21.7969 17.3838H21.7422V13.3096C21.7422 12.2158 20.8535 11.5117 19.4727 11.5117C18.3994 11.5117 17.75 11.9219 16.9092 13.125C16.2256 14.1094 15.3096 15.75 14.8379 16.8369C14.5645 17.4727 14.4824 17.7666 14.4824 18.1562C14.4824 19.0859 15.0156 19.5986 15.9727 19.5986H19.083V19.6807ZM17.0117 17.3838V17.3564C17.1621 17.0146 18.6523 14.2598 18.9531 13.7539H19.083V17.3838H17.0117Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH4',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h4'} {...props}>
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
