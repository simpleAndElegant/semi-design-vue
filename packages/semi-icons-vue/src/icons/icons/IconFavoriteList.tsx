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
        d="M13.248 1.90398C12.854 0.699977 11.145 0.699977 10.753 1.90398L8.76003 8.01998H2.31403C1.04403 8.01998 0.515034 9.64198 1.54403 10.387L6.75803 14.167L4.76603 20.282C4.37403 21.488 5.75603 22.49 6.78503 21.745L12 17.964V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4805 12.1053 12.7348 12 13 12H20.23L22.457 10.386C23.485 9.64098 22.957 8.01898 21.686 8.01898H15.239L13.247 1.90398H13.248Z"
        fill="currentColor"
      />
      <path
        d="M14 14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14H22.5C22.6326 14 22.7598 14.0527 22.8536 14.1464C22.9473 14.2402 23 14.3674 23 14.5V16.5C23 16.6326 22.9473 16.7598 22.8536 16.8536C22.7598 16.9473 22.6326 17 22.5 17H14.5C14.3674 17 14.2402 16.9473 14.1464 16.8536C14.0527 16.7598 14 16.6326 14 16.5V14.5ZM14 19.5C14 19.3674 14.0527 19.2402 14.1464 19.1464C14.2402 19.0527 14.3674 19 14.5 19H22.5C22.6326 19 22.7598 19.0527 22.8536 19.1464C22.9473 19.2402 23 19.3674 23 19.5V21.5C23 21.6326 22.9473 21.7598 22.8536 21.8536C22.7598 21.9473 22.6326 22 22.5 22H14.5C14.3674 22 14.2402 21.9473 14.1464 21.8536C14.0527 21.7598 14 21.6326 14 21.5V19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFavoriteList',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'favorite_list'} {...props}>
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
