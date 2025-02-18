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
        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4L11 13.5858L8.20711 10.7929C7.81658 10.4024 7.18342 10.4024 6.79289 10.7929C6.40237 11.1834 6.40237 11.8166 6.79289 12.2071L11.2929 16.7071C11.3888 16.803 11.4993 16.8753 11.6172 16.9241C11.7343 16.9727 11.8625 16.9996 11.997 17C11.998 17 11.999 17 12 17C12.001 17 12.002 17 12.003 17C12.2746 16.9992 12.5208 16.8901 12.7006 16.7136C12.7031 16.7111 12.7056 16.7086 12.7081 16.7061L17.2071 12.2071C17.5976 11.8166 17.5976 11.1834 17.2071 10.7929C16.8166 10.4024 16.1834 10.4024 15.7929 10.7929L13 13.5858L13 4ZM21 13C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V14.0032C2 13.4509 2.44772 13.0032 3 13.0032C3.55228 13.0032 4 13.4509 4 14.0032V20H20V14C20 13.4477 20.4477 13 21 13Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconDownloadStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'download_stroked'} {...props}>
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
