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
        d="M3 4C2.44772 4 2 3.55229 2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4L3 4ZM6 16C5.44772 16 5 15.5523 5 15L5 7C5 6.44772 5.44771 6 6 6H10C10.5523 6 11 6.44772 11 7V15C11 15.5523 10.5523 16 10 16H6ZM7 14H9L9 8H7L7 14ZM13 20C13 20.5523 13.4477 21 14 21H18C18.5523 21 19 20.5523 19 20V7C19 6.44771 18.5523 6 18 6L14 6C13.4477 6 13 6.44771 13 7L13 20ZM17 19H15L15 8H17V19Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconAlignVTopStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'align_v_top_stroked'} {...props}>
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
