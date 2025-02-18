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
        d="M14.2071 2.20711C14.5976 1.81658 14.5976 1.18342 14.2071 0.792893C13.8166 0.402369 13.1834 0.402369 12.7929 0.792893L10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L12.7929 7.20711C13.1834 7.59763 13.8166 7.59763 14.2071 7.20711C14.5976 6.81658 14.5976 6.18342 14.2071 5.79289L13.4142 5H16C18.7614 5 21 7.23858 21 10V12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12V10C23 6.13401 19.866 3 16 3H13.4142L14.2071 2.20711Z"
        fill="currentColor"
      />
      <path
        d="M3 10C3 8.89543 3.89543 8 5 8H17C18.1046 8 19 8.89543 19 10V20C19 21.1046 18.1046 22 17 22H5C3.89543 22 3 21.1046 3 20V10Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRotate',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'rotate'} {...props}>
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
