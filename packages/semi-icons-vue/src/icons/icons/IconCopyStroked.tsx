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
        d="M22 16C22 17.1046 21.1046 18 20 18V4H6C6 2.89543 6.89543 2 8 2H20C21.1046 2 22 2.89543 22 4V16ZM2 8C2 6.89543 2.89543 6 4 6H16C17.1046 6 18 6.89543 18 8V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V8ZM4 8H16V20H4V8ZM6 14C6 13.4477 6.44772 13 7 13H9V11C9 10.4477 9.44771 10 10 10C10.5523 10 11 10.4477 11 11V13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V15H7C6.44772 15 6 14.5523 6 14Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCopyStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'copy_stroked'} {...props}>
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
