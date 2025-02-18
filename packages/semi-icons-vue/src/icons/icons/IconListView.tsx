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
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V5C22 6.10457 21.1046 7 20 7H4C2.89543 7 2 6.10457 2 5V4Z"
        fill="currentColor"
      />
      <path
        d="M2 11.5C2 10.3954 2.89543 9.5 4 9.5H20C21.1046 9.5 22 10.3954 22 11.5V12.5C22 13.6046 21.1046 14.5 20 14.5H4C2.89543 14.5 2 13.6046 2 12.5V11.5Z"
        fill="currentColor"
      />
      <path
        d="M2 19C2 17.8954 2.89543 17 4 17H20C21.1046 17 22 17.8954 22 19V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V19Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconListView',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'list_view'} {...props}>
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
