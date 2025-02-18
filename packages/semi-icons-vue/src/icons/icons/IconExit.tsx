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
        d="M6.5 2C4.567 2 3 3.567 3 5.5V18.5C3 20.433 4.567 22 6.5 22H12C12.8284 22 13.5 21.3284 13.5 20.5C13.5 19.6716 12.8284 19 12 19H6.5C6.22386 19 6 18.7761 6 18.5V5.5C6 5.22386 6.22386 5 6.5 5H12C12.8284 5 13.5 4.32843 13.5 3.5C13.5 2.67157 12.8284 2 12 2H6.5ZM15.9393 5.93934C16.5251 5.35355 17.4749 5.35355 18.0607 5.93934L23.0607 10.9393C23.2045 11.0832 23.313 11.2489 23.3862 11.4258C23.4595 11.6027 23.5 11.7966 23.5 12C23.5 12.2034 23.4595 12.3973 23.3862 12.5742C23.313 12.7511 23.2045 12.9168 23.0607 13.0607L18.0607 18.0607C17.4749 18.6464 16.5251 18.6464 15.9393 18.0607C15.3536 17.4749 15.3536 16.5251 15.9393 15.9393L18.3787 13.5H11C10.1716 13.5 9.5 12.8284 9.5 12C9.5 11.1716 10.1716 10.5 11 10.5H18.3787L15.9393 8.06066C15.3536 7.47487 15.3536 6.52513 15.9393 5.93934Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconExit',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'exit'} {...props}>
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
