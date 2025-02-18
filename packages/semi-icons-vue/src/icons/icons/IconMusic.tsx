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
        d="M8.29409 2.39818C7.65103 2.20032 7 2.68115 7 3.35396V11.3368C6.54537 11.1208 6.0368 11 5.5 11C3.567 11 2 12.567 2 14.5C2 16.433 3.567 18 5.5 18C7.433 18 9 16.433 9 14.5V5L18 7.76923V15.3368C17.5454 15.1208 17.0368 15 16.5 15C14.567 15 13 16.567 13 18.5C13 20.433 14.567 22 16.5 22C18.433 22 20 20.433 20 18.5V6.73858C20 6.29957 19.7137 5.9119 19.2941 5.7828L8.29409 2.39818Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMusic',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'music'} {...props}>
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
