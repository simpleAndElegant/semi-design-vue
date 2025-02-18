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
        d="M10 2C10.8284 2 11.5 2.67157 11.5 3.5C11.5 4.32843 10.8284 5 10 5H7.12132L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607C10.4749 11.6464 9.52513 11.6464 8.93934 11.0607L5 7.12132V10C5 10.8284 4.32843 11.5 3.5 11.5C2.67157 11.5 2 10.8284 2 10V3.5C2 2.67157 2.67157 2 3.5 2H10Z"
        fill="currentColor"
      />
      <path
        d="M19 14C19 13.1716 19.6716 12.5 20.5 12.5C21.3284 12.5 22 13.1716 22 14V20.5C22 21.3284 21.3284 22 20.5 22H14C13.1716 22 12.5 21.3284 12.5 20.5C12.5 19.6716 13.1716 19 14 19H16.8787L12.9393 15.0607C12.3536 14.4749 12.3536 13.5251 12.9393 12.9393C13.5251 12.3536 14.4749 12.3536 15.0607 12.9393L19 16.8787V14Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconExpand',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'expand'} {...props}>
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
