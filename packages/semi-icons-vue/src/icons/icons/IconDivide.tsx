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
        d="M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 11.1716 2.67157 10.5 3.5 10.5H20.5C21.3284 10.5 22 11.1716 22 12C22 12.8284 21.3284 13.5 20.5 13.5H3.5C2.67157 13.5 2 12.8284 2 12Z"
        fill="currentColor"
      />
      <path
        d="M12 21C13.3807 21 14.5 19.8807 14.5 18.5C14.5 17.1193 13.3807 16 12 16C10.6193 16 9.5 17.1193 9.5 18.5C9.5 19.8807 10.6193 21 12 21Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconDivide',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'divide'} {...props}>
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
