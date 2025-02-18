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
        d="M3 4.12781L12.0013 2.5L21 4.12781V9.51683C21 15.1811 17.3751 20.2095 12.0013 22C6.62604 20.2095 3 15.18 3 9.51434V4.12781Z"
        stroke="currentColor"
        stroke-width={2}
        stroke-linejoin="round"
      />
      <path
        d="M11.9749 7.47485V15.4749"
        stroke="currentColor"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.97485 11.4749H15.9749"
        stroke="currentColor"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconShieldStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'shield_stroked'} {...props}>
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
