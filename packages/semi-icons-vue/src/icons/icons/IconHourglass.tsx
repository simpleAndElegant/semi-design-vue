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
        d="M6.00011 23H18.0001C19.1047 23 20.137 22.0961 20.0001 21C19.5618 17.491 17.8621 15.9436 16.6159 14.7226C15.7213 13.846 15.0001 13.1394 15.0001 12C15.0001 10.8606 15.7213 10.154 16.6159 9.27742C17.8621 8.05645 19.5618 6.50895 20.0001 3C20.137 1.90395 19.1047 1 18.0001 1H6.00011C4.89554 1 3.82632 1.90919 4.0001 3C4.46583 5.92325 6.0746 7.54669 7.27142 8.88296C8.21744 9.93921 9.00011 10.8131 9.00011 12C9.00011 13.1394 8.27889 13.846 7.38428 14.7226C6.13813 15.9436 4.43846 17.491 4.00012 21C3.8632 22.0961 4.89554 23 6.00011 23ZM15.0001 7C15.0001 7.81686 14.2587 8.48544 13.5027 9.16723C12.8704 9.73742 12.2278 10.3169 12.0001 11C11.7724 10.3169 11.1299 9.73742 10.4976 9.16723C9.74151 8.48544 9.00011 7.81686 9.00011 7H15.0001ZM7.00011 20C7.00011 18.4859 8.01905 17.8633 9.15695 17.168C10.2736 16.4858 11.5048 15.7335 12.0001 14C12.4954 15.7335 13.7266 16.4858 14.8433 17.168C15.9812 17.8633 17.0001 18.4859 17.0001 20H7.00011Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHourglass',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'hourglass'} {...props}>
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
