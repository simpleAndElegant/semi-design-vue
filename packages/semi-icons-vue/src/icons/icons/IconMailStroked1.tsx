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
        d="M21 8.0412L13.3183 12.405C12.6314 12.7706 11.7962 12.7706 11.1093 12.405L3 7.79829L3 18H21V8.0412ZM4.29229 6L12.2138 10.5L20.1353 6H4.29229ZM1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V6.90481L23.0001 6.90499L23 6.90505V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMailStroked1',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'mail_stroked_1'} {...props}>
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
