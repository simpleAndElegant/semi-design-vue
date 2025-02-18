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
        d="M7 3C6.17157 3 5.5 3.67157 5.5 4.5C5.5 5.32843 6.17157 6 7 6C7.82843 6 8.5 5.32843 8.5 4.5C8.5 3.67157 7.82843 3 7 3ZM2.5 4.5C2.5 2.01472 4.51472 0 7 0C9.48528 0 11.5 2.01472 11.5 4.5C11.5 6.45933 10.2478 8.12619 8.5 8.74394V12.9686C9.67574 12.6311 11.1218 12.5386 12.3668 12.4591C12.4633 12.4529 12.5586 12.4468 12.6524 12.4407C14.1461 12.3433 15.3492 12.2371 16.1831 11.9289C16.2081 11.9197 16.2323 11.9105 16.2556 11.9012C14.9075 11.1239 14 9.66795 14 7.99999C14 5.51471 16.0147 3.49999 18.5 3.49999C20.9853 3.49999 23 5.51471 23 7.99999C23 10.0356 21.6484 11.7555 19.7937 12.3113C19.6537 12.7253 19.4423 13.1061 19.1589 13.4467C18.6201 14.0943 17.9105 14.4889 17.2231 14.7429C15.9008 15.2316 14.2289 15.3442 12.8476 15.4343C12.8111 15.4367 12.7749 15.4391 12.7387 15.4414C11.4416 15.5259 10.3672 15.5959 9.55151 15.7928C10.7285 16.6044 11.5 17.9621 11.5 19.5C11.5 21.9853 9.48528 24 7 24C4.51472 24 2.5 21.9853 2.5 19.5C2.5 17.5407 3.75221 15.8738 5.5 15.2561V8.74394C3.75221 8.12619 2.5 6.45933 2.5 4.5ZM18.5 6.49999C17.6716 6.49999 17 7.17157 17 7.99999C17 8.82842 17.6716 9.49999 18.5 9.49999C19.3284 9.49999 20 8.82842 20 7.99999C20 7.17157 19.3284 6.49999 18.5 6.49999ZM7 18C6.17157 18 5.5 18.6716 5.5 19.5C5.5 20.3284 6.17157 21 7 21C7.82843 21 8.5 20.3284 8.5 19.5C8.5 18.6716 7.82843 18 7 18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSourceControl',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'source_control'} {...props}>
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
