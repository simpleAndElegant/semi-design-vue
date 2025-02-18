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
        d="M11.2071 11.2071C10.8166 11.5976 10.1834 11.5976 9.79289 11.2071L4 5.41421L4 9C4 9.55229 3.55229 10 3 10C2.44772 10 2 9.55229 2 9V3.0007V3L2 2.997C2.0008 2.72537 2.1099 2.47921 2.28639 2.29945L2.29945 2.2864C2.39379 2.19374 2.50195 2.12357 2.61722 2.07588C2.73425 2.02735 2.8625 2.0004 2.997 2.00001L3 2H3.0007H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4L5.41421 4L11.2071 9.79289C11.5976 10.1834 11.5976 10.8166 11.2071 11.2071ZM12.7929 12.7929C13.1834 12.4024 13.8166 12.4024 14.2071 12.7929L20 18.5858V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15L22 20.9993V21L22 21.003C21.9992 21.2746 21.8901 21.5208 21.7136 21.7005L21.7005 21.7136C21.6062 21.8063 21.498 21.8764 21.3828 21.9241C21.2657 21.9727 21.1375 21.9996 21.003 22L21 22H20.9993H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H18.5858L12.7929 14.2071C12.4024 13.8166 12.4024 13.1834 12.7929 12.7929Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFullScreenStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'full_screen_stroked'} {...props}>
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
