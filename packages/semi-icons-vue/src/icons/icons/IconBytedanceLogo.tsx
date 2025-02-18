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
        d="M18.605 3L22 3.86879V19.5071L18.605 20.5V3ZM2 3.99291L5.33333 4.79964V18.7004L2 19.6312V3.99291ZM7.49384 10.9433L10.8272 11.8741V19.1347L7.49384 20.0656V10.9433ZM16.4444 8.70922L13.1728 9.51595V16.8386L16.4444 17.8316V8.70922Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBytedanceLogo',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'bytedance_logo'} {...props}>
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
