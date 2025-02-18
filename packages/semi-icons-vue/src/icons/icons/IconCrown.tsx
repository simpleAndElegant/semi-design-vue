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
        d="M0.830911 7.65904C0.591258 6.89214 1.50509 6.29012 2.11513 6.81301L3.96861 8.40171C5.48542 9.70184 7.82541 9.18404 8.65209 7.36535L11.0896 2.00282C11.4449 1.22123 12.5551 1.22123 12.9103 2.00282L15.3478 7.36535C16.1745 9.18404 18.5145 9.70184 20.0313 8.40171L21.8848 6.81301C22.4948 6.29012 23.4087 6.89215 23.169 7.65904L19.4385 20.5966C19.1776 21.4315 18.4044 22 17.5296 22H6.47035C5.59558 22 4.82231 21.4315 4.56139 20.5966L0.830911 7.65904Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCrown',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'crown'} {...props}>
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
