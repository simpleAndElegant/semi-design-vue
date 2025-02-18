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
        d="M7.49995 5C8.13071 5 8.69408 5.3946 8.90964 5.98739L12.9096 16.9874C13.1927 17.7659 12.7911 18.6266 12.0126 18.9097C11.234 19.1928 10.3734 18.7912 10.0903 18.0126L9.54022 16.5H5.45968L4.90964 18.0126C4.62653 18.7912 3.76588 19.1928 2.98733 18.9097C2.20878 18.6266 1.80715 17.7659 2.09026 16.9874L6.09026 5.98739C6.30582 5.3946 6.86919 5 7.49995 5ZM6.55059 13.5H8.44931L7.49995 10.8893L6.55059 13.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.99991 3C1.99991 2.44772 2.44762 2 2.99991 2H20.9999C21.5522 2 21.9999 2.44772 21.9999 3C21.9999 3.55228 21.5522 4 20.9999 4H2.99991C2.44762 4 1.99991 3.55228 1.99991 3Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.98731 21C1.98731 20.4477 2.43502 20 2.98731 20H20.9999C21.5522 20 21.9999 20.4477 21.9999 21C21.9999 21.5523 21.5522 22 20.9999 22H2.98731C2.43502 22 1.98731 21.5523 1.98731 21Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4999 5C16.3283 5 16.9999 5.67157 16.9999 6.5V10C18.2261 10 19.4566 10.3372 20.4137 11.1053C21.4065 11.9022 21.9999 13.0847 21.9999 14.5C21.9999 15.9153 21.4065 17.0978 20.4137 17.8947C19.4566 18.6628 18.2261 19 16.9999 19L14.9999 19C14.4476 19 13.9999 18.5523 13.9999 18V6.5C13.9999 5.67157 14.6714 5 15.4999 5ZM16.9999 13V16C17.7067 16 18.2261 15.8036 18.5358 15.555C18.8098 15.3352 18.9999 15.0177 18.9999 14.5C18.9999 13.9823 18.8098 13.6648 18.5358 13.4449C18.2261 13.1963 17.7066 13 16.9999 13Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconWholeWord',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'whole_word'} {...props}>
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
