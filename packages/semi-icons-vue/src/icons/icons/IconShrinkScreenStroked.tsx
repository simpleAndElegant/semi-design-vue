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
        d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L8.08579 9.5L4.5 9.5C3.94772 9.5 3.5 9.94772 3.5 10.5C3.5 11.0523 3.94772 11.5 4.5 11.5L10.4993 11.5H10.5C10.501 11.5 10.502 11.5 10.503 11.5C10.6375 11.4996 10.7657 11.4727 10.8828 11.4241C10.9999 11.3757 11.1096 11.304 11.205 11.2092C11.2064 11.2078 11.2078 11.2064 11.2092 11.205C11.4023 11.0108 11.4992 10.757 11.5 10.503C11.5 10.502 11.5 10.501 11.5 10.5V10.4993L11.5 4.5C11.5 3.94772 11.0523 3.5 10.5 3.5C9.94771 3.5 9.5 3.94772 9.5 4.5L9.5 8.08579L3.70711 2.29289ZM12.5759 13.1172C12.5273 13.2343 12.5004 13.3625 12.5 13.497L12.5 13.5V13.5007V19.5C12.5 20.0523 12.9477 20.5 13.5 20.5C14.0523 20.5 14.5 20.0523 14.5 19.5V15.9142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L15.9142 14.5H19.5C20.0523 14.5 20.5 14.0523 20.5 13.5C20.5 12.9477 20.0523 12.5 19.5 12.5H13.5007H13.5L13.497 12.5C13.2254 12.5008 12.9792 12.6099 12.7995 12.7864L12.7864 12.7995C12.6937 12.8938 12.6236 13.002 12.5759 13.1172Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconShrinkScreenStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'shrink_screen_stroked'} {...props}>
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
