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
        d="M10.136 1.87866L1.87866 10.136C0.707092 11.3076 0.707092 13.2071 1.87866 14.3787L10.136 22.636C11.3076 23.8076 13.2071 23.8076 14.3787 22.636L22.636 14.3787C23.8076 13.2071 23.8076 11.3076 22.636 10.136L14.3787 1.87866C13.2071 0.707092 11.3076 0.707092 10.136 1.87866ZM14.9644 7.55026C14.5739 7.15973 13.9408 7.15973 13.5503 7.55026C13.1597 7.94077 13.1597 8.57394 13.5503 8.96445L14.8431 10.2574H9.25735C8.70508 10.2574 8.25735 10.7051 8.25735 11.2574V16.2574C8.25735 16.8096 8.70508 17.2574 9.25735 17.2574C9.80963 17.2574 10.2574 16.8096 10.2574 16.2574V12.2574H14.8431L13.5503 13.5503C13.1597 13.9408 13.1597 14.5739 13.5503 14.9644C13.9408 15.355 14.5739 15.355 14.9644 14.9644L17.9644 11.9644C18.355 11.5739 18.355 10.9408 17.9644 10.5503L14.9644 7.55026Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRoute',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'route'} {...props}>
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
