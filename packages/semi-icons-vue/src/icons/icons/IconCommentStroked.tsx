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
        d="M4 17.9007L4.94224 17.1649C4.96133 17.15 4.98059 17.1353 5 17.1209C5.5167 16.7372 6.14375 16.5294 6.78863 16.5294H20V5H4V17.9007ZM21 3H3C2.44772 3 2 3.44772 2 4V19.9503C2 20.7834 2.95889 21.2512 3.61546 20.7385L6.17317 18.7412C6.34896 18.604 6.56559 18.5294 6.78863 18.5294H21C21.5523 18.5294 22 18.0817 22 17.5294V4C22 3.44772 21.5523 3 21 3ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H8ZM7 13C7 12.4477 7.44772 12 8 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H8C7.44772 14 7 13.5523 7 13Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCommentStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'comment_stroked'} {...props}>
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
