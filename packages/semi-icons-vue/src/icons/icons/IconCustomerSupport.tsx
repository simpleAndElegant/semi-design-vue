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
        d="M6.0824 8.00335C6.5571 5.16399 9.02583 3 12 3C14.9742 3 17.4429 5.16399 17.9176 8.00335C17.4039 8.04525 17 8.47546 17 9V16C17 16.5523 17.4477 17 18 17H18.5322C17.8461 18.3807 16.4717 19.359 14.8579 19.486C14.6831 19.1948 14.3643 19 14 19H10C9.44772 19 9 19.4477 9 20V21C9 21.5523 9.44772 22 10 22H14C14.3744 22 14.7008 21.7942 14.8722 21.4895C17.6318 21.3337 19.9311 19.4565 20.7134 16.9147C22.0259 16.5945 23 15.411 23 14V11C23 9.34315 21.6569 8 20 8H19.9381C19.446 4.05369 16.0796 1 12 1C7.92038 1 4.55399 4.05369 4.06189 8H4C2.34315 8 1 9.34315 1 11V14C1 15.6569 2.34315 17 4 17H6C6.55228 17 7 16.5523 7 16V9C7 8.47546 6.59614 8.04525 6.0824 8.00335Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCustomerSupport',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'customer_support'} {...props}>
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
