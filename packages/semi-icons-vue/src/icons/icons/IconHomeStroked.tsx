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
        d="M11.3861 2.21065C11.7472 1.92978 12.2528 1.92978 12.6139 2.21065L21.6139 9.21065C21.8575 9.4001 22 9.69141 22 10V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V14H10V21C10 21.5523 9.55228 22 9 22H3C2.44772 22 2 21.5523 2 21V10C2 9.69141 2.14247 9.4001 2.38606 9.21065L11.3861 2.21065ZM4 10.4891V20H8V13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13V20H20V10.4891L12 4.26686L4 10.4891Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHomeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'home_stroked'} {...props}>
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
