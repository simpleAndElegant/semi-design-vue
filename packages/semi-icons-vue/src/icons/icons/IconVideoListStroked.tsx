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
        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H11C11.5523 22 12 21.5523 12 21C12 20.4477 11.5523 20 11 20H4V4L20 4V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V4C22 2.89543 21.1046 2 20 2H4ZM9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12ZM14.5 17C14.2239 17 14 17.2239 14 17.5V18.5C14 18.7761 14.2239 19 14.5 19H15.5C15.7761 19 16 18.7761 16 18.5V17.5C16 17.2239 15.7761 17 15.5 17H14.5ZM14.5 20C14.2239 20 14 20.2239 14 20.5V21.5C14 21.7761 14.2239 22 14.5 22H15.5C15.7761 22 16 21.7761 16 21.5V20.5C16 20.2239 15.7761 20 15.5 20H14.5ZM17 17.5C17 17.2239 17.2239 17 17.5 17H21.5C21.7761 17 22 17.2239 22 17.5V18.5C22 18.7761 21.7761 19 21.5 19H17.5C17.2239 19 17 18.7761 17 18.5V17.5ZM17.5 20C17.2239 20 17 20.2239 17 20.5V21.5C17 21.7761 17.2239 22 17.5 22H21.5C21.7761 22 22 21.7761 22 21.5V20.5C22 20.2239 21.7761 20 21.5 20H17.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVideoListStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'video_list_stroked'} {...props}>
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
