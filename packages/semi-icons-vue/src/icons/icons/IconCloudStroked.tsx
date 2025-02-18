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
        d="M20 11.3C20 11.2 20 11.1 20 11C20 7.1 16.9 4 13 4C10.2 4 7.8 5.7 6.7 8C3.5 8.2 1 10.8 1 14C1 17.3 3.7 20 7 20H18.5C21 20 23 18 23 15.5C23 13.5 21.7 11.9 20 11.3ZM18.5 18H7C4.8 18 3 16.2 3 14C3 12.1 4.3 10.5 6.1 10.1C6.4 10 6.7 10 7 10C7.3104 10 7.56058 10 7.844 10.0935C7.97365 10.1362 8.12026 10.0603 8.14976 9.92705C8.27942 9.34116 8.53971 8.82058 8.8 8.3C9.7 6.9 11.2 6 13 6C15.8 6 18 8.2 18 11C18 11.5996 17.8532 12.1993 17.6854 12.7361C17.6447 12.8663 17.741 13 17.8775 13H18.5C18.9 13 19.3 13.1 19.6 13.3C20.4 13.7 21 14.5 21 15.5C21 16.9 19.9 18 18.5 18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCloudStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'cloud_stroked'} {...props}>
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
