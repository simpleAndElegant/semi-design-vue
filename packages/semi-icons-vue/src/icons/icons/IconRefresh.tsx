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
        d="M4.49993 11.9998C4.49993 7.85775 7.85775 4.49993 11.9998 4.49993C14.6403 4.49993 16.9645 5.86506 18.3012 7.9305L16.2939 7.52902C15.4815 7.36656 14.6913 7.89337 14.5288 8.7057C14.3664 9.51803 14.8932 10.3083 15.7055 10.4707L20.7055 11.4707C21.4643 11.6225 22.214 11.1721 22.4363 10.4309L23.9363 5.43095C24.1744 4.63747 23.7241 3.80126 22.9307 3.56321C22.1372 3.32517 21.301 3.77543 21.0629 4.56891L20.6287 6.01635C18.7332 3.28781 15.5765 1.49998 11.9998 1.49998C6.20092 1.49998 1.49998 6.20092 1.49998 11.9998C1.49998 17.7987 6.20092 22.4997 11.9998 22.4997C16.5739 22.4997 20.4611 19.5757 21.9018 15.4996C22.1779 14.7186 21.7685 13.8616 20.9874 13.5855C20.2064 13.3095 19.3494 13.7189 19.0733 14.4999C18.0431 17.4149 15.263 19.4997 11.9998 19.4997C7.85775 19.4997 4.49993 16.1419 4.49993 11.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRefresh',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'refresh'} {...props}>
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
