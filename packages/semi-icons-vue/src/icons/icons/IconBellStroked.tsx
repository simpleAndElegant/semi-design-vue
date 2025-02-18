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
        d="M10.0117 2.78197C10.1204 1.77997 10.9691 1 12 1C13.0324 1 13.8822 1.78233 13.9887 2.78652C16.886 3.64345 19.0001 6.32485 19.0001 9.5C19.0001 12.8517 19.717 15.0727 20.3945 16.4278C20.7344 17.1077 21.0682 17.577 21.3053 17.8668C21.4239 18.0118 21.5187 18.1122 21.5783 18.1718C21.608 18.2016 21.629 18.2212 21.6399 18.231L21.6477 18.238C21.9655 18.5081 22.0825 18.9476 21.9403 19.3404C21.797 19.7363 21.4211 20 21.0001 20H15.874C15.4299 21.7252 13.8638 23 12 23C10.1362 23 8.57006 21.7252 8.12602 20H3.00005C2.57903 20 2.20311 19.7363 2.05978 19.3404C1.91645 18.9446 2.03643 18.5013 2.35987 18.2318C3.40864 17.3578 4.07272 15.9871 4.47191 14.3626C4.86802 12.7507 4.97614 11.0013 5.00005 9.49191C5.00234 6.77052 6.15974 4.97279 7.66575 3.88847C8.41575 3.34847 9.23502 2.99644 10.0117 2.78197ZM12 21C11.2597 21 10.6134 20.5978 10.2676 20H13.7324C13.3866 20.5978 12.7403 21 12 21ZM18.9738 18H16H8H5.15C5.74917 17.025 6.14652 15.9289 6.41413 14.8399C6.86465 13.0065 6.97547 11.0769 6.99993 9.51567L7.00005 9.5C7.00005 7.42592 7.84185 6.22614 8.83436 5.51153C9.87785 4.76022 11.1601 4.5 12.0001 4.5C14.7615 4.5 17.0001 6.73858 17.0001 9.5C17.0001 13.1483 17.7831 15.6773 18.6056 17.3222C18.7287 17.5683 18.8523 17.7939 18.9738 18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBellStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'bell_stroked'} {...props}>
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
