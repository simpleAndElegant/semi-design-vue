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
        d="M1 6H3V18H1V20H4C4.55228 20 5 19.5523 5 19V5C5 4.44772 4.55228 4 4 4H1V6ZM7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V5ZM9 6V18H15V6H9ZM19 5C19 4.44772 19.4477 4 20 4H23V6H21V18H23V20H20C19.4477 20 19 19.5523 19 19V5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCarouselStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'carousel_stroked'} {...props}>
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
