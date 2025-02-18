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
        d="M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10C20.4477 10 20 9.55229 20 9V4H15C14.4477 4 14 3.55229 14 3ZM10 21C10 21.5523 9.55229 22 9 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15L4 20H9C9.55229 20 10 20.4477 10 21ZM2 9C2 9.55228 2.44772 10 3 10C3.55229 10 4 9.55228 4 9L4 4L9 4C9.55229 4 10 3.55228 10 3C10 2.44771 9.55229 2 9 2H3C2.44772 2 2 2.44772 2 3V9ZM21 14C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H20V15C20 14.4477 20.4477 14 21 14ZM8.5 7.5C7.94772 7.5 7.5 7.94772 7.5 8.5V15.5C7.5 16.0523 7.94772 16.5 8.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V8.5C16.5 7.94772 16.0523 7.5 15.5 7.5H8.5ZM9.5 14.5V9.5H14.5V14.5H9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconWindowAdaptionStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'window_adaption_stroked'} {...props}>
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
