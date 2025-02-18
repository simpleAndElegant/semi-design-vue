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
        d="M5 4.5V9H5.5C5.77614 9 6 9.22386 6 9.5V10.5C6 10.7761 5.77614 11 5.5 11H2.5C2.22386 11 2 10.7761 2 10.5V9.5C2 9.22386 2.22386 9 2.5 9H3V5H2.5C2.22386 5 2 4.77614 2 4.5V3.5C2 3.22386 2.22386 3 2.5 3H3H4H4.5C4.77614 3 5 3.22386 5 3.5V4V4.5ZM8 4.5C8 4.22386 8.22386 4 8.5 4H20.5C20.7761 4 21 4.22386 21 4.5V5.5C21 5.77614 20.7761 6 20.5 6H8.5C8.22386 6 8 5.77614 8 5.5V4.5ZM8 14.5C8 14.2239 8.22386 14 8.5 14H20.5C20.7761 14 21 14.2239 21 14.5V15.5C21 15.7761 20.7761 16 20.5 16H8.5C8.22386 16 8 15.7761 8 15.5V14.5ZM8.5 8C8.22386 8 8 8.22386 8 8.5V9.5C8 9.77614 8.22386 10 8.5 10H15.5C15.7761 10 16 9.77614 16 9.5V8.5C16 8.22386 15.7761 8 15.5 8H8.5ZM8 18.5C8 18.2239 8.22386 18 8.5 18H15.5C15.7761 18 16 18.2239 16 18.5V19.5C16 19.7761 15.7761 20 15.5 20H8.5C8.22386 20 8 19.7761 8 19.5V18.5ZM2 13.5C2 13.2239 2.22386 13 2.5 13H5.5C5.77614 13 6 13.2239 6 13.5V14.5L6 17.5C6 17.7761 5.77614 18 5.5 18H4L4 19H5.5C5.77614 19 6 19.2239 6 19.5V20.5C6 20.7761 5.77614 21 5.5 21H2.5C2.22386 21 2 20.7761 2 20.5V19.5V16.5C2 16.2239 2.22386 16 2.5 16H4V15H2.5C2.22386 15 2 14.7761 2 14.5V13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconOrderedListStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'ordered_list_stroked'} {...props}>
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
