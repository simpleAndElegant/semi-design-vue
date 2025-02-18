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
      <g opacity={0.99}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1284 3.17663L15.751 6.9292C15.4615 7.25096 15.6898 7.76368 16.1227 7.76368H18V16.4129H16.1227C15.6898 16.4129 15.4615 16.9256 15.751 17.2474L19.1284 20.9999C19.327 21.2206 19.673 21.2206 19.8717 20.9999L23.249 17.2474C23.5386 16.9256 23.3102 16.4129 22.8773 16.4129H21V7.76368H22.8773C23.3102 7.76368 23.5386 7.25096 23.249 6.9292L19.8717 3.17663C19.673 2.95594 19.327 2.95594 19.1284 3.17663ZM2.28571 3.99994C1.57563 3.99994 1 4.67152 1 5.49994C1 6.32837 1.57563 6.99994 2.28571 6.99994H13.7143C14.4244 6.99994 15 6.32837 15 5.49994C15 4.67152 14.4244 3.99994 13.7143 3.99994H2.28571ZM1 11.9999C1 11.1715 1.57563 10.4999 2.28571 10.4999H13.7143C14.4244 10.4999 15 11.1715 15 11.9999C15 12.8284 14.4244 13.4999 13.7143 13.4999H2.28571C1.57563 13.4999 1 12.8284 1 11.9999ZM1 18.4999C1 17.6715 1.57563 16.9999 2.28571 16.9999H13.7143C14.4244 16.9999 15 17.6715 15 18.4999C15 19.3284 14.4244 19.9999 13.7143 19.9999H2.28571C1.57563 19.9999 1 19.3284 1 18.4999Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconLineHeight',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'line_height'} {...props}>
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
