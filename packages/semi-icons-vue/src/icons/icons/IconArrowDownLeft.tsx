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
        d="M19 19.5C19 20.3284 18.3284 21 17.5 21L4.5 21C3.67157 21 3 20.3284 3 19.5V6.5C3 5.67157 3.67157 5 4.5 5C5.32843 5 6 5.67157 6 6.5V15.8787L19.4393 2.43936C20.0251 1.85357 20.9749 1.85357 21.5607 2.43936C22.1465 3.02514 22.1465 3.97489 21.5607 4.56068L8.12132 18L17.5 18C18.3284 18 19 18.6716 19 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconArrowDownLeft',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'arrow_down_left'} {...props}>
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
