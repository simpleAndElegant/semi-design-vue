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
        d="M2 6.00001L10.5542 1.29518C11.4545 0.800044 12.5455 0.800044 13.4458 1.29518L22 6.00001L12 11L2 6.00001Z"
        fill="currentColor"
      />
      <path d="M11 12.5L1 7.50001V16.1459C1 17.2822 1.64201 18.321 2.65836 18.8292L11 23V12.5Z" fill="currentColor" />
      <path
        d="M23 7.50001L13 12.5V23L21.3416 18.8292C22.358 18.321 23 17.2822 23 16.1459V7.50001Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBox',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'box'} {...props}>
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
