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
        d="M12 3.00001C12 2.6156 11.7797 2.26523 11.4332 2.09871C11.0867 1.93219 10.6755 1.979 10.3753 2.21914L4.64922 7.00001H2C1.44772 7.00001 1 7.44772 1 8.00001V16C1 16.5523 1.44772 17 2 17H4.64922L10.3753 21.7809C10.6755 22.021 11.0867 22.0678 11.4332 21.9013C11.7797 21.7348 12 21.3844 12 21V3.00001ZM16.0714 8.45015C15.4915 7.85845 14.5418 7.84882 13.9502 8.42864C13.3585 9.00846 13.3488 9.95815 13.9286 10.5499C14.2836 10.9121 14.5 11.404 14.5 11.9495C14.5 12.495 14.2836 12.9869 13.9286 13.3491C13.3488 13.9408 13.3585 14.8905 13.9502 15.4703C14.5418 16.0502 15.4915 16.0405 16.0714 15.4488C16.9536 14.5486 17.5 13.3113 17.5 11.9495C17.5 10.5876 16.9536 9.35043 16.0714 8.45015Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVolume1',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'volume_1'} {...props}>
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
