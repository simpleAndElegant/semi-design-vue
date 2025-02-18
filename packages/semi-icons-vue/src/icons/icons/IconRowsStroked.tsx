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
        d="M19 4C20.1046 4 21 4.89543 21 6L21 9C21 10.1046 20.1046 11 19 11L5 11C3.89543 11 3 10.1046 3 9L3 6C3 4.89543 3.89543 4 5 4L19 4ZM19 9L19 6L5 6L5 9L19 9Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 13C20.1046 13 21 13.8954 21 15L21 18C21 19.1046 20.1046 20 19 20L5 20C3.89543 20 3 19.1046 3 18L3 15C3 13.8954 3.89543 13 5 13L19 13ZM19 18L19 15L5 15L5 18L19 18Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRowsStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'rows_stroked'} {...props}>
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
