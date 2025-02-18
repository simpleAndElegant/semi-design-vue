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
        d="M0.21457 12.4636C0.0728256 12.8179 0 13.1961 0 13.5777V19C0 20.6569 1.34315 22 3 22H21C22.6569 22 24 20.6569 24 19V13.5777C24 13.1961 23.9272 12.8179 23.7854 12.4636L20.5029 4.25722C20.1992 3.4979 19.4637 3 18.6459 3H5.35407C4.53626 3 3.80084 3.4979 3.49711 4.25722L0.21457 12.4636ZM5.5 6H18.5L21 13H16C15.4477 13 15 13.4477 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 13.4477 8.55228 13 8 13H3L5.5 6Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconInbox',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'inbox'} {...props}>
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
