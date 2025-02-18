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
        d="M22.3779 19.5645V16.2285C22.3779 14.499 21.5166 13.5283 19.9854 13.5283C18.9805 13.5283 18.1123 14.082 17.8594 14.8682H17.7227C17.6748 14.0205 17.2031 13.5762 16.3896 13.5762C15.5625 13.5762 15.043 14.123 15.043 15.0254V19.5508C15.043 20.5352 15.5352 21.0684 16.4375 21.0684C17.333 21.0684 17.8184 20.5352 17.8184 19.5508V16.9463C17.8184 16.2354 18.1807 15.791 18.7207 15.791C19.2676 15.791 19.6025 16.2354 19.6025 16.9258V19.5508C19.6025 20.5352 20.0879 21.0684 20.9902 21.0684C21.8857 21.0684 22.3779 20.5488 22.3779 19.5645Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHn',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'hn'} {...props}>
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
