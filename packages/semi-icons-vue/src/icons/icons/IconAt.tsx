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
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9535 19.8339 13.865 19.53 14.7092C19.5052 14.7514 19.4796 14.7914 19.4533 14.8295C19.1842 15.2191 18.7811 15.5 18 15.5C17.6733 15.5 17.3669 15.3728 17.0938 14.9955C17.0623 14.952 17.0309 14.9046 17 14.8529V9.5C17 8.67157 16.3284 8 15.5 8C15.0812 8 14.7026 8.1716 14.4304 8.44832C13.607 7.85172 12.5946 7.5 11.5 7.5C8.73858 7.5 6.5 9.73858 6.5 12.5C6.5 15.2614 8.73858 17.5 11.5 17.5C12.5946 17.5 13.607 17.1483 14.4304 16.5517C14.4977 16.62 14.5714 16.682 14.6506 16.7365L14.6636 16.7545C15.4762 17.8772 16.6698 18.5 18 18.5C19.7189 18.5 21.0658 17.7735 21.9217 16.5345C21.9644 16.4727 22.0055 16.4101 22.0453 16.3466C22.1356 16.2318 22.2105 16.1018 22.2658 15.9585L22.2666 15.9565C22.8039 14.908 23 13.6833 23 12.5H22.9888C22.9962 12.3342 23 12.1675 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.7924 23 13.5668 22.916 14.3143 22.7558C15.1243 22.5822 15.6403 21.7849 15.4667 20.9748C15.2931 20.1648 14.4958 19.6488 13.6857 19.8224C13.1436 19.9386 12.5798 20 12 20C7.58172 20 4 16.4183 4 12ZM13.5 12.5C13.5 11.3954 12.6046 10.5 11.5 10.5C10.3954 10.5 9.5 11.3954 9.5 12.5C9.5 13.6046 10.3954 14.5 11.5 14.5C12.6046 14.5 13.5 13.6046 13.5 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconAt',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'at'} {...props}>
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
