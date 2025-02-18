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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM18.9988 11.8778C19.0132 12.7061 18.3535 13.3893 17.5252 13.4038L13.5258 13.4736L13.5956 17.473C13.61 18.3013 12.9503 18.9845 12.122 18.9989C11.2937 19.0134 10.6105 18.3537 10.596 17.5254L10.5262 13.526L6.52684 13.5958C5.69854 13.6102 5.01535 12.9505 5.00089 12.1222C4.98644 11.2939 5.64619 10.6107 6.47449 10.5962L10.4739 10.5264L10.4041 6.52703C10.3896 5.69873 11.0494 5.01553 11.8777 5.00108C12.706 4.98662 13.3892 5.64637 13.4036 6.47467L13.4734 10.4741L17.4728 10.4043C18.3011 10.3898 18.9843 11.0495 18.9988 11.8778Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconPlusCircle',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'plus_circle'} {...props}>
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
