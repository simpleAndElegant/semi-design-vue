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
        d="M7.41549 2.17229C7.80602 1.78176 8.43918 1.78176 8.82971 2.17229L18.264 11.6066C18.6545 11.9971 18.6545 12.6303 18.264 13.0208C18.2565 13.0282 18.249 13.0356 18.2413 13.0427L11.5462 19.7379C10.5699 20.7142 8.98698 20.7142 8.01067 19.7379L2.35382 14.081C1.3775 13.1047 1.3775 11.5218 2.35382 10.5455L8.36415 4.53516L7.41549 3.5865C7.02497 3.19598 7.02497 2.56281 7.41549 2.17229ZM9.77836 5.94937L16.1423 12.3133L13.9558 14.4998H5.60107L3.76803 12.6668C3.57277 12.4715 3.57277 12.155 3.76803 11.9597L9.77836 5.94937ZM21 18.9998C21 20.1043 20.3285 20.9998 19.5 20.9998C18.6716 20.9998 18 20.1044 18 18.9998C18 17.9207 18.6615 16.5108 19.106 15.6854C19.2801 15.3618 19.7199 15.3618 19.8941 15.6854C20.3386 16.5108 21 17.9207 21 18.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconFillStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'fill_stroked'} {...props}>
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
