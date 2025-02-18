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
        d="M8.5 1C7.94772 1 7.5 1.44772 7.5 2C7.5 2.55228 7.94772 3 8.5 3H15.5C16.0523 3 16.5 2.55228 16.5 2C16.5 1.44772 16.0523 1 15.5 1H8.5ZM12 4C6.75332 4 2.5 8.25332 2.5 13.5C2.5 18.7467 6.75332 23 12 23C17.2467 23 21.5 18.7467 21.5 13.5C21.5 10.8548 20.4189 8.46217 18.6745 6.73974L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L17.1013 5.48446C15.6277 4.54461 13.8774 4 12 4ZM4.5 13.5C4.5 9.35789 7.85788 6 12 6C16.1421 6 19.5 9.35789 19.5 13.5C19.5 17.6421 16.1421 21 12 21C7.85788 21 4.5 17.6421 4.5 13.5ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13.5C11 14.0523 11.4477 14.5 12 14.5C12.5523 14.5 13 14.0523 13 13.5V9Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconStopwatchStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'stopwatch_stroked'} {...props}>
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
