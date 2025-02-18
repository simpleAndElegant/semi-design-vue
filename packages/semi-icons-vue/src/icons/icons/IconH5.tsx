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
        d="M3.5 2.5C4.32843 2.5 5 3.17157 5 4V10.5H11V4C11 3.17157 11.6716 2.5 12.5 2.5C13.3284 2.5 14 3.17157 14 4V20C14 20.8284 13.3284 21.5 12.5 21.5C11.6716 21.5 11 20.8284 11 20V13.5H5V20C5 20.8284 4.32843 21.5 3.5 21.5C2.67157 21.5 2 20.8284 2 20V4C2 3.17157 2.67157 2.5 3.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M15.1592 19.0586C15.1592 20.2412 16.7588 21.2051 18.6797 21.2051C21.1338 21.2051 22.665 19.8721 22.665 17.7324C22.665 15.873 21.4482 14.6562 19.6025 14.6562C18.7891 14.6562 18.0781 14.9092 17.7363 15.3193H17.5928L17.6885 13.8838H20.9766C21.7832 13.8838 22.2207 13.4941 22.2207 12.79C22.2207 12.0791 21.7764 11.6689 20.9766 11.6689H17.0596C16.0547 11.6689 15.5146 12.1064 15.46 12.9678L15.2754 16.0029C15.2275 16.7822 15.8906 17.3496 16.7314 17.3496C17.0322 17.3496 17.333 17.2676 17.5791 17.1172C18.0029 16.8574 18.4404 16.707 18.7959 16.707C19.4727 16.707 19.9648 17.1377 19.9648 17.8008C19.9648 18.498 19.4453 18.9561 18.7412 18.9561C18.2354 18.9561 17.8184 18.7441 17.292 18.252C16.9844 17.9648 16.6768 17.8486 16.2939 17.8486C15.5898 17.8486 15.1592 18.4092 15.1592 19.0586Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH5',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h5'} {...props}>
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
