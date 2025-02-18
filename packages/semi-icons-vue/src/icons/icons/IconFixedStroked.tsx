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
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C9.59873 2 7.39514 2.84637 5.67127 4.25705L4.30672 2.8925C3.91619 2.50198 3.28303 2.50198 2.8925 2.8925C2.50198 3.28303 2.50198 3.91619 2.8925 4.30672L4.25705 5.67127C2.84637 7.39514 2 9.59873 2 12C2 14.4014 2.84645 16.6051 4.25727 18.329L2.89299 19.6933C2.50247 20.0838 2.50247 20.717 2.89299 21.1075C3.28352 21.498 3.91668 21.498 4.3072 21.1075L5.67154 19.7432C7.39537 21.1537 9.59885 22 12 22C14.4011 22 16.6046 21.1537 18.3285 19.7432L19.6928 21.1075C20.0833 21.498 20.7165 21.498 21.107 21.1075C21.4975 20.717 21.4975 20.0838 21.107 19.6933L19.7427 18.329C21.1535 16.6051 22 14.4014 22 12C22 9.59886 21.1537 7.39537 19.7432 5.67154L21.1075 4.3072C21.498 3.91668 21.498 3.28352 21.1075 2.89299C20.717 2.50247 20.0838 2.50247 19.6933 2.89299L18.329 4.25727C16.6051 2.84645 14.4014 2 12 2ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFixedStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'fixed_stroked'} {...props}>
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
