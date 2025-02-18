import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 25 24"
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
        d="M14.75 6.5C14.75 7.74264 13.7426 8.75 12.5 8.75C11.2574 8.75 10.25 7.74264 10.25 6.5C10.25 5.25736 11.2574 4.25 12.5 4.25C13.7426 4.25 14.75 5.25736 14.75 6.5ZM12.5 11C14.9853 11 17 8.98528 17 6.5C17 4.01472 14.9853 2 12.5 2C10.0147 2 8 4.01472 8 6.5C8 8.98528 10.0147 11 12.5 11ZM7 18.75C8.24264 18.75 9.25 17.7426 9.25 16.5C9.25 15.2574 8.24264 14.25 7 14.25C5.75736 14.25 4.75 15.2574 4.75 16.5C4.75 17.7426 5.75736 18.75 7 18.75ZM11.5 16.5C11.5 18.9853 9.48528 21 7 21C4.51472 21 2.5 18.9853 2.5 16.5C2.5 14.0147 4.51472 12 7 12C9.48528 12 11.5 14.0147 11.5 16.5ZM18.0001 18.7513C19.2428 18.7513 20.2501 17.744 20.2501 16.5013C20.2501 15.2587 19.2428 14.2513 18.0001 14.2513C16.7575 14.2513 15.7501 15.2587 15.7501 16.5013C15.7501 17.744 16.7575 18.7513 18.0001 18.7513ZM22.5001 16.5013C22.5001 18.9866 20.4854 21.0013 18.0001 21.0013C15.5149 21.0013 13.5001 18.9866 13.5001 16.5013C13.5001 14.016 15.5149 12.0013 18.0001 12.0013C20.4854 12.0013 22.5001 14.016 22.5001 16.5013Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconElementStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'element_stroked'} {...props}>
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
