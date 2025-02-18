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
        d="M20.875 10.875C21.4782 10.875 21.9954 10.4442 22.1044 9.85088C22.2134 9.25757 21.8832 8.67106 21.3193 8.45664L3.56931 1.70664C3.18516 1.56055 2.75373 1.61264 2.41538 1.84596C2.07704 2.07928 1.875 2.46401 1.875 2.87501V9.62501C1.875 10.3154 2.43465 10.875 3.125 10.875L20.875 10.875ZM4.375 8.37501V4.68769L14.0713 8.37501H4.375ZM22.1044 13.8991C21.9954 13.3058 21.4782 12.875 20.875 12.875L3.125 12.875C2.43465 12.875 1.875 13.4346 1.875 14.125V20.875C1.875 21.286 2.07704 21.6707 2.41538 21.904C2.75373 22.1374 3.18516 22.1895 3.56931 22.0434L21.3193 15.2934C21.8832 15.0789 22.2134 14.4924 22.1044 13.8991Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFilpVertical',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'filp_vertical'} {...props}>
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
