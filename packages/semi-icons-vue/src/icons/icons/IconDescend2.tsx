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
      <g opacity={0.99}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4.5C8 3.67157 7.32843 3 6.5 3C5.67157 3 5 3.67157 5 4.5V15.8787L3.56066 14.4393C2.97487 13.8536 2.02513 13.8536 1.43934 14.4393C0.853553 15.0251 0.853554 15.9749 1.43934 16.5607L5.43934 20.5607C6.02513 21.1464 6.97487 21.1464 7.56066 20.5607L11.5607 16.5607C12.1464 15.9749 12.1464 15.0251 11.5607 14.4393C10.9749 13.8536 10.0251 13.8536 9.43934 14.4393L8 15.8787V4.5ZM13.5 3C12.6716 3 12 3.67157 12 4.5C12 5.32843 12.6716 6 13.5 6H21.5C22.3284 6 23 5.32843 23 4.5C23 3.67157 22.3284 3 21.5 3H13.5ZM12 12C12 11.1716 12.6716 10.5 13.5 10.5H21.5C22.3284 10.5 23 11.1716 23 12C23 12.8284 22.3284 13.5 21.5 13.5H13.5C12.6716 13.5 12 12.8284 12 12ZM12 19.5C12 18.6716 12.6716 18 13.5 18H21.5C22.3284 18 23 18.6716 23 19.5C23 20.3284 22.3284 21 21.5 21H13.5C12.6716 21 12 20.3284 12 19.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconDescend2',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'descend2'} {...props}>
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
