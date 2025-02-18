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
        d="M8.91798 4.01101C8.70936 3.40601 8.13988 3 7.49992 3C6.85996 3 6.29048 3.40601 6.08186 4.01101L1.08186 18.511C0.811801 19.2942 1.22776 20.148 2.01093 20.4181C2.79411 20.6881 3.64792 20.2722 3.91798 19.489L4.94866 16.5H10.0512L11.0819 19.489C11.3519 20.2722 12.2057 20.6881 12.9889 20.4181C13.7721 20.148 14.188 19.2942 13.918 18.511L8.91798 4.01101ZM9.01669 13.5H5.98315L7.49992 9.10136L9.01669 13.5ZM15.9999 14.5C15.9999 12.4705 17.2243 11.5 17.9999 11.5C18.7755 11.5 19.9999 12.4705 19.9999 14.5C19.9999 16.5295 18.7755 17.5 17.9999 17.5C17.2243 17.5 15.9999 16.5295 15.9999 14.5ZM17.9999 8.5C18.8536 8.5 19.6173 8.73345 20.2754 9.13338C20.5471 8.75013 20.9943 8.5 21.4999 8.5C22.3283 8.5 22.9999 9.17157 22.9999 10V19C22.9999 19.8284 22.3283 20.5 21.4999 20.5C20.9943 20.5 20.5471 20.2499 20.2754 19.8666C19.6173 20.2665 18.8536 20.5 17.9999 20.5C14.9095 20.5 12.9999 17.441 12.9999 14.5C12.9999 11.559 14.9095 8.5 17.9999 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCaseSensitive',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'case_sensitive'} {...props}>
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
