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
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.0796 19.8369C17.7027 17.6014 14.7559 15.5 10.4593 15.5C6.16267 15.5 3.21588 17.6014 1.83892 19.8369C1.19533 20.8817 2.10818 22 3.33535 22H17.5832C18.8104 22 19.7232 20.8817 19.0796 19.8369Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0499 10.4204C14.5723 10.2065 15.0693 9.55774 15.2962 8.71085C15.5913 7.60959 15.5327 6.62629 14.7285 6.3203C14.6504 2.48444 13.1369 1 9.96023 1C6.7838 1 5.27021 2.48424 5.19199 6.31952C4.38589 6.62467 4.32701 7.60866 4.62233 8.7108C4.84958 9.55892 5.34768 10.2083 5.87087 10.4213C6.71146 12.5727 8.24123 14.013 9.96023 14.013C11.6795 14.013 13.2094 12.5723 14.0499 10.4204Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 1C19.4478 1 19 1.44772 19 2V4H17C16.4478 4 16 4.44772 16 5C16 5.55228 16.4478 6 17 6H19V8C19 8.55228 19.4478 9 20 9C20.5523 9 21 8.55228 21 8V6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4H21V2C21 1.44772 20.5523 1 20 1Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clip-path id="clip0">
          <rect width={24} height={24} fill="currentColor" />
        </clip-path>
      </defs>
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserAdd',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_add'} {...props}>
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
