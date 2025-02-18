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
        d="M19.4961 4.86825C19.9757 4.59424 20.1423 3.98338 19.8682 3.50386C19.5942 3.02435 18.9834 2.85775 18.5039 3.13176L11.7596 6.9856L5.5241 3.14834C5.05374 2.85889 4.4378 3.00555 4.14834 3.47591C3.85889 3.94626 4.00555 4.56221 4.47591 4.85166L7.96696 7H3.94737C2.89085 7 2 7.84465 2 8.92857V20.0714C2 21.1553 2.89085 22 3.94737 22H20.0526C21.1091 22 22 21.1553 22 20.0714V8.92857C22 7.84465 21.1091 7 20.0526 7H15.7656L19.4961 4.86825ZM11.516 9C11.5047 9.00019 11.4934 9.00019 11.4821 9H4V20H20V9H12.0196C12.0071 9.00023 11.9947 9.00023 11.9823 9H11.516ZM16.2474 12.6644C16.6143 12.2516 16.5771 11.6195 16.1644 11.2526C15.7516 10.8857 15.1195 10.9228 14.7526 11.3356L11.4572 15.043L9.20711 12.7929C8.81658 12.4024 8.18342 12.4024 7.79289 12.7929C7.40237 13.1834 7.40237 13.8166 7.79289 14.2071L10.7929 17.2071C10.9876 17.4018 11.2541 17.5077 11.5294 17.4996C11.8047 17.4915 12.0644 17.3702 12.2474 17.1644L16.2474 12.6644Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTvCheckedStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'tv_checked_stroked'} {...props}>
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
