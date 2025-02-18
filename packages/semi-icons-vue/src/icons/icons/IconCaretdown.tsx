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
        d="M17.549 15.659L12.753 21.139C12.6591 21.2464 12.5434 21.3325 12.4135 21.3915C12.2836 21.4505 12.1427 21.481 12 21.481C11.8574 21.481 11.7164 21.4505 11.5865 21.3915C11.4566 21.3325 11.3409 21.2464 11.247 21.139L6.45101 15.659C5.88501 15.011 6.34501 14 7.20401 14H16.796C17.656 14 18.115 15.012 17.549 15.659Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCaretdown',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'caretdown'} {...props}>
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
