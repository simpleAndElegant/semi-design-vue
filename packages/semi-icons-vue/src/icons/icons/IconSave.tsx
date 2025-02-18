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
        d="M2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V8.41421C22 8.149 21.8946 7.89464 21.7071 7.70711L16.2929 2.29289C16.1054 2.10536 15.851 2 15.5858 2H4C2.89543 2 2 2.89543 2 4ZM10 4V7H12V4H14C14.5523 4 15 4.44772 15 5V8C15 8.55228 14.5523 9 14 9H7C6.44772 9 6 8.55228 6 8V5C6 4.44772 6.44772 4 7 4H10ZM7 19C6.44772 19 6 18.5523 6 18V14C6 13.4477 6.44771 13 7 13H17C17.5523 13 18 13.4477 18 14V18C18 18.5523 17.5523 19 17 19H7Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSave',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'save'} {...props}>
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
