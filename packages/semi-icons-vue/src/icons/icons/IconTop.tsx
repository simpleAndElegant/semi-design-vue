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
        d="M3.99998 2C3.4477 2 2.99998 2.44772 2.99998 3V5C2.99998 5.55228 3.4477 6 3.99998 6H10.1818L2.76029 14.1637C2.4683 14.4848 2.69619 15 3.13026 15H7.99998V21C7.99998 21.5523 8.4477 22 8.99998 22H15C15.5523 22 16 21.5523 16 21V15H20.8697C21.3038 15 21.5317 14.4848 21.2397 14.1637L13.8182 6H20C20.5523 6 21 5.55228 21 5V3C21 2.44772 20.5523 2 20 2H3.99998Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTop',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'top'} {...props}>
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
