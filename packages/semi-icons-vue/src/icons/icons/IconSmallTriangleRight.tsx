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
        d="M9 17.0657V6.93425C9 6.5349 9.44507 6.29671 9.77735 6.51823L17.376 11.584C17.6728 11.7819 17.6728 12.2181 17.376 12.416L9.77735 17.4818C9.44507 17.7033 9 17.4651 9 17.0657Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSmallTriangleRight',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'small_triangle_right'} {...props}>
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
