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
        d="M3 4C2.44772 4 2 4.44772 2 5V10C2 10.5523 2.44772 11 3 11H21C21.5523 11 22 10.5523 22 10V5C22 4.44772 21.5523 4 21 4H3ZM4 9V6H20V9H4ZM3 13C2.44772 13 2 13.4477 2 14V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V14C22 13.4477 21.5523 13 21 13H3ZM4 18V15H20V18H4Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconSectionStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'section_stroked'} {...props}>
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
