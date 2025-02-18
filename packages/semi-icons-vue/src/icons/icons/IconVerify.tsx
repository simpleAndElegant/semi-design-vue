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
        d="M1.41416 10.5858L3.49994 8.5V5.5C3.49994 4.39543 4.39537 3.5 5.49994 3.5H8.49994L10.5857 1.41422C11.3668 0.633168 12.6331 0.633168 13.4142 1.41422L15.4999 3.5H18.4999C19.6045 3.5 20.4999 4.39543 20.4999 5.5V8.5L22.5857 10.5858C23.3668 11.3668 23.3668 12.6332 22.5857 13.4142L20.4999 15.5V18.5C20.4999 19.6046 19.6045 20.5 18.4999 20.5H15.4999L13.4142 22.5858C12.6331 23.3668 11.3668 23.3668 10.5857 22.5858L8.49994 20.5H5.49994C4.39537 20.5 3.49994 19.6046 3.49994 18.5V15.5L1.41416 13.4142C0.633107 12.6332 0.633107 11.3668 1.41416 10.5858ZM7 13L10.2442 16.2442C10.6532 16.6532 11.3229 16.6309 11.7039 16.1956L17.1419 9.98071C17.6248 9.42884 17.5971 8.59707 17.0785 8.07854C16.4994 7.49936 15.5479 7.54252 15.0235 8.17176L11 13L9 11C8.44772 10.4477 7.55228 10.4477 7 11C6.44772 11.5523 6.44772 12.4477 7 13Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVerify',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'verify'} {...props}>
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
