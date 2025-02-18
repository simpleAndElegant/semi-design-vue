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
        d="M23 12C23 18.0751 18.0751 23 12 23C11.7596 23 11.521 22.9923 11.2844 22.9771C9.87352 22.8865 9.0014 21.5803 8.72403 20.1939C8.20333 17.5913 6.69447 15.8585 3.80627 15.2777C2.42019 14.999 1.11349 14.1265 1.0229 12.7156C1.00771 12.479 1 12.2404 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM16.4201 12.9313C16.981 12.3356 16.987 11.4331 16.423 10.8404C15.8275 10.2146 14.9686 9.411 13.9365 8.72894C12.9777 8.09535 11.9375 7.7569 11.106 7.57613C10.1606 7.3706 9.28672 7.98234 9.07401 8.92613C8.8876 9.75323 8.71134 10.8179 8.71134 11.8866C8.71134 12.893 8.86763 13.8957 9.04152 14.6999C9.26115 15.7157 10.2341 16.3409 11.244 16.0958C12.0894 15.8907 13.1007 15.561 13.9365 15.0443C14.8936 14.4525 15.7894 13.601 16.4201 12.9313Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconXiguaLogo',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'xigua_logo'} {...props}>
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
