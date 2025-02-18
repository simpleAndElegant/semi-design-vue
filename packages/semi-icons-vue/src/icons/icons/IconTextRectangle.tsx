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
        d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7 6H17C17.5523 6 18 6.44772 18 7V9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9V8H13V16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H13H11H10C9.44772 18 9 17.5523 9 17C9 16.4477 9.44772 16 10 16H11V8H8V9C8 9.55228 7.55228 10 7 10C6.44772 10 6 9.55228 6 9V7C6 6.44772 6.44772 6 7 6Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTextRectangle',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'text_rectangle'} {...props}>
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
