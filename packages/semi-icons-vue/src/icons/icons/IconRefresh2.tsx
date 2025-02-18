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
        d="M16.5607 0.43934C15.9749 -0.146447 15.0251 -0.146447 14.4393 0.43934C13.8536 1.02513 13.8536 1.97487 14.4393 2.56066L15.8787 4H12C6.47715 4 2 8.47715 2 14C2 19.5228 6.47715 24 12 24C17.5228 24 22 19.5228 22 14C22 13.1716 21.3284 12.5 20.5 12.5C19.6716 12.5 19 13.1716 19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14C5 10.134 8.13401 7 12 7H15.8787L14.4393 8.43934C13.8536 9.02513 13.8536 9.97487 14.4393 10.5607C15.0251 11.1464 15.9749 11.1464 16.5607 10.5607L20.5607 6.56066C21.1464 5.97487 21.1464 5.02513 20.5607 4.43934L16.5607 0.43934Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRefresh2',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'refresh2'} {...props}>
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
