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
        d="M11.3001 2.2858C11.4804 2.10901 11.7275 2 12 2C12.0047 2 12.0094 2.00003 12.014 2.0001C12.0952 2.00121 12.1741 2.012 12.2495 2.03137L18.6695 3.53298C19.1218 3.63878 19.4417 4.04216 19.4417 4.5067V8.56075C19.4417 8.86655 19.3018 9.15555 19.0619 9.3452C18.822 9.53486 18.5085 9.60432 18.211 9.53376L13 8.29806V15.5V17.5V18.48C13 20.424 11.424 22 9.48 22H7.52C5.57596 22 4 20.424 4 18.48V18.02C4 16.076 5.57596 14.5 7.52 14.5H11V7.0332V3.00001C11 3 11 3 11 3C11 2.7354 11.1028 2.49481 11.2706 2.31595C11.2802 2.30571 11.29 2.29566 11.3001 2.2858ZM13 6.2426L17.4417 7.29588V5.29979L13 4.26089V6.2426ZM7.52 16.5H11V17.5V18.48C11 19.3195 10.3195 20 9.48 20H7.52C6.68053 20 6 19.3195 6 18.48V18.02C6 17.1805 6.68053 16.5 7.52 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMusicNoteStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'music_note_stroked'} {...props}>
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
