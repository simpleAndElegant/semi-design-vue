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
        d="M5 2C3.34315 2 2 3.34315 2 5V8H22C22 6 21 4 19 4H12.5523C11.8711 4 11.2102 3.76816 10.6783 3.34261L9.54783 2.43826C9.1932 2.15456 8.75258 2 8.29844 2H5Z"
        fill="currentColor"
      />
      <path d="M22 10H2V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V10Z" fill="currentColor" />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFolder',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'folder'} {...props}>
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
