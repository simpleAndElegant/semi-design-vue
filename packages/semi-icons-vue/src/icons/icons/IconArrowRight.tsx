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
        d="M1 12C1 11.1716 1.67157 10.5 2.5 10.5L17.8787 10.5L11.4393 4.06066C10.8536 3.47487 10.8536 2.52513 11.4393 1.93934C12.0251 1.35355 12.9749 1.35355 13.5607 1.93934L22.5607 10.9393C23.1464 11.5251 23.1464 12.4749 22.5607 13.0607L13.5607 22.0607C12.9749 22.6464 12.0251 22.6464 11.4393 22.0607C10.8536 21.4749 10.8536 20.5251 11.4393 19.9393L17.8787 13.5L2.5 13.5C1.67157 13.5 1 12.8284 1 12Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconArrowRight',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'arrow_right'} {...props}>
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
