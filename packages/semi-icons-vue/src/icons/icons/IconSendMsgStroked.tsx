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
        d="M1 4C1 2.89543 1.89543 2 3 2H21C22.1046 2 23 2.89543 23 4V17C23 18.1046 22.1046 19 21 19H11.777L7.0145 21.8575C6.70556 22.0429 6.32081 22.0477 6.0073 21.8702C5.69379 21.6927 5.5 21.3603 5.5 21V19H3C1.89543 19 1 18.1046 1 17V4ZM21 4H3V17H6C6.82843 17 7.5 17.6716 7.5 18.5V19.2338L10.748 17.285C11.0588 17.0985 11.4145 17 11.777 17H21V4ZM13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289L17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929L14.5858 12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H14.5858L13.2929 8.70711C12.9024 8.31658 12.9024 7.68342 13.2929 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSendMsgStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'send_msg_stroked'} {...props}>
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
