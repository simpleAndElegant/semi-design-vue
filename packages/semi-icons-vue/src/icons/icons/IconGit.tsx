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
        d="M22.5846 11.0188L12.9793 1.41426C12.426 0.861912 11.5293 0.861912 10.9738 1.41426L8.98365 3.40691L11.5128 5.93761C12.1036 5.74065 12.7769 5.87269 13.2445 6.34142C13.7175 6.81455 13.8473 7.49564 13.646 8.0832L16.0817 10.5226C16.6736 10.3179 17.3534 10.451 17.8232 10.9209C18.4844 11.5811 18.4844 12.6473 17.8232 13.3074C17.1642 13.9676 16.1004 13.9676 15.4403 13.3074C14.9464 12.8123 14.822 12.0828 15.0696 11.4787L12.7879 9.20881V15.1912C12.9485 15.2693 13.1025 15.3771 13.2357 15.5102C13.8902 16.1715 13.8902 17.2355 13.2357 17.8935C12.5767 18.5548 11.504 18.5548 10.844 17.8935C10.185 17.2344 10.185 16.1715 10.844 15.5124C11.0112 15.3474 11.1982 15.222 11.3984 15.1394V9.09878C11.1993 9.01515 11.0101 8.89412 10.8484 8.73128C10.3489 8.23174 10.229 7.50114 10.4853 6.88937L7.99903 4.39058L1.41255 10.9726C0.862484 11.5271 0.862484 12.425 1.41255 12.9795L11.0178 22.5841C11.5712 23.1386 12.4678 23.1386 13.0211 22.5841L22.5813 13.0236C23.139 12.4723 23.139 11.5734 22.5846 11.0188Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGit',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'git'} {...props}>
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
