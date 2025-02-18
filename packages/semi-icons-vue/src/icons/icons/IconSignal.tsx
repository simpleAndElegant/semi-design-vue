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
        d="M20 3C19.1716 3 18.5 3.67157 18.5 4.5V20.5C18.5 21.3284 19.1716 22 20 22C20.8284 22 21.5 21.3284 21.5 20.5V4.5C21.5 3.67157 20.8284 3 20 3ZM13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5V20.5C16 21.3284 15.3284 22 14.5 22C13.6716 22 13 21.3284 13 20.5V8.5ZM9 11C8.17157 11 7.5 11.6716 7.5 12.5V20.5C7.5 21.3284 8.17157 22 9 22C9.82843 22 10.5 21.3284 10.5 20.5V12.5C10.5 11.6716 9.82843 11 9 11ZM3.5 15C2.67157 15 2 15.6716 2 16.5V20.5C2 21.3284 2.67157 22 3.5 22C4.32843 22 5 21.3284 5 20.5V16.5C5 15.6716 4.32843 15 3.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSignal',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'signal'} {...props}>
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
