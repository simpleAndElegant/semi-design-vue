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
        d="M11.422 2.09341L10.5881 1.70522L6.41967 9H3.2C2.53726 9 2 9.53726 2 10.2V20.8C2 21.4627 2.53726 22 3.2 22H8L17.6667 22C18.3152 22 18.8599 21.8762 19.2763 21.607C19.6472 21.3672 19.9326 20.99 19.9896 20.5433C20.324 19.192 20.815 17.1476 21.226 15.3057C21.4353 14.3679 21.6253 13.4759 21.7635 12.752C21.8936 12.0704 22 11.4313 22 11.069C22 10.3038 21.7093 9.69155 21.24 9.28292C20.8028 8.90221 20.2705 8.75 19.8333 8.75H13.3409C13.3904 8.39857 13.4561 8.00566 13.5273 7.59043L13.5564 7.42098C13.6871 6.66202 13.8333 5.81287 13.8333 5.25C13.8333 4.28245 13.2516 3.52694 12.7844 3.06764C12.2974 2.58876 11.7438 2.24319 11.422 2.09341ZM6 20V11H4V20H6ZM8 20H17.6667C17.8602 20 17.9903 19.9822 18.0726 19.9641C18.4036 18.6233 18.8771 16.6486 19.274 14.8701C19.4814 13.9407 19.6664 13.0715 19.799 12.3769C19.9397 11.6399 20 11.2031 20 11.069C20 10.9437 19.9777 10.8759 19.9644 10.8456C19.9514 10.8159 19.9379 10.801 19.9266 10.7912C19.9129 10.7793 19.8936 10.7677 19.8696 10.7592C19.8501 10.7523 19.8364 10.7506 19.833 10.7501C19.8324 10.7501 19.8321 10.75 19.8321 10.75L11.25 10.75V9.75C11.25 9.04443 11.4155 8.07195 11.556 7.25245L11.5592 7.23411L11.5592 7.23407C11.7124 6.34084 11.8333 5.63528 11.8333 5.25C11.8333 5.09254 11.7206 4.8265 11.3822 4.49378C11.3643 4.4761 11.3461 4.45873 11.3279 4.44168L8 10.2656V20Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconThumbUpStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'thumb_up_stroked'} {...props}>
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
