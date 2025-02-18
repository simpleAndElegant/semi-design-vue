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
        d="M5 1C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V8.41421C21 7.88378 20.7893 7.37507 20.4142 7L15 1.58579C14.6249 1.21071 14.1162 1 13.5858 1H5ZM13 3L5 3V21H19V9H14C13.4477 9 13 8.55228 13 8V3ZM17.5858 7L15 4.41421V7H17.5858ZM11.5 12C11.2239 12 11 12.2239 11 12.5V13.5C11 13.7761 11.2239 14 11.5 14H16.5C16.7761 14 17 13.7761 17 13.5V12.5C17 12.2239 16.7761 12 16.5 12H11.5ZM7 12.5C7 12.2239 7.22386 12 7.5 12H8.5C8.77614 12 9 12.2239 9 12.5V13.5C9 13.7761 8.77614 14 8.5 14H7.5C7.22386 14 7 13.7761 7 13.5V12.5ZM11.5 16C11.2239 16 11 16.2239 11 16.5V17.5C11 17.7761 11.2239 18 11.5 18H16.5C16.7761 18 17 17.7761 17 17.5V16.5C17 16.2239 16.7761 16 16.5 16H11.5ZM7 16.5C7 16.2239 7.22386 16 7.5 16H8.5C8.77614 16 9 16.2239 9 16.5V17.5C9 17.7761 8.77614 18 8.5 18H7.5C7.22386 18 7 17.7761 7 17.5V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBriefStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'brief_stroked'} {...props}>
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
