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
        d="M1.8535 11.1464L11.6464 1.35354C11.8417 1.15828 12.1582 1.15828 12.3535 1.35354L22.1464 11.1464C22.4614 11.4614 22.2383 12 21.7928 12H15.9999V21C15.9999 21.5523 15.5522 22 14.9999 22H8.99995C8.44767 22 7.99995 21.5523 7.99995 21V12H2.20706C1.7616 12 1.53852 11.4614 1.8535 11.1464Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFilledArrowUp',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'filled_arrow_up'} {...props}>
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
