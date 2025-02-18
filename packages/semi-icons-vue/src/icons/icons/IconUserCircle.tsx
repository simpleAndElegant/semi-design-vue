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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM15.3469 11.7076C14.6592 13.4683 13.4074 14.647 12.0008 14.647C10.5943 14.647 9.34269 13.4686 8.65493 11.7083C8.22687 11.5341 7.81934 11.0027 7.63341 10.3088C7.39178 9.40709 7.43996 8.602 8.09949 8.35233C8.16349 5.21438 9.40188 4 12.0008 4C14.5998 4 15.8382 5.21454 15.9021 8.35297C16.5601 8.60332 16.608 9.40784 16.3666 10.3089C16.1809 11.0018 15.7743 11.5325 15.3469 11.7076ZM18.0938 17.3893C18.6054 17.6784 18.6504 18.368 18.1996 18.7451C16.6268 20.061 14.5418 21 12 21C9.45822 21 7.37322 20.061 5.80035 18.7451C5.34962 18.368 5.39456 17.6784 5.90621 17.3893C7.62317 16.4192 9.92518 16 12 16C14.0748 16 16.3768 16.4192 18.0938 17.3893Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserCircle',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_circle'} {...props}>
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
