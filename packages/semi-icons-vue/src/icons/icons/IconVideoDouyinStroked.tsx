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
        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H12C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20H4V4L20 4V11C20 11.5523 20.4477 12 21 12C21.5523 12 22 11.5523 22 11V4C22 2.89543 21.1046 2 20 2H4ZM9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12ZM19.9813 14H18.6228V14.0206V16.5984L18.6228 19.4031H18.622C18.6003 20.0104 18.1021 20.4961 17.4906 20.4961C16.8654 20.4961 16.3585 19.9883 16.3585 19.3618C16.3585 18.7354 16.8654 18.2276 17.4906 18.2276C17.6204 18.2276 17.7451 18.2495 17.8612 18.2897V16.8939C17.7403 16.8759 17.6166 16.8665 17.4906 16.8665C16.1151 16.8665 15 17.9837 15 19.3618C15 20.74 16.1151 21.8571 17.4906 21.8571C18.8662 21.8571 19.9813 20.74 19.9813 19.3618H19.9813V16.6699C20.5147 17.0533 21.1685 17.279 21.875 17.279V15.9179C20.8291 15.9179 19.9813 15.0685 19.9813 14.0206V14Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVideoDouyinStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'video_douyin_stroked'} {...props}>
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
