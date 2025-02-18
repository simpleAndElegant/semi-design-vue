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
        d="M12 3.00001C12 2.6156 11.7797 2.26523 11.4332 2.09871C11.0867 1.93219 10.6755 1.979 10.3753 2.21914L4.64922 7.00001H2C1.44772 7.00001 1 7.44772 1 8.00001V16C1 16.5523 1.44772 17 2 17H4.64922L10.3753 21.7809C10.6755 22.021 11.0867 22.0678 11.4332 21.9013C11.7797 21.7348 12 21.3844 12 21V3.00001ZM14.0607 7.93934C14.6464 7.35355 15.5962 7.35355 16.182 7.93934L18 9.75736L19.818 7.93934C20.4038 7.35355 21.3536 7.35355 21.9393 7.93934C22.5251 8.52513 22.5251 9.47487 21.9393 10.0607L20.1213 11.8787L22.0607 13.818C22.6464 14.4038 22.6464 15.3536 22.0607 15.9393C21.4749 16.5251 20.5251 16.5251 19.9393 15.9393L18 14L16.0607 15.9393C15.4749 16.5251 14.5251 16.5251 13.9393 15.9393C13.3536 15.3536 13.3536 14.4038 13.9393 13.818L15.8787 11.8787L14.0607 10.0607C13.4749 9.47487 13.4749 8.52513 14.0607 7.93934Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMute',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'mute'} {...props}>
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
