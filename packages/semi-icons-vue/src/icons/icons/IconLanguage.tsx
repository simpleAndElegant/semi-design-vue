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
        d="M6.62333 3.24915L7.05683 4H2.6C1.71634 4 1 4.67158 1 5.5C1 6.32843 1.71634 7 2.6 7H4.5C4.50001 9.45276 5.59062 11.7127 7 13.5C5.89676 14.1383 4.36624 14.5 3 14.5C2.17157 14.5 1.5 15.1715 1.5 16C1.5 16.8284 2.17157 17.5 3 17.5C5.23087 17.5 7.29925 16.8042 9 15.6179C10.4054 16.5983 12.0619 17.2436 13.8537 17.4381L12.1582 20.8291C11.7877 21.5701 12.0881 22.4711 12.829 22.8416C13.57 23.2121 14.471 22.9117 14.8415 22.1708L15.4269 21H19.5728L20.1582 22.1708C20.5287 22.9117 21.4297 23.2121 22.1707 22.8416C22.9116 22.4711 23.212 21.5701 22.8415 20.8291L18.8415 12.8291C18.5874 12.321 18.068 12 17.4998 12C16.9317 12 16.4123 12.321 16.1582 12.8291L15.3071 14.5314C15.2079 14.5108 15.1052 14.5 15 14.5C13.6338 14.5 12.1032 14.1383 11 13.5C12.4094 11.7127 13.5 9.45276 13.5 7H15.4C16.2837 7 17 6.32843 17 5.5C17 4.67158 16.2837 4 15.4 4H10.5209L9.22141 1.74915C8.80719 1.03171 7.88981 0.7859 7.17237 1.20011C6.45493 1.61433 6.20912 2.53171 6.62333 3.24915ZM7.5 7L10.5 7C10.5 8.68872 9.94186 10.2471 9 11.5007C8.05814 10.2471 7.50001 8.68872 7.5 7ZM17.4998 16.8541L18.5728 19H16.4269L17.4998 16.8541Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconLanguage',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'language'} {...props}>
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
