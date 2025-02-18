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
        d="M11.079 0.815972C11.6207 0.394676 12.3792 0.394676 12.9209 0.815972L17.4209 4.31597C18.0748 4.82458 18.1926 5.76699 17.684 6.42091C17.1754 7.07483 16.233 7.19263 15.579 6.68403L13.5 5.067V7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5V5.06692L8.42086 6.68403C7.76694 7.19263 6.82452 7.07483 6.31592 6.42091C5.80731 5.76699 5.92512 4.82458 6.57904 4.31597L11.079 0.815972Z"
        fill="currentColor"
      />
      <path
        d="M2 11C2 9.34315 3.34315 8 5 8H10.5V14.5C10.5 15.3284 11.1716 16 12 16C12.8284 16 13.5 15.3284 13.5 14.5V8H19C20.6569 8 22 9.34315 22 11V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V11Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconExport',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'export'} {...props}>
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
