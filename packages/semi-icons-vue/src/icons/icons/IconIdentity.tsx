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
        d="M4 4C4 3.44772 4.44772 3 5 3H6.375C6.92728 3 7.375 3.44772 7.375 4V20C7.375 20.5523 6.92728 21 6.375 21H5C4.44772 21 4 20.5523 4 20V4ZM9.625 4C9.625 3.44772 10.0727 3 10.625 3H13H15.25C15.9887 3 16.7201 3.14549 17.4026 3.42818C18.0851 3.71086 18.7051 4.12519 19.2275 4.64752C19.7498 5.16985 20.1641 5.78995 20.4468 6.47241C20.7295 7.15486 20.875 7.88631 20.875 8.625V15.375C20.875 16.1137 20.7295 16.8451 20.4468 17.5276C20.1641 18.2101 19.7498 18.8301 19.2275 19.3525C18.7051 19.8748 18.0851 20.2891 17.4026 20.5718C16.7201 20.8545 15.9887 21 15.25 21H13H10.625C10.0727 21 9.625 20.5523 9.625 20V4ZM17.5 15.375V8.625C17.5 8.32953 17.4418 8.03694 17.3287 7.76396C17.2157 7.49098 17.0499 7.24294 16.841 7.03401C16.6321 6.82508 16.384 6.65934 16.111 6.54627C15.8381 6.4332 15.5455 6.375 15.25 6.375H13V17.625H15.25C15.5455 17.625 15.8381 17.5668 16.111 17.4537C16.384 17.3407 16.6321 17.1749 16.841 16.966C17.0499 16.7571 17.2157 16.509 17.3287 16.236C17.4418 15.9631 17.5 15.6705 17.5 15.375Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconIdentity',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'identity'} {...props}>
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
