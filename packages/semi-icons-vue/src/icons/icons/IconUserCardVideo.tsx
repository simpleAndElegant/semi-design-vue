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
        d="M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H14C15.1046 20 16 19.1046 16 18V6C16 4.89543 15.1046 4 14 4H3ZM7.9823 8H4.9823V11H7.9823V8Z"
        fill="currentColor"
      />
      <path
        d="M21.5526 6.72418C22.2176 6.39151 23.0001 6.875 23.0001 7.6185V16.3815C23.0001 17.125 22.2176 17.6085 21.5526 17.2758L17.5565 15.2765C17.2178 15.107 17.0039 14.7608 17.0039 14.3821V12V9.61786C17.0039 9.23918 17.2178 8.89298 17.5565 8.72354L21.5526 6.72418Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserCardVideo',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_card_video'} {...props}>
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
