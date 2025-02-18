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
        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H8C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20H4V4L20 4V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V4C22 2.89543 21.1046 2 20 2H4ZM9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12ZM11 17H12V21H13V17H14V21V21.5C14 21.7761 13.7761 22 13.5 22H11.5C11.2239 22 11 21.7761 11 21.5V21V17ZM20 17H19V21.5C19 21.7761 19.2239 22 19.5 22H20H22V21H20V17ZM15.5 17C15.2239 17 15 17.2239 15 17.5V22H16V20H16.1678L17 22H18L17.2269 20H17.5C17.7761 20 18 19.7761 18 19.5V17.5C18 17.2239 17.7761 17 17.5 17H17H16H15.5ZM17 18H16V19H17V18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVideoUrlStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'video_url_stroked'} {...props}>
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
