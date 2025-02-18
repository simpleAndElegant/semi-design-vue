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
        d="M11.4332 2.09871C11.7797 2.26523 12 2.6156 12 3.00001V21C12 21.3844 11.7797 21.7348 11.4332 21.9013C11.0867 22.0678 10.6755 22.021 10.3753 21.7809L4.64922 17H2C1.44772 17 1 16.5523 1 16V8.00001C1 7.44772 1.44772 7.00001 2 7.00001H4.64922L10.3753 2.21914C10.6755 1.979 11.0867 1.93219 11.4332 2.09871ZM13.9502 8.42864C14.5418 7.84882 15.4915 7.85845 16.0714 8.45015C16.9536 9.35043 17.5 10.5876 17.5 11.9495C17.5 13.3113 16.9536 14.5486 16.0714 15.4488C15.4915 16.0405 14.5418 16.0502 13.9502 15.4703C13.3585 14.8905 13.3488 13.9408 13.9286 13.3491C14.2836 12.9869 14.5 12.495 14.5 11.9495C14.5 11.404 14.2836 10.9121 13.9286 10.5499C13.3488 9.95815 13.3585 9.00846 13.9502 8.42864ZM18.8448 4.14518C18.1602 3.67861 17.2271 3.85533 16.7605 4.53988C16.2939 5.22443 16.4707 6.1576 17.1552 6.62416C18.8756 7.79668 20 9.76724 20 12C20 14.2327 18.8756 16.2033 17.1552 17.3758C16.4707 17.8424 16.2939 18.7755 16.7605 19.4601C17.2271 20.1446 18.1602 20.3214 18.8448 19.8548C21.35 18.1474 23 15.2666 23 12C23 8.73338 21.35 5.8526 18.8448 4.14518Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVolume2',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'volume_2'} {...props}>
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
