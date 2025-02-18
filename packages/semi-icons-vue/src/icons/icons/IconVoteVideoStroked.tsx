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
        d="M8.6 2.2C8.15817 1.86863 7.53137 1.95817 7.2 2.4C6.86863 2.84183 6.95817 3.46863 7.4 3.8L9 5H6.5C5.67157 5 5 5.67157 5 6.5V15.5C5 16.3284 5.67157 17 6.5 17H17.5C18.3284 17 19 16.3284 19 15.5V6.5C19 5.67157 18.3284 5 17.5 5H15L16.6 3.8C17.0418 3.46863 17.1314 2.84183 16.8 2.4C16.4686 1.95817 15.8418 1.86863 15.4 2.2L12 4.75L8.6 2.2ZM7 15V7H17V15H7ZM5.5 19C5.22386 19 5 19.2239 5 19.5V20.5C5 20.7761 5.22386 21 5.5 21H18.5C18.7761 21 19 20.7761 19 20.5V19.5C19 19.2239 18.7761 19 18.5 19H5.5ZM1 15C1 14.4477 1.44772 14 2 14H3.5C3.77614 14 4 14.2239 4 14.5V15.5C4 15.7761 3.77614 16 3.5 16H3V20.5C3 20.7761 2.77614 21 2.5 21H1.5C1.22386 21 1 20.7761 1 20.5V15ZM20.5 16H21V20.5C21 20.7761 21.2239 21 21.5 21H22.5C22.7761 21 23 20.7761 23 20.5V15C23 14.4477 22.5523 14 22 14H20.5C20.2239 14 20 14.2239 20 14.5V15.5C20 15.7761 20.2239 16 20.5 16ZM15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071L8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929L11 11.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVoteVideoStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'vote_video_stroked'} {...props}>
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
