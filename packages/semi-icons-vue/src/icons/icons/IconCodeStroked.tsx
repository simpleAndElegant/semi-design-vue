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
        d="M14.9615 5.27473C15.1132 4.7437 14.8058 4.19021 14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03847 18.7253C8.88675 19.2563 9.19424 19.8098 9.72528 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473ZM7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L3.41421 12L7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289ZM16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929L20.5858 12L16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCodeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'code_stroked'} {...props}>
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
